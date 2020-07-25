/*CMD
  command: /plza
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b =[
[{ title: "🇪🇹ኢትዮጵያ", command: "/country et" },{title:"🌍GLOBAL",command:"/global_track"}],[{title:"🔍ሀገር ለመፈለግ / Search🔎",command:"/coval"}],
[{title:"<--",command:"/mytg"}]]

 th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  *🙋‍♂ይህ ገፅ የአለም አቀፍ የኮሮና በሽታ መረጃ የምናደርስበት ነው፡፡ ከታች በሚፈልጉት መልኩ የተሰናዳውን መረጃ ይጠቀሙ፡፡\n\n🙋‍♂On this button you can get covid info. Select the buttons below*",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  *🙋‍♂ይህ ገፅ የአለም አቀፍ የኮሮና በሽታ መረጃ የምናደርስበት ነው፡፡ ከታች በሚፈልጉት መልኩ የተሰናዳውን መረጃ ይጠቀሙ፡፡\n\n🙋‍♂On this button you can get covid info. Select the buttons below*",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
