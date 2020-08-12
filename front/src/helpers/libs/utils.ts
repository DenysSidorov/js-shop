export const checkTextLength = (text: string, maxLength: number): string => {
  let localText = text;
  if (localText.length > maxLength) {
    localText = `${localText.substr(0, maxLength - 3)}...`;
    return localText;
  }
  return text;
};

export const setTitle = (title: string): void => {
  const shopName = 'DOSHKI.COM | Картины на дереве в Украине | Картины на досках Украина';
  const pageTitle = `${title} - ${shopName}`;
  window.document.title = pageTitle;
};

export const setMetaTag = (name = 'description', value: any) => {
  const content =
    'деревяные картины в украине, интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины';

  const tag: any = document.querySelector(`meta[name="${name}"]`);

  if (tag) {
    tag.content = value || content;
  } else {
    const m = document.createElement('meta');
    m.name = name;
    m.content = value || content;
    document.head.appendChild(m);
  }
};
