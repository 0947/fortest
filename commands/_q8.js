/*CMD
  command: /q8
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ሀረግ", command: "/q9" }],[{ title: "ቁጥር", command: "/q9 an" }],[{title:"ብስራት",command:"/q9 c"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("8⃣ዘኁልቅ ማለት ምን ማለት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ግብፅ (ዘጸ 12:1-20) ነው",
  show_alert: true
})
}
