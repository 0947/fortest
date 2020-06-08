/*CMD
  command: /aud
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
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/39",caption:  "ቅዱሳን እነማን ናቸው?\n\nኢየሱስ አማላጅ ነው ወይስ ምልጃ ተቀባይ\nበክቡር አባ ምስራቅ ጥዩ (ዶ/ር)"})


var b = [[{ text: "ተመለስ", callback_data: "/menu"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/40",caption:  "ማርያም ማን ናት? በክቡር አባ ምስራቅ ጥዩ (ዶ/ር)",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
