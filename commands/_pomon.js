/*CMD
  command: /pomon
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
[{title:"ተመለስ",command:"/popfran"}]
]

Bot.editMessage("🔥በዚህ ወር በኮረና ለተጠቁ ሀገራትና በዚህ በሽታ ተይዘው ለሚገኙት ሁሉ እንፀልይ፡፡ እግዚአብሄር አምላክ ለአለማችን ምህረትን ያውርድ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
