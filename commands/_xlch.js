/*CMD
  command: /xlch
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

Bot.editMessage("🔹ሁሉን የሚይዝ የጌታችን የመድሀኒታችን የኢየሱስ ክርስቶስ አባት እ/ር እንለምናለን።\nሰውን አፍቃሪ ጌታ ሆይ ቸርነትህን እንሻለን እንለምናለን -- ጌታ ሆይ ከአለም ዳር እስከ ዳር ያለችውን የሀዋርያት ጉባኤ የሆነችው የአንዲት ቤ/ክ ሰላም አስብ።",msg)&Bot.editInlineKeyboard(b,msg)
