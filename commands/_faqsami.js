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

let msg = User.getProperty("msgid");

var b =[
[{title:"❓አጠቃቀም",command:"/fqhow"},{title:"❓በጠቅላላ",command:"/fqimg"}],[{title:"❓ስራ መቼ ጀመረ",command:"/fqwhere"},{title:"🛑ገለጻ",command:"/fqall"}],
[{title:"✔️ቻነል",url:"t.me/catholicb"},{title:"🤳Admin Line",command:"/admin"}],
[{title:"✅ተመለስ",command:"/mych"}]]

Bot.editMessage(user.first_name+" ይህ የ FAQ (frequently asked questions) ክፍል ሲሆን ስለቦቱ ገለጻ ያገኙበታል፡፡",msg)&Bot.editInlineKeyboard(b,msg)
