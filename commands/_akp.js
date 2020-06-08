/*CMD
  command: /akp
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
[{title:"1",command:"/akp1"},{title:"2",command:"/akp2"}]]

Bot.editMessage("እባክዎትን ገጽ ይምረጡ",msg)&Bot.editInlineKeyboard(b,msg)
