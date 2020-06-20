/*CMD
  command: /hepa
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
  text:"⛱Loading Now Please Wait.....",
  show_alert: " top" })
  
Bot.runCommand("/kusam")
} else {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"⚠️Join the channel first‼️",
  show_alert: "top"
})}

Bot.setProperty("status", user, "text")
