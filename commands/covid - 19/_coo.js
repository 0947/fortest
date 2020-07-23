/*CMD
  command: /coo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status

if (user == "member" || user == "creator") {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"🌡Tracking Covid-19 Info From The Server",
  show_alert: " top" })
  
Bot.runCommand("/mycov")
} else {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"⚠️Join the channel first‼️",
  show_alert: "top"
})}

Bot.setProperty("status", user, "text")
