/*CMD
  command: /hayal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/menu"}]]

 Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/21",caption:  "What is catholicism\nስለ ካቶሊክ በቪዲዮ", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
