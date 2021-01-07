/*CMD
  command: /s6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ዘኦሪጅን", command: "/s7 n" }],[{ title: "ባዚሊካም", command: "/s7 an" }],[{title:"ብራይትዴይ",command:"/s7"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("6⃣በመጀመሪያው የሮም ጳጳስ (ቅዱስ ጴጥሮስ) መቃብር ላይ የታነጸው በሮም የሚገኘው ታላቁ ቤተክርስቲያን ስሙ ምን ይባላል?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ታበርናክል ነው",
  show_alert: true
})
}
