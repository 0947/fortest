/*CMD
  command: /aksl
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
[{title:"ተመለስ",command:"/akw"}]
]

Bot.editMessage("👑👑ሰላምን የምትሻ ከሆነ👑👑\nሰላምን የምትሻ ከሆነ ሌሎች ሰዎችን ሳይሆን ራስህን ለውጥ፤ እግርህን ከሚጎዱ ነገሮች ለመከላከል ምድርን በሙሉ በቆዳ ከመሸፈን ለራስህ ብቻ ጫማ ማጥለቁ ይቀላል።\n👉አንቶኒ ዴ ሜሎ (አባ)",msg)&Bot.editInlineKeyboard(b,msg)
