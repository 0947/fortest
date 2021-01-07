/*CMD
  command: /q4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ቅ.ኒኮላስ", command: "/q5" }],[{ title: "ቅ.ቦናፊቼ", command: "/q5 an" }],[{title:"ቅ.አጎስጢኖስ",command:"/q5 v"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("4⃣የክሪስማስ ዛፍን ያስጀመሩ የካቶሊክ ቅዱስ ማን በመባል ይጠራሉ?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ አብራም ነው",
  show_alert: true
})
}
