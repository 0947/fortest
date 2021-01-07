/*CMD
  command: /q3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ኢብራም", command: "/q4" }],[{ title: "አብራሜ", command: "/q4 v" }],[{title:"አብራም",command:"/q4 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("3⃣አብርሃም የመጀመሪያ ስሙ ማን ነበር?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ መፅሀፈ ምሳሌ ነው",
  show_alert: true
})
}
