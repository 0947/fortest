/*CMD
  command: /s3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "40 / 28", command: "/s4 n" }],[{ title: "44 / 31", command: "/s4 a" }],[{title:"46 / 27",command:"/s4 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("3⃣በመጽሀፍ ቅዱስ ስንት የብሉይ እና የአዲስ ኪዳን መጽሀፍት አሉ?\n⚠️ምርጫ ላይ በቅድሚያ የሚገኘው ቁጥር የብሉይ ሲሆን ቀጥሎ ያለው ደግሞ የአዲስ ነው፡፡ ",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ጴጥሮስ ነው",
  show_alert: true
})
}
