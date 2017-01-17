import loaderUtils from 'loader-utils';

module.exports = function(scss) {
  const query = loaderUtils.parseQuery(this.query);
  const { cardId } = query;

  if (cardId) {
    return '#' + cardId + ' {' + scss + '}';
  }

  return '.remoteComponent {' + scss + '}';
};
