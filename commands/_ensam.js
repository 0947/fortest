/*CMD
  command: /ensam
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b =[
[{title:"〽️What is Catholicsin",command:"/encat"}],
[{title:"🗣Sermons",command:"/siben"},{title:"🔧APPS",command:"/inapp1"}],
[{title:"🌍Change Language🌍",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  you selected *english* language. You can get info in english language",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  you selected *english* language. You can get info in english language",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
