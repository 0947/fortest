/*CMD
  command: /f6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "የደስታ ምስጢር", command: "/f7 n" }],[{ title: "የክብር ምስጢር", command: "/f7 a" }],[{title:"የሕማም ምስጢር",command:"/f7 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("6⃣ከአራቱ የመቁጠሪያ ምስጢሮች ሐሙስ እለት የሚደገመው የትኛው ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ማርያም ነው",
  show_alert: true
})
}
