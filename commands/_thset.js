/*CMD
  command: /thset
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
[{title:"ተመለስ",command:"/thtxt"}]
]

Bot.editMessage("🦋🦋🦋ቤ/ክ ስለ ፆታዊ ባህሪ የምታስተምረው ትምህርት     🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋\n❌ ሴተኛ አዳሪነት (prostitution) ❌\n\nይህ ገንዘብ ለማግኘት ሲባል ጾታዊ ግንኙነት ማድረግ : ለገንዘብ ሲሉ ራስን እንደ ሸቀጥ ማቅረብ ማለት ነው። ይህ ተግባር ግለሰቡን እንደ ጊዜያዊ ስሜት ማርኪያ መሣርያ የሚያቀርብ ስለሆነ ሰብዓዊ ክብሩን ክፋኛ ይጎዳል። ሴተኛ አዳሪነት መወገድ ያለበት ማህበራዊ እሾህ ነው። (ካ.ቤ.ት.ክ. 2355)\n\n❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️",msg)&Bot.editInlineKeyboard(b,msg)
