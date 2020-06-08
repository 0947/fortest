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

Bot.sendMessageToChatWithId(id, "Reply From Sam~kip \n\n"+data.message);
Bot.sendMessage(" Reply Sent");
