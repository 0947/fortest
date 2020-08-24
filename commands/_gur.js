/*CMD
  command: /gur
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
  text:"✅Wait downloading from server.....",
  show_alert: " top" })
  
Bot.runCommand("/gusam")
} else {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"📛ይቅርታ ቻነሉን Join አድርገው ይሞክሩ🚫",
  show_alert: "top"
})}

Bot.setProperty("status", user, "text")
