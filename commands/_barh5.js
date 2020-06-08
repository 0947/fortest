/*CMD
  command: /barh5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "◀️ተመለስ", callback_data: "/menu"},{text: "▶️ቀጣይ ገጽ", callback_data: "/barh6"}]]

 Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/446",caption:  "የባርቴክ የህይወት ታሪክ", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
