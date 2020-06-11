/*CMD
  command: /xelo
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
[{title:"👂ስለ ፀሎት",command:"/abox"}],
[{title:"😇የቅዱሳን ጸሎት",command:"/bb2"},{title:"⚡️የዘወትር ፀሎት",command:"/xedayil"}],
[{title:"◀️ለመመለስ▶️",command:"/mych"}]]

Bot.editMessage(user.first_name+" ይህ የፀሎት ገፅ ነው ከታች ያሉትን button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
