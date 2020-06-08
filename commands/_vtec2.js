/*CMD
  command: /vtec2
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/507",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/508",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/509",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/511",caption:  "🗣የድምፅ ቴክኒኮች"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/512",caption:  "የድምፅ ቴክኒኮች"})

var b = [[{ text: "ተመለስ", callback_data: "/menu"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/514",caption:  "🗣የድምፅ ቴክኒኮች",reply_markup: { inline_keyboard: b }
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
