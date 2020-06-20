/*CMD
  command: /catsim
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "Go Back", callback_data: "/abcat"}]]

 Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/21",caption:  "What is catholicism", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
