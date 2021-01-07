/*CMD
  command: /t10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "የህይወት ዛፍ", command: "/t11 n" }],[{ title: "እርግብ", command: "/t11 an" }],[{title:"የተመለሰ",command:"/t11"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("🔟ዮናስ ማለት በዕብራይስጥ ቋንቋ ------------- ማለት ነው",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ተቆዓ ነው",
  show_alert: true
})
}
