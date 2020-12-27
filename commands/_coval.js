/*CMD
  command: /coval
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
[{title:"Go Back",command:"/mytg"}]]

Bot.editMessage("*⚠️covid tracking package expired*",msg)&Bot.editInlineKeyboard(b,msg)
