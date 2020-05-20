/*CMD
  command: /sazg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = User.getProperty("replyid");

Bot.sendMessageToChatWithId(id, "Reply From @barklgn \n\n"+data.message);
Bot.sendMessage(" Reply Sent");
