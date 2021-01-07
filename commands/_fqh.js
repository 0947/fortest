/*CMD
  command: /fqh
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

Bot.editMessage("❓How to use catholic web\n\n• This is a bot and easy to use\n• There is no charge or any condition to use.\nYou are only expected to join the @catholicb server to make the site 100% active",msg)&Bot.editInlineKeyboard(b,msg)
