/*CMD
  command: /t9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ተቆናስ", command: "/t10 n" }],[{ title: "ነቆዓል", command: "/t10" }],[{title:"ተቆዓ",command:"/t10 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("9⃣ነብዩ አሞጽ ይሁዳ ውስጥ ከምትገኝ ----------- በመባል ከምትጠራ አንዲት መንደር የተገኘ ነቢይ ነው፡፡",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ እግዚአብሔር አምላክ ነው",
  show_alert: true
})
}
