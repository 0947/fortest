/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [
  { title: "✅ዋና ገጽ", command: "/start"}], 
"*😊ውድ*  "+ user.first_name+"\n*❗️ወደ ሰርቨራችን ያስገቡት መረጃ*\n\n🚨"+message+"\n\n⚠️*እባክዎትን በተኖችን ብቻ ይጠቀሙ፡፡ ወደ ዋና ገጽ ለመሄድ ከታች ያለውን በተን ይጠቀሙ*\n\n"+user.first_name+"  🚫Unknown Command inserted please use inline buttons only",{on_result:"/msgid"})

let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})


let p = request.photo[0]
let ms = request.text
let au = request.audio
let pd = request.document
let vi = request.video
let vo = request.voice

if(ms){
Bot.runCommand("/dsa")
}
if(au){
Bot.runCommand("/dsa")
}
if(vi){
Bot.runCommand("/dsa")
}
if(p){
Bot.runCommand("/dsa")
}
if(pd){
Bot.runCommand("/dsa")
}
if(vo){
Bot.runCommand("/dsa")
}
