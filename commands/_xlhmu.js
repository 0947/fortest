/*CMD
  command: /xlhmu
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

Bot.editMessage("🔹ሁሉን የሚይዝ የጌታችንና የመድሀኒታችን የኢየሱስ ክርስቶስ አባት  እ/ር ስለ በሽተኞች እንማልዳለን -- ደዌውን ሁሉ ህመሙንም ሁሉ እንዲያርቅላቸው። የደዌውን መንፈስ አርቆ ህይወትን እንዲሰጣቸው ሁሉን ለማዳን ስልጣን ያለውን እ/ር አምላካችንን እንለምናለን",msg)&Bot.editInlineKeyboard(b,msg)
