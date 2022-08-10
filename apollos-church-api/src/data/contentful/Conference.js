import gql from 'graphql-tag';
import { parseGlobalId, createGlobalId } from '@apollosproject/server-core';
import moment from 'moment';

import ContentfulDataSource from './ContentfulDataSource';

const CONFERENCE_CODE = 'awaken'; // todo: move into .env

export class dataSource extends ContentfulDataSource {
  getFromCode = async (code) => {
    const result = await this.get(`entries`, {
      content_type: 'conference',
      'fields.code': code,
    });

    if (result.length === 0)
      throw new Error(`Conference with code ${code} could not be found.`);
    return result[0];
  };
}

export const schema = gql`
  type Conference implements Node @cacheControl(maxAge: 10) {
    id: ID! @cacheControl(maxAge: 10)
    title: String @cacheControl(maxAge: 10)
    code: String @cacheControl(maxAge: 10)
    days: [ConferenceDay] @cacheControl(maxAge: 10)
    maps: [Location] @cacheControl(maxAge: 10)
    upNext(likedIds: [ID]): ContentItem @cacheControl(maxAge: 10)
    announcements(first: Int): ContentItemsConnection
    mediaSeries: WCCSeries
  }

  extend type Query {
    conference(code: String): Conference
  }
`;

export const resolver = {
  Query: {
    conference: (_, { code = CONFERENCE_CODE }, { dataSources }) =>
      dataSources.Conference.getFromCode(code),
  },
  Conference: {
    id: ({ sys }, args, context, { parentType }) =>
      createGlobalId(sys.id, parentType.name),
    title: ({ fields }) => fields.title,
    code: ({ fields }) => fields.code,
    days: ({ fields }) => fields.days,
    maps: ({ fields }) => fields.maps,
    announcements: ({ fields }, { first = 5 }) => ({
      edges: fields.announcements
        .map((node) => ({
          node,
          cursor: null,
        }))
        .slice(0, first),
    }),
    mediaSeries: (a, b, { dataSources }) =>
      dataSources.WCCSeries.getFromId('1227'),
    upNext: ({ fields }, { likedIds = [] }) => {
      const currentTime = moment();

      // find the current day:
      let { days = [] } = fields;
      days = days.sort((a, b) => moment(a.fields.date) - moment(b.fields.date));

      let upNext = null;
      let startTimeToBeBefore = null;
      days.find(({ fields: { scheduleItem = [] } = {} }) =>
        scheduleItem.find((item) => {
          // look for an event that's less then halfway over or after currentTime
          const startTime = moment(item.fields.startTime);
          const endTime = moment(item.fields.endTime);
          if (startTime > currentTime) {
            if (upNext && moment(upNext.startTime) < startTime) return true;
            if (!startTimeToBeBefore || startTime < startTimeToBeBefore)
              upNext = item;
          }

          const halfwayOverTime = startTime + (endTime - startTime) / 2;
          if (halfwayOverTime > currentTime) {
            upNext = item;
            startTimeToBeBefore = halfwayOverTime;
          }

          if (upNext && likedIds.includes(upNext.id)) {
            return true;
          }

          return false;
        })
      );

      // If the event is over
      if (!upNext) {
        const lastDay = days[days.length - 1];
        return lastDay.fields.scheduleItem[
          lastDay.fields.scheduleItem.length - 1
        ];
      }

      if (likedIds) {
        const parsedLikedIds = likedIds.map((id) => parseGlobalId(id).id);
        const childNodes = upNext.fields.breakouts || [];
        if (childNodes.length) {
          childNodes.find((node) => {
            if (parsedLikedIds.includes(node.sys.id)) {
              upNext = node;
              return true;
            }
            return false;
          });
        }
      }

      return upNext;
    },
  },
};
