const capitalizeString = (str) => {
  // const firstLetter = str.charAt(0).toUpperCase();
  // return firstLetter.concat(str.slice(1))
  return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  // return str.charAt(0).toUpperCase().concat(str.slice(1));
}