/*CMD
  command: /xlrod
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

Bot.editMessage("🔹ሁሉን የሚይዝ የጌታችን የኢየሱስ ክርስቶስ አባት እ/ር ስለ መንገደኞች እንማልዳለን። በባህርም ሆነ በወንዝም ሆነ በላይም ሆነ በማንኛውም መንገድ የሚሄዱትን ሁሉ ወደደህንነት ወደብ ያደርሳቸው ዘንድ ሁሉን የሚይዝ እ/ር አምላካችንን እንለምናለን",msg)&Bot.editInlineKeyboard(b,msg)
