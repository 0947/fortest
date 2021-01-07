/*CMD
  command: /s11
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{title:"⬅️ዋና ገጽ",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("👏የዙር አራት ጥያቄዎችን ጨርሰዋል\n😀ወደ ዋና ገጽ ለማምራት ከታች ያለውን አዝራር (button) ይጫኑት\n🎉congratulations",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ 150ውን መዝሙረ ዳዊት ነው",
  show_alert: true
})
}
