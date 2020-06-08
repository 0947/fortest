/*CMD
  command: /nisha
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

Bot.editMessage("🔹አምላኬ ሆይ ፍፁም ተወዳጅ ነህ ሀጥያትን የምትጠላ ነህ: በሀጥያቴ ስለበደልኩህ እጅግ አዝናለሁ። ማረኝ ዳግመኛ ወደ ሀጥያት አልመለስም በፀጋህ ከሀጥያት ምክንያት ሁሉ እርቃለሁ",msg)&Bot.editInlineKeyboard(b,msg)
