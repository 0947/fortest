/*CMD
  command: /menu
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
[{ title: "🏠የካቶሊክ ቤተክርስቲያን ምንነት", command: "/first" }],
[{ title:"🇪🇹የትግርኛ ገፅ🇪🇹", command:"/tigray"}],
[ { title: "💒የቤ/ክ አስተምህሮ", command: "/thalk" },{title:"⚠️COVID ፕሮግራሞች",command:"/covid"}],
[{title:"📜የቅዱሳን ታሪክ📜",command:"/kidus"}],
[{ title: "👤አስተያየት ለመስጠት", command: "/admin" }]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  እንኳን ወደዚህ ቦት በደህና መጡ፡፡ በዚህ ቦት ብዙ መረጃ ማግኘት ይችላሉ፡፡ ከታች ያለውን button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+" እንኳን ወደዚህ ቦት በደህና መጡ፡፡ በዚህ ቦት ብዙ መረጃ ማግኘት ይችላሉ፡፡ ከታች ያለውን button ይጠቀሙ",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
