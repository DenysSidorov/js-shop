export const checkTextLength = (text, maxLength) => {
  let localText = text;
  if (localText.length > maxLength) {
    localText = `${localText.substr(0, maxLength - 3)  }...`;
    return localText;
  }
  return text;
}


export const setTitle = (title) => {
  const shopName = 'Магазин сумок и рюкзаков';
  let pageTitle = `${title} - ${shopName}`;
  window.document.title = pageTitle;
}