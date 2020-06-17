/*CMD
  command: /desdo
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2240"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2241"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2242"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2243"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2244"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2245"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2246"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2247"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2248"})

var b = [[{ text: "ተመለስ", callback_data: "/mywl"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/2249)",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
