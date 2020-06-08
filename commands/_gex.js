/*CMD
  command: /gex
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let msg=User.getProperty("msgid")

var b = [[{ text: "መፅሀፉን ለማግኘት", callback_data: "/gexpdf"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/623",caption:  "ልዩ የሐዋርያዊ ተልእኮ ዘመን\n\n💦የተጠመቁና የተላኩ💦\n\nየክርስቶስ ቤተክርስቲያን ተልኮ በአለም\n✅2012 ዓ.ም ግፃዌ✅\n\n💧Baptised and sent💧\n\nthe church of chirst on mission in the world\n〰extraordinary mission month - October 2019", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
