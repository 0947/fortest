/*CMD
  command: /s8
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "እግዚአብሄር አዳነኝ", command: "/s9 n" }],[{ title: "ረዳቴ ከፊቴ ነው", command: "/s9 a" }],[{title:"እግዚአብሄር ከኛ ጋር ነው",command:"/s9 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("8⃣አማኑኤል ማለት ምን ማለት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ኢየሱስ ሁለተኛ ጊዜ ወደቀ ነው",
  show_alert: true
})
}
