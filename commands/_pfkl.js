/*CMD
  command: /pfkl
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

Bot.editMessage("እስከጠቀመን ብቻ ማፍቀር አንችልም ፍቅር የሚገለጸው ከራስ ወዳድነት ሲልቅና ያለ ቁጥብነት ሲሰጥ ነው!",msg)&Bot.editInlineKeyboard(b,msg)
