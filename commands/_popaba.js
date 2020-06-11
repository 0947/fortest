/*CMD
  command: /popaba
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"መውደድ",command:"/pwd"},{title:"ለጋሽ",command:"/plg"}],
[{title:"ፍቅር",command:"/plfk"},{title:"መጠየቅ",command:"/pmt"}],
[{title:"እምነት",command:"/pem"},{title:"ደስታ",command:"/pds"}],
[{title:"ጸሎት",command:"/pxs"},{title:"አብዮት",command:"/paby"}],
[{title:"ማርያም",command:"/pmr"},{title:"ቅድስና",command:"/pkdi"}],
[{title:"ልብ",command:"/pklb"},{title:"ፍቅር ሲገለጥ",command:"/pfkl"}],
[{title:"ፍቅር በ%",command:"/fkpr"},{title:"ድምፅ",command:"/fdx"}],
[{title:"ፈገግታ",command:"/ffg"}],
[{title:"✅ተመለስ",command:"/popfran"},{title:"⬆️ዋና ገጽ",command:"/mych"}]]

Bot.editMessage("በዚህ button የፓፓ ፍራንሲስ አባባሎች ያገኛሉ፡፡ ርዕሶችን ቀመምረጥ ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
