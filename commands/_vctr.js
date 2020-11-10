/*CMD
  command: /vctr
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/2982",caption:  "🎤 Jacobs Vocal Acadamy \n    🎵  Pitch Exercise #2     \n      ¤ Type: Pitch Exercise \n      ¤ This Exercise helps you to practice your pitch\n      ¤ By following up the piano you can use any #Commen syllable in staccato \n\n#Example:- Do \n                    Do Re Do \n                  Do Re Mi Re Do \n           Do Re Mi Fa Mi Re Do \n     Do Re Mi Fa So Fa Mi Re Do \nDo Re Mi Fa So La So Fa Mi Re Do \nDo Re Mi Fa So La Ti Do Ti La So Fa Mi Re Do"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/2983",caption:  "🎤 Jacobs Vocal Acadamy \n🎵 Vocal Wormup     \n       ¤ Type: Vocal Wormup"})

var b = [[{ text: "ተመለስ", callback_data: "/mych"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxsam/2984",caption:  "🎤 Jacobs Vocal Acadamy \n🎵  Pitch Dynamics Exercise #2  \n       ¤ Type: Pitch Dynamics Exercise",reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
