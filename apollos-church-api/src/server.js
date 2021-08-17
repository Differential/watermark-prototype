import { ApolloServer } from 'apollo-server-express';
import ApollosConfig from '@apollosproject/config';
import express from 'express';
import { RockLoggingExtension } from '@apollosproject/rock-apollo-data-source';
import { get } from 'lodash';
import { setupUniversalLinks } from '@apollosproject/server-core';
import { BugsnagPlugin } from '@apollosproject/bugsnag';
import {
  resolvers,
  schema,
  testSchema,
  context,
  dataSources,
  applyServerMiddleware,
  setupJobs,
} from './data';

export { resolvers, schema, testSchema };

const isDev =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';

const extensions = isDev ? [() => new RockLoggingExtension()] : [];

const cacheOptions = isDev
  ? {}
  : {
      cacheControl: {
        stripFormattedExtensions: false,
        calculateHttpHeaders: true,
        defaultMaxAge: 3600,
      },
    };

const { ENGINE } = ApollosConfig;

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources,
  context,
  introspection: true,
  extensions,
  plugins: [new BugsnagPlugin()],
  formatError: (error) => {
    console.error(get(error, 'extensions.exception.stacktrace').join('\n'));
    return error;
  },
  playground: {
    settings: {
      'editor.cursorShape': 'line',
    },
  },
  ...cacheOptions,
  engine: {
    apiKey: ENGINE.API_KEY,
    schemaTag: ENGINE.SCHEMA_TAG,
    reportSchema: true,
    variant: "current",
  },
});

const app = express();

// health check
app.get('/health', (req, res) => {
  res.send('ok');
});

function appendStaleWhileRevalidate(header) {
  return `${header}, stale-while-revalidate=600, stale-if-error=86400`;
}

app.use((req, res, next) => {
  // Set a constant surrogate key for soft purging
  res.setHeader('Surrogate-Key', 'all');

  const prevSetHeader = res.setHeader;
  res.setHeader = (...args) => {
    // eslint-disable-next-line prefer-const
    let [name, value] = args;
    if (name && name.toLowerCase() === 'cache-control') {
      value = appendStaleWhileRevalidate(value.toString());
    }
    prevSetHeader.apply(res, [name, value]);
  };
  next();
});

applyServerMiddleware({ app, dataSources, context });
setupJobs({ app, dataSources, context });
// Comment out if you don't want the API serving apple-app-site-association or assetlinks manifests.
setupUniversalLinks({ app });

apolloServer.applyMiddleware({ app });
apolloServer.applyMiddleware({ app, path: '/' });

export default app;
