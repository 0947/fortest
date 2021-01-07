/*CMD
  command: /mst
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/4590",caption:  "✨ስለ ወጣቶች ሪሌሽንሽፕ የምስጢረ ተክሊል መግቢያ በወንድም ሴሞ ግልጥ ግልጧን በመናገር ያስተምረናል ለራስ አይደል ለሰው ትተርፋበታላችሁ\nለህየወት የሚጠቅም ውሳኔ ታተርፉበታላችሁ እመኑኝ💗💗💗"})

var b = [[{ text: "ተመለስ", callback_data: "/mych"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/4591",caption:  "✨ትኩረት አድርገን ልናየው የሚገባ ወጣቶች ይሔን መስማት ግድ ይለናል የምስጢረ ተክሊል አስተምሕሮ በ ወንድም ሴሞ ከባለፈው የቀጠለ እንዳያመልጣችሁ",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
