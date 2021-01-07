/*CMD
  command: /t5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ኖቫ", command: "/t6 g" }],[{ title: "ናቪ", command: "/t6 an" }],[{title:"ነቢ",command:"/t6"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("5⃣ነብይ የሚለው ቃል አመጣጡ --------- ከሚል የዕብራይስጥ ቃል ነው፡፡",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ በ5 ነው\nከምዕራፍ 1-41\nከምዕራፍ 42-72\nከምዕራፍ 73-89\nከምዕራፍ 90-106\nከምዕራፍ 107-150 ናቸው፡፡",
  show_alert: true
})
}
