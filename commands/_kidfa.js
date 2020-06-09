/*CMD
  command: /kidfa
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

Bot.editMessage("🔹እየሱስ ማርያም ዮሴፍ ልቤን ነፍሴን ህይወቴን እሠጣችኋለሁ። እየሱስ ማርያም ዮሴፍ በሞት ጊዜ እርዱኝ። እየሱስ ማርያም ዮሴፍ በእጃቹ በሰላም ልሙት ----- አሜን",msg)&Bot.editInlineKeyboard(b,msg)
