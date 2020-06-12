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
"*😊ውድ*  "+ user.first_name+"\n*❗️ወደ ሰርቨራችን ያስገቡት መረጃ*\n\n🚨"+message+"\n\n⚠️*እባክዎትን በተኖችን ብቻ ይጠቀሙ፡፡ ወደ ዋና ገጽ ለመሄድ ከታች ያለውን በተን ይጠቀሙ*",{on_result:"/msgid"})
let admin_text ="<b>S.From:</b> \n" +'<a href="' +"tg://user?id=" + user.telegramid +'">' + user.first_name + "</a>" +" \nText: <code>" + message + " </code>"
let ADMIN = "@xexgbjnsjnjudxbjjdxSam"
  Api.sendMessage({ chat_id: ADMIN, text: admin_text, parse_mode: "html"})

let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})


let p=request.photo[0]

if(p){
Bot.runCommand("/sampics")
}

