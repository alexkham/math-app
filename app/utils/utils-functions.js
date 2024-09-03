
// export function getImageUrl(url) {
//   const imageName = url.replace(/^\//, '').replace(/\//g, '_') + '.jpg';
//   return `/images/${imageName}`;
// }
export function getImageUrl(url) {
  // Remove the domain if present
  const path = url.replace(/^https?:\/\/[^\/]+/, '');
  
  // Remove leading slash, replace remaining slashes with underscores
  let imageName = path.replace(/^\//, '').replace(/\//g, '_');
  
  // Only add .jpg if there's no file extension
  if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(imageName)) {
    imageName += '.jpg';
  }
  
  return `/images/${imageName}`;
}


// Updated capitalizeWords function to handle undefined or non-string inputs
export const capitalizeWords = (str) => {
  if (typeof str !== 'string') return ''; // Return an empty string or any other fallback value
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


export const formatTitle = (url) => {
  const title = url.split('/').pop() || url;
  return capitalizeWords(title.replaceAll('_', ' ').replaceAll('-', ' '));
};


export const range=(start, end)=> {
  const result = [];
  for (let i = start; i <= end; i++) {
      result.push(i);
  }
  return result;}



  