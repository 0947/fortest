/*CMD
  command: /xemol
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

Bot.editMessage("📌 ፀጋን የሞላሽ ማርያም ሆይ ሰላም ለአንቺ ይሁን\n✨እ/ር ከአንቺ ጋር ነው\n✨ከሴቶች ሁሉ የተባረክሽ ነሽ\n✨የሆድሽም ፍሬ እየሱስ የተባረከ ነው\n✨ቅድስተ ማርያም የአምላክ እናት\n✨ለኛ ለሀጥያተኞች አሁንም በሞታችን ጊዜ ለምኚልን አሜን።",msg)&Bot.editInlineKeyboard(b,msg)
