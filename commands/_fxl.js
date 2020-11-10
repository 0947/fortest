/*CMD
  command: /fxl
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "◀️ተመለስ / BACK", callback_data: "/faustin"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/3879",caption:  "✅የመለኮታዊ ምህረት አክሊል ጸሎት", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
