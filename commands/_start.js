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
[ {title: "📢 ቻነል ለመቀላቀል / JOIN ", url: "http://t.me/catholicb" } ],
[ {title: "✅ ተቀላቅያለሁ / JOINED", command: "/mytg" } ]
]
Bot.sendInlineKeyboard(buttons, "*🚨እንኳን ወደ Catholic Web በደህና መጡ፡፡ ቦቱን ለመጠቀም ቻነላችንን ይቀላቀሉ\n\n✅ቻነላችን @catholicb በመቀላቀል ቦቱን ማስጀመር ይችላሉ፡፡\n\n📡ቻነሉን ከዚህ በፊት ተቀላቅለው ከነበረ በቀላሉ ከታች ተቀላቅያለሁ የሚለውን በመጫን ቦቱን መጠቀም የሚችሉ መሆኑን እንገልፃለን፡፡\n\n🚫ቻነላችንን ላልተቀላቀሉ ወይንም Join ላላደረጉ አባላት ቦታችን ምንም አይነት አገልግሎት አይሰጥም\n\n🗣Hello dear*  "+ user.first_name +"  *Activate the bot by joining our channel*",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
