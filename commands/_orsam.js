/*CMD
  command: /orsam
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!params){
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.run({command: "/orsam aa", run_after:0.2
})

}else{

let msg=User.getProperty("msgid")

var b =[
[{title:"🎧faaruu🎧",command:"/ormusic"}],
[{title:"🌍Language / Qooqa",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  Kuni fuula Afaan Oromooti, Odeefannoo Afaan Oromootin qopheesineera fayyadama.",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  Kuni fuula Afaan Oromooti, Odeefannoo Afaan Oromootin qopheesineera fayyadama.",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}

}
