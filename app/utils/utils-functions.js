export const capitalizeWords=(str) =>{
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }


export const range=(start, end)=> {
  const result = [];
  for (let i = start; i <= end; i++) {
      result.push(i);
  }
  return result;}



  