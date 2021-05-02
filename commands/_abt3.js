/*CMD
  command: /abt3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


let msg=User.getProperty("msgid")

var b = [[{ text: "ተመለስ", callback_data: "/thalk"}]]

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/5678",caption:  "“የአባቴን ቤት የንግድ ቤት አታድርጉት” በክቡር አባ ዳዊት ወርቁ (ዶ/ር)",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
