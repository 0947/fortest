/*CMD
  command: /hdy
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
  
Bot.runCommand("/hysam")
} else {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"📛ይቅርታ ቻነሉን Join አድርገው ይሞክሩ🚫",
  show_alert: "top"
})}

Bot.setProperty("status", user, "text")
