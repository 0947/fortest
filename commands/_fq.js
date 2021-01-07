/*CMD
  command: /fq
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
[{title:"How To",command:"/fqh"},{title:"General",command:"/fqg"}],
[{title:"🎉Donate",command:"/fqd"}],
[{title:"History",command:"/fqt"},{title:"Sponsor",url:"t.me/catholicb"}],
[{title:"⬅️",command:"/mytg"}]]

Bot.editMessage("Hello  "+user.first_name+"  Welcome to Catholic web.\n📌This is FAQ page. Click the buttons below.‌‌ Thank you for your interest.",msg)&Bot.editInlineKeyboard(b,msg)
