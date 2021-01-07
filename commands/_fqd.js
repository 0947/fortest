/*CMD
  command: /fqd
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
[{title:"Go Back",command:"/fq"}]]

Bot.editMessage("😊Thank you so much for supporting us.\n\n• Contact us at @barklgn if you would like to sponsor our project.\n• You can help us financially in any way or situation.\n• THANK YOU CATHOLIC WEB",msg)&Bot.editInlineKeyboard(b,msg)
