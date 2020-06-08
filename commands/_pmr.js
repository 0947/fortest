/*CMD
  command: /pmr
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
[{title:"ተመለስ",command:"/popaba"}]
]

Bot.editMessage("ማርያምን በተመስጦ መመልከት ማለት፣ የክርስቶስ\nእውነትኛ ተከታይ ሞዴል ማግኘት ማለት ነው!\n\n#ፓፓፍራንቼስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
