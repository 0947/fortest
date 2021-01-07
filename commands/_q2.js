/*CMD
  command: /q2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "መፅሀፈ ሩት", command: "/q3" }],[{ title: "መፅሀፈ ምሳሌ", command: "/q3 an" }],[{title:"መፅሀፈ ኢያሱ",command:"/q3 g"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("2⃣ከሚከተሉት የብሉይ ኪዳን መጽሀፍት ውስጥ ከጥበብ መጽሀፍት የሚመደበው የትኛው ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ byblos ነው",
  show_alert: true
})
}
