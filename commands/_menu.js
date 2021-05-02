/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /myme, menu
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

if(!params){
Bot.run({command: "/menu aa", run_after:0.2
})

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

}else{
let msg = User.getProperty("msgid");
var buttons = [
[ {title: "❗️ዋና ገጽ", command: "/mych" },{title: "❕Home Page", command: "/mych" } ]
]
Bot.sendInlineKeyboard(buttons, "*🗣ሰላም ውድ*  "+ user.first_name +"  *ወደ ዋና ገጽ ለመሄድ ከታች ያለውን በተን ይጫኑ*",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
