/*CMD
  command: /q7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ግብጽ", command: "/q8 an" }],[{ title: "እስራኤል", command: "/q8 v" }],[{title:"ከነአን",command:"/q8"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("7⃣የመጀመሪያው ፋሲካ የት ሀገር ተከበረ?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ሁለተኛ ነው",
  show_alert: true
})
}
