export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
 export const PHOTOURL=" https://avatars.githubusercontent.com/u/161626195?v=4"
  


 export const API_OPTION=
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:"Bearer" + process.env.REACT_APP_TMDB_KEY,
           }
      };
 

      export const IMG_CDN="https://image.tmdb.org/t/p/w300";

      export const BG_CDN='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg';
   

      export const SUPPORT_LAUNGUAGE=[{identifier:"en",name:"English"},
        {identifier:"hindi",name:"Hindi"},
        {identifier:"spanish",name:"Spanish"}
      ]

         export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;