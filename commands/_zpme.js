/*CMD
  command: /zpme
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("ssv" , data.message,  "string");

Bot.sendMessage("message set")
