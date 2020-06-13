/*CMD
  command: /fqhow
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "ተመለስ", callback_data: "/faqsami"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/2104",caption:  "❓Catholic web እንዴት መጠቀም እንችላለን\n•ይህ ቦት ለህዝበ ክርስቲያኑ ቀለል ያለ አጠቃቀም ያለው ቦት ነው፡፡\n•ታድያ ቦቱ ለመጠቀም ምንም አይነት ክፍያ ወይም ቅድመ ሁኔታ የማያስፈልገው ሲሆን፡፡\n❗️ከእርስዎ የሚጠበቀው የቦቱን server ቻነል (@catholicb) መቀላቀል ብቻ 100% ቦቱን active ያረገዋል", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
