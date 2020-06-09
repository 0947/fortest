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
[{title:"ገጽ 1",command:"/cpdf1"},{title:"ገጽ 2",command:"/cpdf2"}],
[{title:"ተመለስ",command:"/menu M"}],
]

Bot.editMessage(user.first_name+" ከታች በገጽ የተቀመጡትን የ pdf መፅሀፍት ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
