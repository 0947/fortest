/*CMD
  command: /xlhol
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

Bot.editMessage("🔹መንፈስ ቅዱስ ሆይ ና -- የምዕመናኖችህን ልብ ሙላ -- የፍቅርህን እሳት በውስጣቸው አንድድ -- የእውነተኛነት ምንጭ የሆንክ መንፈስ ቅዱስ ሆይ በልባችን ውስጥ ግባ -- ህዝቦችህ ትህትና በተመላበት ሀይማኖት ደስ እንዲያሰኙህ ብርሀንህን አድላቸው።",msg)&Bot.editInlineKeyboard(b,msg)
