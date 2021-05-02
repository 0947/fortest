/*CMD
  command: /trix
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let msg=User.getProperty("msgid")

var b = [[{ text: "ተመለስ", callback_data: "/xelo"}]]

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/5834",caption:  "የጥሪ ጸሎት",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
