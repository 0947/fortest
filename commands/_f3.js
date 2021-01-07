/*CMD
  command: /f3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "የሚካኤል ምሳሌ", command: "/f4 n" }],[{ title: "ረድተኸኛል", command: "/f4 a" }],[{title:"መልእክተኛዬ",command:"/f4 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("3⃣ሚልኪያስ ማለት ምን ማለት ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ የባቢሎን ዘር ነው",
  show_alert: true
})
}
