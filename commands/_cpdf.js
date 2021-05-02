/*CMD
  command: /cpdf
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
[{title:"1",command:"/cpdf1"},{title:"2",command:"/cpdf2"},
{title:"3",command:"/cpdf3"},
{title:"4",command:"/cpdf4"}],
[{title:"⬅️",command:"/mych"}],
]

Bot.editMessage(user.first_name+" ከታች በገጽ የተቀመጡትን የPDF መፅሀፍት ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
