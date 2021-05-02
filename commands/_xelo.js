/*CMD
  command: /xelo
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
[{title:"👂ስለ ፀሎት",command:"/abox"}],
[{title:"😇የቅዱሳን ጸሎት",command:"/xekidus"},{title:"⚡️የዘወትር ፀሎት",command:"/xedayil"}],
[{title:"◀️ለመመለስ▶️",command:"/mych"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ይህ የኩናምኛ ገጽ ነው ካለን የመረጃ እጥረት ምክንያት መዝሙሮች ብቻ ጭነናል፡፡ ምናልባት እርስዎ ጋር ተጨማሪ መረጃ ካለ ያናግሩን፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  ይህ የፀሎት ገፅ ነው ከታች ያሉትን button ይጠቀሙ",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
