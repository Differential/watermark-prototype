import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import PlayButtonConnected from '@apollosproject/ui-connected/src/MediaControlsConnected/PlayButtonConnected';
import PlayButton from './PlayButton';

const MediaControls = ({
  coverImageSources,
  error,
  liveStreamSource,
  loading,
  parentChannelName,
  title,
  videoSource,
  webViewUrl,
  ...props
}) => {
  if (loading || error) return null;

  let Control = null;

  //  We have a `liveStreamSource` so content is live!
  if (get(liveStreamSource, 'uri', false)) {
    Control = (
      <PlayButtonConnected
        Component={PlayButton}
        coverImageSources={coverImageSources}
        parentChannelName={parentChannelName}
        title={title}
        videoSource={liveStreamSource}
        {...props}
      />
    );
  }
  // Default case, normal media.
  else {
    Control = (
      <PlayButtonConnected
        Component={PlayButton}
        coverImageSources={coverImageSources}
        parentChannelName={parentChannelName}
        title={title}
        videoSource={videoSource}
        {...props}
      />
    );
  }

  return Control;
};

MediaControls.propTypes = {
  coverImageSources: PropTypes.arrayOf(PropTypes.shape({})),
  error: PropTypes.string,
  liveStreamSource: PropTypes.string,
  loading: PropTypes.bool,
  parentChannelName: PropTypes.string,
  title: PropTypes.string,
  videoSource: PropTypes.shape({}),
  webViewUrl: PropTypes.string,
};

export default MediaControls;
