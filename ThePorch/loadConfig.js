import ApollosConfig from '@apollosproject/config';
import FRAGMENTS from '@apollosproject/ui-fragments';
import gql from 'graphql-tag';

ApollosConfig.loadJs({
  FRAGMENTS: {
    ...FRAGMENTS,
    RELATED_NODE_FRAGMENT: gql`
      fragment RelatedFeatureNodeFragment on Node {
        id
        ... on Url {
          url
        }
        ... on Link {
          url
        }
        ... on ContentChannel {
          name
        }
      }
    `,
    LIVE_STREAM_FRAGMENT: gql`
      fragment LiveStreamFragment on LiveStream {
        id
        isLive
        eventStartTime
        media {
          sources {
            uri
          }
        }
        webViewUrl

        contentItem {
          ... on ContentItem {
            id
          }
        }
      }
    `,
    CONTENT_MEDIA_FRAGMENT: gql`
      fragment contentMediaFragment on ContentItem {
        id
        title
        parentChannel {
          id
          name
        }
        ... on LiveStream {
          coverImage {
            sources {
              uri
            }
          }
        }
        ... on WCCMessage {
          coverImage: videoThumbnailImage {
            sources {
              uri
            }
          }
        }
        videos {
          sources {
            uri
          }
        }
        audios {
          sources {
            uri
          }
        }
      }
    `,
    CONTENT_ITEM_FRAGMENT: gql`
      fragment contentItemFragment on ContentItem {
        id
        title
        summary
        htmlContent
        coverImage {
          name
          sources {
            uri
          }
        }
        theme {
          type
          colors {
            primary
            secondary
            screen
            paper
          }
        }
        parentChannel {
          id
          name
        }
        videos {
          sources {
            uri
          }
        }
        audios {
          sources {
            uri
          }
        }
        ... on WCCMessage {
          videos {
            sources {
              uri
            }
          }
          series {
            coverImage {
              sources {
                uri
              }
            }
          }
        }
      }
    `,
    CONTENT_CARD_FRAGMENT: gql`
      fragment contentCardFragment on ContentItem {
        id
        __typename
        coverImage {
          sources {
            uri
          }
        }
        theme {
          type
          colors {
            primary
            secondary
            screen
            paper
          }
        }
        title
        hyphenatedTitle: title(hyphenated: true)
        summary
        ... on WCCMessage {
          videos {
            sources {
              uri
            }
          }
          series {
            coverImage {
              sources {
                uri
              }
            }
          }
        }
      }
    `,
    CAMPUS_PARTS_FRAGMENT: gql`
      fragment CampusParts on Campus {
        id
        name
        description
        latitude
        longitude
        street1
        street2
        city
        state
        postalCode
        image {
          uri
        }
        leader {
          id
          firstName
          lastName
        }
        serviceTimes
        contactEmail
        social {
          url
          icon
        }
      }
    `,
  },
});
