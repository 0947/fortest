/*CMD
  command: /tigray
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

Bot.run({command: "/tigray aa", run_after:0.2
})

}else{

let msg=User.getProperty("msgid")

var b =[
[{ title: "☘መዝሙሮች", command: "/tigmez" },{ title: "🍃PDF መፅሀፍ", command: "/tigpdf" }],
[{ title: "⚡️የቫቲካን ሬዲዮ", command: "/tigvat" },{ title: "🌺የድምፅ ስራዎች", command: "/tigaud" }],
[{ title: "🎬ቪዲዮዎች", command: "/tigvid" },{title:"🎲አፕሊኬሽን",command:"/tigapp"}],
[{title:"🙏ፀሎት",command:"/xetig"}],
[{title:"🌍ቋንቋ ለመቀየር / Change Language🌎",command:"/mytg"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  እንኳን ወደዚህ ቦት በደህና መጡ፡፡ በዚህ ቦት ብዙ መረጃ ማግኘት ይችላሉ፡፡ ከታች ያለውን button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+" እንኳን ወደዚህ ቦት በደህና መጡ፡፡ በዚህ በተን በትግርኛ ቋንቋ ብዙ መረጃ ማግኘት ይችላሉ፡፡ ከታች ያለውን button ይጠቀሙ",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}

}
