/*CMD
  command: /amlyu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b=[
[{title:"የቅዱስ ዮሴፍ አመት",command:"/yosa"}],
[{title:"የቫቲካን ራዲዮ",command:"/cvati"}],
[{title:"ካቶሊካዊ መሰናዶ",command:"/mkjs"}],
[{title:"⬅️",command:"/mych"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ይህ የኩናምኛ ገጽ ነው ካለን የመረጃ እጥረት ምክንያት መዝሙሮች ብቻ ጭነናል፡፡ ምናልባት እርስዎ ጋር ተጨማሪ መረጃ ካለ ያናግሩን፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  እንኳን ወደ ልዩ ማህደር ገጽ በደህና መጡ ከታች ያሉትን በተኖች በመጠቀም አገልግሎቱን ያስቀጥሉ፡፡",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
