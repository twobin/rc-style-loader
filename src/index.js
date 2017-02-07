import loaderUtils from 'loader-utils';

module.exports = function(scss) {
  // const query = loaderUtils.parseQuery(this.query);

  let cardId;

  if (this.resourcePath) {
    const pathArray = this.resourcePath.replace(/^\//,'').split('/') || [];

    if (pathArray.length && pathArray[pathArray.length - 1] && pathArray[pathArray.length - 1].indexOf('scss') !== -1) {
      cardId = pathArray.length - 2 ? pathArray[pathArray.length - 2] : null;
    }

    if (cardId) {
      return '.onenessCard-' + cardId + ' {' + scss + '}';
    }

    return scss;
  }

  return scss;
};
