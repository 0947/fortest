/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
[ {title: "📢 ወደ ቻነሉ 📢", url: "http://t.me/catholicb" } ],
[ {title: "✅ ተቀላቅያለሁ", command: "/oncheckmem1" } ]
]
Bot.sendInlineKeyboard(buttons, "🤖*ይህንን ቦት ለመጠቀም በቅድሚያ ከታች ያለውን ቻነል ይቀላቀሉ*");
