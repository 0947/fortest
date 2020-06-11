/*CMD
  command: /xlhow
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

Bot.editMessage("🔹ሁሉን የምትችል ዘለአለማዊ አምላክ ቅዱስ አባት ጌታችን ሆይ ፀሎታችንን ስማ -- እዚህ ቤት የሚገኙትን ሰዎች እንዲጠብቅ እንዲያበረታ እንዲደግፍ እንዲጎበኝ እንዲከላከልላቸው ከሠማይ መልአክህን ላክላቸው",msg)&Bot.editInlineKeyboard(b,msg)
