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

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

if(!params){
Bot.run({command: "/start aa", run_after:0.5
})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

}else{
let msg = User.getProperty("msgid");
var buttons = [
[ {title: "📣 ወደ ቻነል 📣", url: "http://t.me/catholicb" } ],
[ {title: "✅ ተቀላቅያለሁ", command: "/mytg" } ]
]
Bot.sendInlineKeyboard(buttons, "*🤖ይህንን ቦት ለመጠቀም በቅድሚያ ከታች ያለውን ቻነል ይቀላቀሉ\n\n❗️ይህንን ቦት ለመጠቀም የ* @catholicb *አባል መሆን ያስፈልጋል፡፡\n\n✔️ከዚህ በፊት ተቀላቅለው ከሆነ ከታች ☑️ተቀላቅያለሁ የሚለውን ይጫኑ፡፡\n\n⚠️ቻነሉን ካልተቀላቀሉ ቦቱ አይሰራም፡፡\n\n🤖Hello dear*  "+ user.first_name +"\n*to use this service Join the channel below*",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
