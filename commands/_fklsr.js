/*CMD
  command: /fklsr
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
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("🔹አምላኬ ሆይ አለመጠን ደግ አለመጠን ተወዳጅ ነህና እወድሀለሁ ስለአንተ ፍቅር ሰውን ሁሉ እወዳለሁ",msg)&Bot.editInlineKeyboard(b,msg)
