/*CMD
  command: /t8
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "እግዚአብሔር አምላክ ነው", command: "/t9 an" }],[{ title: "እግዚአብሔር ሀያል ነው", command: "/t9" }],[{title:"እግዚአብሔር ቻይ ነው",command:"/t9 n"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("8⃣ኢዩኤል ማለት ምን ማለት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ አራማይስጥ እና በእብራይስጥ ነው",
  show_alert: true
})
}
