

import OpenAI from "openai";
 const REACT_APP_OPENAI_API_KEY = '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';
const openai = new OpenAI ({
       apiKey:REACT_APP_OPENAI_API_KEY ,
  dangerouslyAllowBrowser: true,

   
});
export default openai;