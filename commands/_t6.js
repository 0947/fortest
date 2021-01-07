/*CMD
  command: /t6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ት.ኢሳ 7:14", command: "/t7 an" }],[{ title: "መዝ 60:7", command: "/t7" }],[{title:"ማቴ 11:7",command:"/t7 n"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("6⃣^^ድንግል ትፀንሳለች ወንድ ልጅም ትወልዳለች ስሙንም ዐማኑኤል ብላ ትጠራዋለች^^\nይህ ጥቅስ በመጽሀፍ ቅዱስ ተደጋግሞ እናገኘዋለን፡፡ ሆኖም ከታች ከተሰጡት ዝርዝሮች ውስጥ በየትኛው የመፅሀፍ ቅዱስ ክፍል ይገኛል?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ናቪ ነው",
  show_alert: true
})
}
