/*CMD
  command: /q5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ቅ.ቦናፊቼ", command: "/q6" }],[{ title: "ቅ.ኒኮላስ", command: "/q6 an" }],[{title:"ቅ.አንጦኒዮስ",command:"/q6 v"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("5⃣የገና አባት የወከለው የካቶሊክ ቤተክርስቲያን ቅዱስ ማን ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ቅዱስ ቦናፊቼ ነው",
  show_alert: true
})
}
