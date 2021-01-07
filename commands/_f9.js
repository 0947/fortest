/*CMD
  command: /f9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ሞንስትራንስ", command: "/f10 an" }],[{ title: "አትሮንስ", command: "/f10 a" }],[{title:"መንበረ ታቦት",command:"/f10 n"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("9⃣በቅዱስ ቁርባን ስግደት ወይንም በኡደት ሰአት ቁርባን የሚቀመጥበት በፀሀይ ጨረር ምሳሌ የተሰራ አንድ መያዣ እና በአብዛኛው ጊዜ ክብ መስታወት በመሀሉ ያለው የስርአተ አምልኮ መሳርያ ምን በመባል ይጠራል?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ ጣሊያን ነው",
  show_alert: true
})
}
