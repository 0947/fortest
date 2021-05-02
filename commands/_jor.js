/*CMD
  command: /jor
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
  
  
Bot.runCommand("/orsam")
} else {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"⚠️Join the channel first‼️",
  show_alert: "top"
})}

Bot.setProperty("status", user, "text")
