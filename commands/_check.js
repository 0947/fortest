/*CMD
  command: /check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status

if (user == "member" || user == "creator") {
  Bot.sendMessage("ቻነሉን ተቀላቅለዋል አሁን ቦቱን መጠቀም ይችላሉ😊")
  Bot.runCommand("/menu")
} else {
  Bot.sendMessage("!! 😔ቻነሉን አልተቀላቀሉም በድጋሚ ይሞክሩ !!")
  Bot.runCommand("/start")
}

Bot.setProperty("status", user, "text")
