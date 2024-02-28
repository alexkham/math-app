// Updated capitalizeWords function to handle undefined or non-string inputs
export const capitalizeWords = (str) => {
  if (typeof str !== 'string') return ''; // Return an empty string or any other fallback value
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


export const range=(start, end)=> {
  const result = [];
  for (let i = start; i <= end; i++) {
      result.push(i);
  }
  return result;}



  