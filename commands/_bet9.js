/*CMD
  command: /bet9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "ተመለስ", callback_data: "/thalk"}]]

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/5672",caption:  "የቤትህ ቅናት እንደ እሳት አቃጠለኝ",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
