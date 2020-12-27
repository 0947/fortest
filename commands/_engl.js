/*CMD
  command: /engl
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
[{title:"📙CATHOLICISM ANSWER",command:"/enp"}],
[{title:"🎬WHAT IS CATHOLICISM",command:"/dopingp"}],
[{title:"⬅️",command:"/myin"}]
]

Bot.editMessage("Welcome. Use the buttons below to access informations",msg)&Bot.editInlineKeyboard(b,msg)
