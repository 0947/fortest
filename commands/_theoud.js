/*CMD
  command: /theoud
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
[{title:"መንፈሳዊ አቋም",command:"/takm"},{title:"ማስተርቤሽን",command:"/tmas"}],
[{title:"✅ተመለስ",command:"/theolo"}]]

Bot.editMessage("በዚህ button የtheology ትምህርት በድምጽ ያገኛሉ፡፡ ከታች ያሉ በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
