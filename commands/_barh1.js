/*CMD
  command: /barh1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "◀️ተመለስ", callback_data: "/mych"},{text: "▶️ቀጣይ ገጽ", callback_data: "/barh2"}]]

 Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/442",caption:  "የባርቴክ የህይወት ታሪክ", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
