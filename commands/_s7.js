/*CMD
  command: /s7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ኢየሱስ የኢየሩሳሌም ሴቶች አጽናና", command: "/s8 n" }],[{ title: "ኢየሱስ ሁለተኛ ጊዜ ወደቀ", command: "/s8 an" }],[{title:"ቬሮኒካ የኢየሱስ ፊት ጠረገች",command:"/s8"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("7⃣የመስቀል መንገድ ሰባተኛ ማረፊያ የትኛው ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ባዚሊካም ነው",
  show_alert: true
})
}
