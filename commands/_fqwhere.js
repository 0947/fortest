/*CMD
  command: /fqwhere
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
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/2104",caption:  " ❓catholic web ስራው መቼ ጀመረ\n\n•CW ስራው የጀመረው ከ2 አመት በፊት ሲሆን አላማውም መረጃዎችን ለካቶሊኮች በቀላሉ ለማዳረስ ታስቦ ነው፡፡\n•ስራው የጀመረው በv6 (version 6) ቦት ነበር፡፡ እንደ እግዚአብሄር ፈቃድ ዛሬ የራሱ ሰርቨር ያለው secured bot ሆኗል፡፡\n•አሁን ቦቱን ወደ v7 (version 7) አሳድገነው በጣም ፈጣን አገልግሎት በሁለት አድራሻ ማለትም 🔗 @catholicsbot እና 🔗 @catholicwebot ላይ ሙሉ ሰርቪስ እየሰጠ ይገኛል፡፡\n•በየትኛውም ሁኔታ ሊረዳን ላሰበ በራችን ክፍት ነው፡፡ እዚሁ ቦት ውስጥ ወይም ለአድሚኖች ያናግር፡፡", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
