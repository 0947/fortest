/*CMD
  command: /plfk
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

Bot.editMessage("የእግዚአብሔር ፍቅር ሁሉንም ነገር አዲስ ማድረግ የሚችል ብቸኛ ኃይል ነው\n\n#ፓፓፍራንቺስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
