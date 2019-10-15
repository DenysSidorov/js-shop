export const checkTextLength = (text, maxLength) => {
  let localText = text;
  if (localText.length > maxLength) {
    localText = `${localText.substr(0, maxLength - 3)}...`;
    return localText;
  }
  return text;
}


export const setTitle = (title) => {
  const shopName = 'DOSHKI.COM | Картины на дереве в Украине | Картины на досках Украина';
  let pageTitle = `${title} - ${shopName}`;
  window.document.title = pageTitle;
}

export const setMetaTag = (name = 'description', value) => {
  let content = 'деревяные картины в украине, интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины'

  let tag = document.querySelector(`meta[name="${name}"]`);

  if (tag) {
    tag.content = value ? value : content;
  } else {
    let m = document.createElement('meta');
    m.name = name;
    m.content = value ? value : content;
    document.head.appendChild(m);
  }
}
