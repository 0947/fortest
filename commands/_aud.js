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

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/menu"}]]

 Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/40",caption:  "😇ማርያም ማን ናት በክቡር አባ ምስራቅ ጥዩ ", reply_markup: { inline_keyboard: b } })

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/39",caption:  "😇ቅዱሳን ማን ናቸው + ኢየሱስ አማላጅ ወይስ ምልጃ ተቀባይ\n በክቡር አባ ምስራቅ ጥዩ ", reply_markup: { inline_keyboard: b } })
