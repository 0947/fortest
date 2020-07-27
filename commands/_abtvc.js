/*CMD
  command: /abtvc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgs=Bot.getProperty("stms")

var b = [
    {title: "ተመለስ", command: "/vocal"}];

Bot.sendInlineKeyboard(b, msgs,{on_result:"/msgid"});
let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
