/*CMD
  command: /gexpdf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let msg=User.getProperty("msgid")

var b = [[{ text: "ወደ ዋና ገጽ", callback_data: "/menu"}]]

 Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/626",caption:  "ልዩ የሐዋርያዊ ተልእኮ ዘመን\n\n💦የተጠመቁና የተላኩ💦\n\nየክርስቶስ ቤተክርስቲያን ተልኮ በአለም\n✅2012 ዓ.ም ግፃዌ✅\n\n💧Baptised and sent💧\n\nthe church of chirst on mission in the world\n〰extraordinary mission month - October 2019", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
