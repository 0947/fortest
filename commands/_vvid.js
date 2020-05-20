/*CMD
  command: /vvid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/561",caption:  "@catholicb"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/562",caption:  "@catholicb"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/563",caption:  "@catholicb"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/564",caption:  "@catholicb"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/565",caption:  "@catholicb"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/566",caption:  "@catholicb"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/567",caption:  "catholicb"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/568",caption:  "catholicb"})

var b = [[{ text: "ተመለስ", callback_data: "/vocal"}]]

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/569",caption:  "@catholicb",reply_markup: { inline_keyboard: b }
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
