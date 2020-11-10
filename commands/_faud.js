/*CMD
  command: /faud
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/3878))",caption:  "Amharic Divine mercy / የመለኮታዊ ምሕረት መቁጠሪያ ጸሎት/ አዘጋጅ እና አስተባባሪ  ገነት ግርማ\nሙሉ ጸሎቱ በግሪጎርያን ቻንት ዜማ የቀረበ 😱❤"})

var b = [[{ text: "ተመለስ", callback_data: "/faustin"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/3837)",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
