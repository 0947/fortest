/*CMD
  command: /fqw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{title:"🇪🇹Amharic",command:"/faqsami"},{title:"🇱🇷English",command:"/fq"}],
[{title:"⬅️",command:"/mytg"}]]

Bot.editMessage("Hello  "+user.first_name+"  Select Your Language Below",msg)&Bot.editInlineKeyboard(b,msg)
