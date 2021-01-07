/*CMD
  command: /f7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ሰባት", command: "/f8 n" }],[{ title: "ዘጠኝ", command: "/f8 an" }],[{title:"አስር",command:"/f8 a"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("7⃣የመንፈስ ቅዱስ ፍሬዎች ስንት ናቸው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ የሕማም ምስጢር ነው",
  show_alert: true
})
}
