/*CMD
  command: /f8
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ጀርመን", command: "/f9 n" }],[{ title: "ፖርቹጋል", command: "/f9 a" }],[{title:"ጣሊያን",command:"/f9 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("8⃣ቅዱስ ዳንኤል ኮምቦኒ የትውልድ ስፍራው የት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ዘጠኝ ነው",
  show_alert: true
})
}
