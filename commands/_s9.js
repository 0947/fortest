/*CMD
  command: /s9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "1054", command: "/s10 an" }],[{ title: "1521", command: "/s10 a" }],[{title:"1533",command:"/s10 n"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("9⃣የምስራቅ ኦርቶዶክስ አብያተክርስቲን ከካቶሊክ የተለዩበት ዓም የትኛው ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ እግዚአብሄር ከኛ ጋር ነው",
  show_alert: true
})
}
