/*CMD
  command: /said
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: input id
  keyboard: 
  aliases: 
CMD*/

Bot.runCommand("/sazg");
User.setProperty("replyid", data.message, "integer");
