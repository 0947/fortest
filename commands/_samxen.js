/*CMD
  command: /samxen
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: input text
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("replyid");

var b = [[{ text: "Replay To Admin", callback_data: "/enadm"}],
[{text:"🕹Back to home",callback_data:"/mytg"}]]

 Api.sendMessage({
  chat_id: id, 
text: "Reply From @barklgn\n\n"+data.message,
  reply_markup: { inline_keyboard: b } })
Bot.sendMessage(" Reply Sent");
