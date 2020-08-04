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

var b = [[{ text: "❇️Replay To Admin", callback_data: "/admin"}],
[{text:"📞Direct Contact",url:"t.me/barklgn"}],
[{text:"✅Back to home",callback_data:"/mych"}]]

 Api.sendMessage({
  chat_id: id, 
text: "📨Reply From *Admin*\n\n*"+data.message+"*",parse_mode: "markdown",
  reply_markup: { inline_keyboard: b } })
Bot.sendMessage(" Reply Sent");
