export const getImageUrl = (path) => {
  // Use `window.location.origin` to get the base URL of the current location
  const baseUrl = window.location.origin;
  
  // Construct the full URL for the given path using the base URL and the `/assets/` prefix
  return `${baseUrl}/assets/${path}`;
};




// export const getImageUrl =(path) =>{
//   console.log('import.meta.url:', import.meta.url);

//  return new URL(`/assets/${path}`,import.meta.url).href;
// }

// export const getImageUrl = (path) => {

//   return `/assets/${path}`;
// };


