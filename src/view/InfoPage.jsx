/* eslint-disable no-unused-vars */
import React from "react";
import BackButton from "../component/BackButton";

import FooterPage from "./FooterPage";

const InfoPage = () => {
  return (
    <>
      <div className="mt-3 md:mx-16 mx-3">
        {/* <BackButton /> */}
        <div className="dark:bg-gray-800 bg-gray-100 py-3 px-5 rounded-md mb-3 scroll-auto">
          <div className="   mb-3">
            <h1><i className="fa-solid fa-circle-info text-blue-500 me-2"></i>Info</h1>
          </div>

          <p className="subpixel-antialiased text-gray-600 dark:text-white mb-3">
            မင်္ဂလာပါ။ ကျွန်ုပ်တို့၏ AI Education Hub မှကြိုဆိုပါသည်။
            ကျွန်တော်တို့၏ web application ဟာ OpenAi - ChatGpt မှ API ကို
            အသုံးပြုထားပြီး ကျောင်းဆရာ၊ဆရာများ၊Guide များအတွက် မိမိသင်ကြားနေသော
            ဘာသာရပ်များကို အလွယ်တကူ Generate ပြုလုပ်နိုင်အောင် Prompts
            များကိုထည့်သွင်း ရေးဆွဲပေးထားပါတယ်။ 
          </p>
          <p className="subpixel-antialiased text-gray-600 dark:text-white">
            ကျွန်တော်တို့ web application ထဲမှ AI Application
            Generate အားလုံးကို အကန့်သတ်မရှိအသုံးပြုလို့ရမှာဖြစ်သလို့ မိမိ
            Generate ပြုလုပ်ထားသော Text Results တွေကိုလဲ အကန့်သတ်မရှိ pdf file
            download လုပ်လို့ရမှာဖြစ်ပါတယ်။
          </p>
        </div>
      </div>
      
      {/* <p className="subpixel-antialiased text-gray-600 dark:text-white mb-3">
            မင်္ဂလာပါ။ ကျွန်ုပ်တို့၏ AI Education Hub မှကြိုဆိုပါသည်။
            ကျွန်တော်တို့၏ web application ဟာ OpenAi - ChatGpt မှ API ကို
            အသုံးပြုထားပြီး ကျောင်းဆရာ၊ဆရာများ၊Guide များအတွက် မိမိသင်ကြားနေသော
            ဘာသာရပ်များကို အလွယ်တကူ Generate ပြုလုပ်နိုင်အောင် Prompts
            များကိုထည့်သွင်း ရေးဆွဲပေးထားပါတယ်။ လူကြီးမင်းတို့အနေဖြင့်
            ကျွန်တော်တို့၏၀န်ဆောင်မှုများကို စမ်းသပ်အသုံးပြုလိုပါက ကျွန်တော်တို့
            web application မှာအကောင့်တစ်ခုကို Register
            ပြုလုပ်ပေးဖို့လိုအပ်ပါတယ်။ Register ပြုလုပ်ပြီးပါက မိမိအကောင့်၏
            email | password တို့ဖြင့် Login ၀င်ရောက်ပြီး ကျွန်တော်တို့ web
            application ထဲမှအခမဲ့ပေးထားသော AI Application Generate အချို့ကို
            တမျိုးလျှင် ၅ကြိမ်အထိ စမ်းသပ်အသုံးပြုလို့ရမှာဖြစ်ပါတယ်။
          </p>
          <p className="subpixel-antialiased text-gray-600 dark:text-white">
            တကယ်လို့ ကျွန်တော်တို့၏ web application ကိုကြိုက်နှစ်သက်တယ်ဆိုရင်
            Fully Asset အသုံးပြုလို့ရမည့် Premium User Account အဖြစ် Upgrade
            ပြုလုပ်ပြီး ကျွန်တော်တို့ web application ထဲမှ AI Application
            Generate အားလုံးကို အကန့်သတ်မရှိအသုံးပြုလို့ရမှာဖြစ်သလို့ မိမိ
            Generate ပြုလုပ်ထားသော Text Results တွေကိုလဲ အကန့်သတ်မရှိ pdf file
            download လုပ်လို့ရမှာဖြစ်ပါတယ်။
          </p> */}
    </>
  );
};

export default InfoPage;
