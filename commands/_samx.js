/*CMD
  command: /samx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input text
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("replyid");

var b = [[{ text: "ወደ ዋና ገጽ ይመለሱ", callback_data: "/menu"}]]

 Api.sendMessage({
  chat_id: id, 
text: "👇🏽Reply From @barklgn👇🏽\n\n"+data.message,
  reply_markup: { inline_keyboard: b } })
Bot.sendMessage(" Reply Sent");
