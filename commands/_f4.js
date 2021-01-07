/*CMD
  command: /f4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ወንጋሊዮን / ወንጌሊን", command: "/f5 n" }],[{ title: "ባይብላና / በይብኧልስ", command: "/f5 a" }],[{title:"ዩአጌሊዮን / ኧዩአጌሊዮን",command:"/f5 an"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("4⃣ወንጌል የሚለው ቃል --------------- ከሚለው የግሪክ ቃል የተገኘ ነው",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ መልእክተኛዬ ነው",
  show_alert: true
})
}
