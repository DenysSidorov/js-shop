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

export const setMetaTag = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if(tag){
    tag.content = content;
  } else {
    let m = document.createElement('meta');
    m.name = name;
    m.content = content;
    document.head.appendChild(m);
  }
}