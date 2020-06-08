/*CMD
  command: /aked
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

Bot.editMessage("🔕🔕ቸል የማይባል እድል!🔕🔕\nእድሉ እያለን ክርስቶስን እንጎብኘው፣ እንንከባከበው፣ እንመግበው።\n👉🏻ቅ. ጎርጎርዮስ ዘናዚያንዘንስ",msg)&Bot.editInlineKeyboard(b,msg)
