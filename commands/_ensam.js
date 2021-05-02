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

if(!params){
Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.run({command: "/ensam aa", run_after:0.2
})

}else{

let msg=User.getProperty("msgid")

var b =[
[{title:"APPS",command:"/inapp1"},{title:"Articles",command:"/enart"}],
[{title:"ABOUT CATHOLICISM",command:"/engl"}],
[{title:"Theology Of The Body",command:"/thpdf2"}],
[{title:"Reciving the eucharist",command:"/how44"}],
[{title:"Gift Of Christmas",command:"/egf"},{title:"Miracles",command:"/mirr"}],
[{title:"🌍Change Language🌍",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  you selected *english* language. You can get info in english language",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  you selected *english* language. You can get info in english language",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}

}
