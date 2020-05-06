/*CMD
  command: /replay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input id
  keyboard: 
  aliases: 
CMD*/

Bot.runCommand("/onr");
User.setProperty("replyid", data.message, "integer");
