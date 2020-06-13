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

var b = [[{ text: "Replay To Admin", callback_data: "/admin"}],
[{text:"🕹Back to home",callback_data:"/mych"}]]

 Api.sendMessage({
  chat_id: id, 
text: "Reply From @barklgn\n\n"+data.message,
  reply_markup: { inline_keyboard: b } })
Bot.sendMessage(" Reply Sent");
