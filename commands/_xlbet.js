/*CMD
  command: /xlbet
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

Bot.editMessage("🔹አምላክ ሆይ ይህንን ቤት እንድትጎበኝ የጠላትንም ወጥመድ ሁሉ ወዲያ እንድታርቅ እንለምንሀለን -- በሰላም እንዲጠብቁን ቅዱሳን መላእክትህ ይኑሩበት -- ቡራኬህም ሁል ጊዜ ከኛ ጋር ይሁን እያልን በጌታችን በኢየሱስ ክርስቶስ እንለምንሀለን። አሜን",msg)&Bot.editInlineKeyboard(b,msg)
