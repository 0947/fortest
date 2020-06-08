/*CMD
  command: /pmt
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

Bot.editMessage("“የታመመው፣ የተራበው እና የታሰረው ወንድማችን የት አለ? ብለን መጠየቅ ይገባል!\n\nር.ሊ.ጳ ፍራንቸስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
