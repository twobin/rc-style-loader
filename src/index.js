import loaderUtils from 'loader-utils';

function analyse(code) {
  let open = 1;
  let closedIndex = -1;
  const indexOfGlobal = code.indexOf(':global {');
  if (indexOfGlobal === -1) {
    return {
      localPart: code,
      globalPart: '',
    };
  }
  for (let i = indexOfGlobal + 9; i < code.length; i++) {
    if (code[i] === '{') {
      open += 1;
    } else if (code[i] === '}') {
      open -= 1;
    }
    if(open === 0) {
      closedIndex = i;
      return {
        localPart: code.substring(0, indexOfGlobal) + code.substring(closedIndex + 1, code.length + 1),
        globalPart: code.substring(indexOfGlobal, closedIndex + 1)
    };
    }
  }

  return {
    localPart: code,
    globalPart: '',
  };
}

module.exports = function(scss) {
  const { localPart, globalPart } = analyse(scss);

  let cardId;

  if (this.resourcePath) {
    const pathArray = this.resourcePath.replace(/^\//,'').split('/') || [];

    if (pathArray.length && pathArray[pathArray.length - 1] && pathArray[pathArray.length - 1].indexOf('scss') !== -1) {
      cardId = pathArray.length - 2 ? pathArray[pathArray.length - 2] : null;
    }

    if (cardId) {
      return '.onenessCard-' + cardId + ' {' + localPart + '}' + globalPart;
    }

    return scss;
  }

  return scss;
};
