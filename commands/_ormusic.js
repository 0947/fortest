/*CMD
  command: /ormusic
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2309"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2310"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2311"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2312"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2313"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2314"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2315"})

var b = [[{ text: "back", callback_data: "/myor"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2316)",reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
