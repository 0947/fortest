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

let msg = User.getProperty("msgid");
var buttons = [
[ {title: "📢 ወደ ቻነሉ 📢", url: "http://t.me/catholicb" } ],
[ {title: "✅ ተቀላቅያለሁ", command: "/mych" } ]
]
Bot.sendInlineKeyboard(buttons, "*🤖ይህንን ቦት ለመጠቀም በቅድሚያ ከታች ያለውን ቻነል ይቀላቀሉ\n\n❗️ይህንን ቦት ለመጠቀም የ* @catholicb *አባል መሆን ያስፈልጋል፡፡\n\n✔️ከዚህ በፊት ተቀላቅለው ከሆነ ከታች ☑️ተቀላቅያለሁ የሚለውን ይጫኑ፡፡\n\n⚠️ቻነሉን ካልተቀላቀሉ ቦቱ አይሰራም፡፡*",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
