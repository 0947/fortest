/*CMD
  command: /pintantion
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: input msg
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("pintantion" , data.message,  "string");

Bot.sendMessage("message set")
