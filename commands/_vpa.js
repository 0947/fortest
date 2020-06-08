/*CMD
  command: /vpa
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
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/587",caption:  "የሰው ልጅ የድምፅ ሬንጆች የራሳችንን ድምፅ ማወቅ ደግሞ ጥሩ እንድንዘምር በጣም ከፍተኛ ሚና አለው"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/589",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/590",caption:  "kind off range wz music not 🎶👆"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/592",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/593",caption:  "ድምፃችን የሚሰራው እንዴት ነው❓👆👆👆"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/595",caption:  "@catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/596",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/597",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/598",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/599",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/600",caption:  "catholicb"})
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/601",caption:  "catholicb"})

var b = [[{ text: "ተመለስ", callback_data: "/menu"}]]

Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxsam/602",caption:  "@catholicb",reply_markup: { inline_keyboard: b }       
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
