export const API_OPTIONS = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {identifier : "en", name : "English"},
  {identifier : "kann", name : "Kannada"}
];

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;



