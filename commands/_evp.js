/*CMD
  command: /evp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/606",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/607",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/608",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/609",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/610",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/611",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/612",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/613",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/614",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/615",caption:  "catholicb"})

var b = [[{ text: "ተመለስ", callback_data: "/mych"}]]

Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/616",caption:  "@catholicb",reply_markup: { inline_keyboard: b }       
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
