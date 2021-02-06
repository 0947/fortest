/*CMD
  command: /bak
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/4653",caption:  "✨ቅ.ባኪታ ክፍል1"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/4654",caption:  "✨ቅ.ባኪታ ክፍል2"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/4655",caption:  "✨ቅ.ባኪታ ክፍል3"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/4656",caption:  "✨ቅ.ባኪታ ክፍል4"})

var b = [[{ text: "ተመለስ", callback_data: "/mych"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/4815",caption:  "✨ቅ.ባኪታ ክፍል5",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
