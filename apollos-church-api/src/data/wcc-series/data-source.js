import WCCMediaAPIDataSource from '../WCCMediaAPIDataSource';

class dataSource extends WCCMediaAPIDataSource {
  objectType = 'series';

  objectTypePlural = 'series';

  getShareUrl = async ({ id: series_id }) => { // eslint-disable-line
    const {
      edges: messages,
    } = await this.context.dataSources.WCCMessage.paginate({
      filters: { filter: { series_id } },
      pagination: { limit: 1 },
    });
    if (!messages || !messages.length) return {};
    const { id } = messages[0].node;
    return `https://www.theporch.live/messages/${id}`;
  };
}

export default dataSource;
