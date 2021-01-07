/*CMD
  command: /faqsami
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
[{title:"❓አጠቃቀም",command:"/fqhow"},{title:"❓በጠቅላላ",command:"/fqimg"}],[{title:"❓ስራ መቼ ጀመረ",command:"/fqwhere"},{title:"🛑ገለጻ",command:"/fqall"}],
[{title:"✔️ቻነል",url:"t.me/catholicb"},{title:"🤳Admin Line",command:"/enadmz2"}],
[{title:"💵Donation / ለመደገፍ",command:"/donsam"}],
[{title:"⬅️",command:"/mych"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  ይህ የ FAQ (frequently asked questions) ክፍል ሲሆን ስለቦቱ ገለጻ ያገኙበታል፡፡",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  ይህ የ FAQ (frequently asked questions) ክፍል ሲሆን ስለቦቱ ገለጻ ያገኙበታል፡፡",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
