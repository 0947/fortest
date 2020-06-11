/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [
  { title: "ይህንን ይጫኑ", command: "/mych"}], 
"ውድ  "+ user.first_name+" ወደ ዋና ገጽ ለመሄድ ከታች ያለውን ይጫኑት",{on_result:"/msgid"})
let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
