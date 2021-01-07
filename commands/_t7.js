/*CMD
  command: /t7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ግሪክ እና ዕብራይስጥ", command: "/t8 n" }],[{ title: "አራማይስጥ እና ግሪክ", command: "/t8" }],[{title:"አራማይስጥ እና በእብራይስጥ",command:"/t8 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("7⃣ትንቢተ ዳንኤል በ ------------ እና ----------- ቋንቋ የተፃፈ ነው",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ት.ኢሳ 7:14 ነው",
  show_alert: true
})
}
