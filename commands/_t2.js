/*CMD
  command: /t2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ደስታ", command: "/t3 g" }],[{ title: "ጨረቃ", command: "/t3" }],[{title:"ኮከብ",command:"/t3 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("2⃣በፋርስ ቋንቋ አስቴር ማለት ምን ማለት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ የእለታት ዜና ነው",
  show_alert: true
})
}
