/*CMD
  command: /mainch
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
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"🔎ቋንቋ ይምረጡ / Select Language",
  show_alert: " top" })
  
Bot.runCommand("/mainz")
} else {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"⚠️ቻነሉን አልተቀላቀሉም በድጋሚ ይሞክሩ‼️",
  show_alert: "top"
})}

Bot.setProperty("status", user, "text")
