/*CMD
  command: /blsam
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
[{title:"🎧የ ዶሩቕ መዝሙሮች🎧",command:"/blsong"}],
[{title:"🌍ቋንቋ ለመቀየር🌍",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ይህ የብሌንኛ ገጽ ነው ካለን የመረጃ እጥነት ምክንያት መዝሙሮች ብቻ ጭነናል፡፡ ምናልባት እርስዎ ጋር ተጨማሪ መረጃ ካለ ያናግሩን፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  ይህ የብሌንኛ ገጽ ነው ካለን የመረጃ እጥነት ምክንያት መዝሙሮች ብቻ ጭነናል፡፡ ምናልባት እርስዎ ጋር ተጨማሪ መረጃ ካለ ያናግሩን፡፡",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
