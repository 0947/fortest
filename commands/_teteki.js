/*CMD
  command: /teteki
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/mych"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/4",caption:  "✍🏽እኛ ካቶሊኮች በሮም ያለዉን ርእሰ ሊቃነ ጳጳሳትን እንደ ጴጥሮስ ተተኪና የቤተክርስቲያናችን (የካቶሊካዊ ቤተሰባችን) ራስ አድርገን እንቀበላለን\n\nቅዱስ ጴጥሮስ የመጀመሪያዉ የሮም ጳጳስ ነዉ\nእርሱ ክርስቶስ ቤተክርስቲያኑን የመሠረተበት ዓለት ነዉ (ማቴ. 16፤18)፡፡ቅዱስ ጴጥሮስ የሐዋርያት ሁሉ እንደራሴ እንደመሆኑ የመላይቱ ቤተክርስቲያንም ራስ/የበላይ ነዉ። ኃላፊነቱም ክርስቶስ ሦስት ጊዜ ደጋግሞ እንዳስጠነቀቀዉ የክርስቶስን መንጋ መመገብ ነዉ (ዮሐ.21፡15-17)፡፡ቅዱስ ጴጥሮስ ስለ ክርስቶስ ሲል በንጉሥ ኔሮን ዘመነ መንግስት በሮም ከተማ በሰማዕትነት ሞቷል (በ64 ወይም 67 ዓ.ም)፡፡ የሞተዉም እንደክርስቶስ በመስቀል ላይ ተስቅሎ ሲሆን የተሰቀለዉ ግን ከክርስቶስ ስቅላት በተቃራኒዉ ጭንቅላቱን በማዘቅዘቅ ነበር ይህም የሆነዉ እንደጌታዬ ቀጥ ብዬ ለመሰቀል የተገባሁ አይደለሁም በማለቱ ነዉ። በሮም ያለዉ ታላቁ “ባዚሊካም” (ቤተክርስቲያን) በዚሁ የመጀመሪያዉ የሮም ጳጳስ በነበረዉ በቅዱስ ጴጥሮስ መቃብር ላይ የታነጸ ቤተክርስቲያን ነዉ፡፡"
, reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
