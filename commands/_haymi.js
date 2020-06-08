/*CMD
  command: /haymi
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

Bot.editMessage("🔹አምላኬ ሆይ አንተ የገለጥከውን ቅድስት ቤተክርሰቲያን የምታምነውና የምታስተምረውን ሁሉ አምናለሁ።",msg)&Bot.editInlineKeyboard(b,msg)
