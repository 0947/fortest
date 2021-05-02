/*CMD
  command: /wlso
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

Bot.run({command: "/wlso aa", run_after:0.2
})

}else{

let msg=User.getProperty("msgid")

var b =[
[{title:"ሻንቶ ቅ.ገ",command:"/shant"},{title:"ኤዶ ኪ.ም",command:"/edokid"}],[{title:"ደሳለኝ ዶርጮ",command:"/desdo"},{title:"ዱቦ ሉ.ማ",command:"/dublu"}],
[{title:"🌍ቋንቋ ለመቀየር🌍",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ይህ የወላይትኛ ገጽ ነው፡፡ ባለን የመረጃ እጥረት ምክንያት መዝሙሮች ብቻ ጭነናል፡፡ ተጨማሪ መረጃ ካለዎት ያናግሩን፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  ይህ የወላይትኛ ገጽ ነው፡፡ ባለን የመረጃ እጥረት ምክንያት መዝሙሮች ብቻ ጭነናል፡፡ ተጨማሪ መረጃ ካለዎት ያናግሩን፡፡",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}

}
