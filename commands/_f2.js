/*CMD
  command: /f2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "የኪሩቤል ሌላ ስም", command: "/f3 n" }],[{ title: "የባቢሎን ዘር", command: "/f3 an" }],[{title:"የንጉስ ዘመድ",command:"/f3"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("2⃣በትንቢተ ሐጌ እና በትንቢተ ዘካርያስ ስለ ዘሩባቤል ተጽፏል ለመሆኑ ዘሩባቤል ማን ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ መፅናናት ነው",
  show_alert: true
})
}
