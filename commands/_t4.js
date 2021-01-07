/*CMD
  command: /t4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "በ4", command: "/t5 g" }],[{ title: "በ3", command: "/t5" }],[{title:"በ5",command:"/t5 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("4⃣መዝሙረ ዳዊት 150 ክፍሎቹ በስንት መፅሀፍት ተከፍሏል?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ አስተማሪ ነው",
  show_alert: true
})
}
