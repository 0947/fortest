/*CMD
  command: /capo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgs=Bot.getProperty("jvl")

var b = [
    {title: "Back", command: "/abcat"}];

Bot.sendInlineKeyboard(b, msgs,{on_result:"/msgid"});
let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
