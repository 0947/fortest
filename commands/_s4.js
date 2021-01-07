/*CMD
  command: /s4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "መስከረም 22", command: "/s5 an" }],[{ title: "ጥቅምት 9", command: "/s5 a" }],[{title:"ሀምሌ 13",command:"/s5"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("4⃣የጠባቂ መላእክት በዓል በምን እለት ይከበራል?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ 46/27 ነው",
  show_alert: true
})
}
