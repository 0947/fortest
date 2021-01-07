/*CMD
  command: /f5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ማርያም", command: "/f6 an" }],[{ title: "ኤልሳቤጥ", command: "/f6 a" }],[{title:"አስቴር",command:"/f6"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("5⃣የማርቆስ ወላጅ እናት ማን ትባላለች?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ዩአጌሊዮን / ኧዩአጌሊዮን ነው",
  show_alert: true
})
}
