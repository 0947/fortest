/*CMD
  command: /cvids
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
[{title:"1",command:"/cvids1"},{title:"2",command:"/cvids2"}],
[{title:"<--",command:"/mych"}]
]

Bot.editMessage("ካቶሊካዊ ቪዲዮዎች ከተለያየ ድህረገጽ የተሰበሰቡ በክፍል ተዘጋጅተዋል ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
