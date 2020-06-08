/*CMD
  command: /pvoc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "ተመለስ", callback_data: "/menu"}]]

 Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/572",caption:  "@catholicb", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
let msg=User.getProperty("msgid")

var b = [[{ text: "ተመለስ", callback_data: "/menu"}]]

 Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/572",caption:  "@catholicb", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
