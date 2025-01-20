
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


  // export const createContentHtml = ({
  //   description = '',
  //   backgroundColor = '#ebf5ff',
  //   height = '250px',
  //   padding = '20px',
  //   width = 'auto'
  //  } = {}) => {
  //   return `<div style="background-color:${backgroundColor};height:${height};padding:${padding};width:${width};">${description}</div>`
  //  }

//   export const createContentHtml = ({
//     description = '',
//     backgroundColor = '#ebf5ff',
//     height = '250px',
//     padding = '20px',
//     width = 'auto',
//     link = ''
// } = {}) => {
//     const content = link 
//         ? `<div>${description}<br/><br/><a className={'link'} href="${link}" style="color:#2563eb;text-decoration:none;font-weight:600;background-color:#ffffff;padding:10px;border-radius:4px;border:0.5px solid #2563eb">Go to  Page</a></div>`
//         : description;

//     return `<div style="background-color:${backgroundColor};height:${height};padding:${padding};width:${width};display:flex;flex-direction:column;justify-content:space-between;align-items:space-between;">${content}</div>`
// }


export const createContentHtml = ({
  description = '',
  backgroundColor = '#ebf5ff',
  height = '250px',
  padding = '20px',
  width = 'auto',
  link = ''
} = {}) => {
  const content = link
    ? `<div style="height:100%">${description}</div><a className={'link'} href="${link}" style="color:#2563eb;text-decoration:none;font-weight:600;background-color:#ffffff;padding:5px;padding-left:15px;border-radius:4px;border:0.5px solid #2563eb; width:30%;">Go to Page</a>`
    : description;

  return `<div style="background-color:${backgroundColor};height:${height};padding:${padding};width:${width};display:flex;flex-direction:column;justify-content:space-between;">${content}</div>`
}

