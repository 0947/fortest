/*CMD
  command: /vtec
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
[{title:"Page 1",command:"/vtec1"},{title:"Page 2",command:"/vtec2"}],
[{title:"✔ለመመለስ",command:"/mych"}]]

Bot.editMessage("ይህ የድምፅ ቴክኒኮች button ነው ከታች ገጽ ይምረጡ",msg)&Bot.editInlineKeyboard(b,msg)
