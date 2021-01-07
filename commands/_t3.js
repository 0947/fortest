/*CMD
  command: /t3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ታጋሽ", command: "/t4 g" }],[{ title: "አስተማሪ", command: "/t4 an" }],[{title:"የተረጋጋ",command:"/t4"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("3⃣መክብብ የቃሉ ትርጉም ምን ማለት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ኮከብ ነው",
  show_alert: true
})
}
