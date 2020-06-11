/*CMD
  command: /xekidus
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
[{title:"ቅዱስ ጳውሎስ",command:"/xepa"},{title:"ቅ.ፍራንቺስኮስ",command:"/xefr"}],
[{title:"ቅ.ጴጥሮስ",command:"/xepet"},{title:"እ.ማርያ ሮዛ",command:"/xemar"}],[{title:"ቅ.ጃና",command:"/xeja"},{title:"ቅ.በርናርዶስ",command:"/xeber"}],
[{title:"ቅ.ጆሴማርያ",command:"/xejos"}],
[{title:"◀️ተመለስ",command:"/xelo"},{title:"🔼ዋና ገጽ",command:"/mych"}]]

Bot.editMessage("በዚህ button የቅዱሳን ጸሎት ያገኛሉ ከታች ያሉትን button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
