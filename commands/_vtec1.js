/*CMD
  command: /vtec1
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/500))",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/501",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/502",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/503",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/504",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/505",caption:  "የድምፅ ቴክኒኮች"})

var b = [[{ text: "ተመለስ", callback_data: "/menu"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/506",caption:  "🗣የድምፅ ቴክኒኮች",reply_markup: { inline_keyboard: b }
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
