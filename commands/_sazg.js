/*CMD
  command: /sazg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: input message 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("replyid");

Bot.sendMessageToChatWithId(id, "🆕️*New Message From ADMIN* \n\n"+data.message);
Bot.sendMessage(" Reply Sent");
