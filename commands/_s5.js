/*CMD
  command: /s5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var b =[
[{ title: "ቦክስኦፍ ላይፍ", command: "/s6 n" }],[{ title: "ታበርናክል", command: "/s6 an" }],[{title:"አትሮንስ",command:"/s6"}],[{title:"⬅️",command:"/qans dl"}]]

if(request.data){
var msg = request.message.message_id

Bot.editMessage("5⃣በካቶሊካዊት ቤተክርስቲያን ከፊትለፊት በመሰዊያ አጠገብ የሚኖር፡፡ በአብዛኛዉ ጊዜ ከአጠገቡ ቀይ መብራት የሚበራ፡፡ ካህኑ የተባረከ ህብስት የሚያስቀምጥበት ትንሽዬ ሳጥን ወይንም ስፍራ ምን ይባላል?",msg)&Bot.editInlineKeyboard(b,msg)

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
  text:"❌መልሱ መስከረም 22 ነው",
  show_alert: true
})
}
