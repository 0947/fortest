/*CMD
  command: /onr
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input text
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("replyid");

Bot.sendMessageToChatWithId(id, "Reply From @barklgn \n\n"+data.message);
Bot.sendMessage(" Reply Sent");
