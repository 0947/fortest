/*CMD
  command: /q10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "አደገኛ", command: "/q11" }],[{ title: "የተለመነ", command: "/q11 an" }],[{title:"የተፈራ",command:"/q11 v"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("🔟ሳኦል ማለት ምን ማለት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

}
if(params=="an"){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"✅በትክክል መልሰዋል",
  show_alert: true
})
}else{
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text:"❌መልሱ ጀግና ነው",
  show_alert: true
})
}
