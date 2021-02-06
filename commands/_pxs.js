/*CMD
  command: /pxs
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

Bot.editMessage("ኢየሱስ ጸሎት መጸለይ እንዲያስተምረን መጠየቅ ይኖርብናል\n\n#ፓፓ ፍራንሲስ",msg)&Bot.editInlineKeyboard(b,msg)
