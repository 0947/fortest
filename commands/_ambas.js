/*CMD
  command: /ambas
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/463",caption:  "🗣አምባሰል"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/464",caption:  "🗣አምባሰል"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/465",caption:  "🗣አምባሰል"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/466",caption:  "🗣አምባሰል"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/467",caption:  "🗣አምባሰል"})

var b = [[{ text: "ተመለስ", callback_data: "/vocal"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/468",caption:  "🗣አምባሰል",reply_markup: { inline_keyboard: b }
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
