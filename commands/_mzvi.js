/*CMD
  command: /mzvi
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
[{title:"1",command:"/mzvi1"},{title:"2",command:"/mzvi2"},{title:"3",command:"/mzvi3"}],[{title:"4",command:"/mzvi4"},{title:"5",command:"/mzvi5"}],
[{title:"✅ተመለስ",command:"/mych"}]]

Bot.editMessage(user.first_name+" በዚህ button መዝሙሮች በvideo ያገኛሉ ከታች ያሉትን በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
