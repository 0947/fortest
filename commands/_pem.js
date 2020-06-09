/*CMD
  command: /pem
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

Bot.editMessage("የክርስቲያን መሣሪያ እምነት እና ፍቅር ብቻ ናቸው\n#ፓፓ ፍራንሲስ",msg)&Bot.editInlineKeyboard(b,msg)
