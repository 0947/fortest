/*CMD
  command: /s10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "150 መዝሙረ ዳዊት", command: "/s11 an" }],[{ title: "አይጸልዩም", command: "/s11 a" }],[{title:"59 መዝሙረ ዳዊት",command:"/s11 n"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("🔟የመቁጠሪያ ጸሎት ከመጀመሩ በፊት ሰዎች በምን ይፀልዩ ነበር?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ 1054 ነው",
  show_alert: true
})
}
