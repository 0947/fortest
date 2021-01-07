/*CMD
  command: /f10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ዘ ኔቸር", command: "/f11 n" }],[{ title: "ላውዳቶሲ", command: "/f11 an" }],[{title:"ናቹራሊቲ",command:"/f11 n"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("🔟በስነተፈጥሮ ጥበቃ ላይ ያጠነጠነው የቅዱስ ርዕሰ ሊቃነ ጳጳሳት ፍራንቺስኮስ መፅሀፍ ርዕስ የትኛው ነው?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ሞንስትራንስ ነው",
  show_alert: true
})
}
