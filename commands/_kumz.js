/*CMD
  command: /kumz
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
[{title:"Page 1",command:"/kumz1"},{title:"Page 2",command:"/kumz2"}],
[{title:"⬅️",command:"/myku"}]]

Bot.editMessage(user.first_name+" እባክዎትን ገጽ ይምረጡ",msg)&Bot.editInlineKeyboard(b,msg)
