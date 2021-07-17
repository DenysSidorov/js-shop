export const checkTextLength = (text: string, maxLength: number): string => {
  let localText = text;
  if (localText.length > maxLength) {
    localText = `${localText.substr(0, maxLength - 3)}...`;
    return localText;
  }
  return text;
};
