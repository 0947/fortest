/*CMD
  command: /paby
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

Bot.editMessage("ለዓለማችን የፍቅር አብዮት ያስፈልጋታል! ያ አብዮት በአንተ/ በአንቺ እና በቤተሰብህ/ሽ ይጀምር!\n#ፓፓፍራንቼስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
