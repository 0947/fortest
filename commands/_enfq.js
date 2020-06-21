/*CMD
  command: /enfq
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"This project used to provide fast information to catholics. Made for easy use.",
  show_alert: true
})
