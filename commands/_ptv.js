/*CMD
  command: /ptv
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/573",caption:  "@catholicb"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/574",caption:  "@catholicb"})

var b = [[{ text: "ተመለስ", callback_data: "/vocal"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/575",caption:  "@catholicb",reply_markup: { inline_keyboard: b }
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
