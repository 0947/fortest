/*CMD
  command: /fqimg
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
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/2104",caption:  "❓ቦቱ በጠቅላላው ምን ይመስላል\n\n•ቦቱ በአጠቃላይ አስፈላጊ የሚባሉ መረጃዎችን የያዘ ሲሆን፡፡\n•ትምህርቶቹ በደንብ ተጠንተው እንዲሁም ካቶሊካዊ መረጃዎችን በአንድ አቅፎ የያዘ የመረጃ ምንጭ ነው፡፡\n•ቦቱ 24 ሰአት እንዲሰራ የተዘጋጀ ነው በትኛውም ሰአት መጠቀም ይችላሉ፡፡\n•ሁሌም ቦቱን track ስለምናረግ ምንም አይነት ስህተት እንዳይኖር እየሰራን ነው፡፡", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
