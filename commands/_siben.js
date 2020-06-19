/*CMD
  command: /siben
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
[{title:"Holly rosary",command:"/holr"},{title:"Keys",command:"/keysi"}],
[{title:"Purgatory",command:"/purg"},{title:"Adoration",command:"/eado"}],
[{title:"GO BACK TO HOME",command:"/myin"}]
]

Bot.editMessage("️*You will find sermons on this button. Use the buttons below.*",msg)&Bot.editInlineKeyboard(b,msg)
