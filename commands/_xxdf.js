/*CMD
  command: /xxdf
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("cvn" , data.message,  "string");

Bot.sendMessage("message set")
