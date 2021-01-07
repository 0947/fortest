/*CMD
  command: /s2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ዮሀንስ", command: "/s3 n" }],[{ title: "ጴጥሮስ", command: "/s3 an" }],[{title:"ማቴዎስ",command:"/s3"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("2⃣የካቶሊክ ቤተክርስቲያን የመጀመሪያው ርዕሰ ሊቃነ ጳጳስ ማነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ አናክለቱስ ነው",
  show_alert: true
})
}
