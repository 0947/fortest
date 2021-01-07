/*CMD
  command: /q6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ሶስተኛ", command: "/q7" }],[{ title: "የመጀመሪያ", command: "/q7 v" }],[{title:"ሁለተኛ",command:"/q7 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("6⃣ዘጸአት ስንተኛው የሙሴ መፅሀፍ ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ቅዱስ ኒኮላስ ነው",
  show_alert: true
})
}
