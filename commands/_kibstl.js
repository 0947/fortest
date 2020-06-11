/*CMD
  command: /kibstl
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
[{title:"1",command:"/kib1"},{title:"2",command:"/kib2"},{title:"3",command:"/kib3"}],
[{title:"✅ለመመለስ",command:"/mych"}]
]

Bot.editMessage(user.first_name+" ከዚህ በታች የኪቦርድ style በገፅ ተከፋፍለው ተቀምጠዋል",msg)&Bot.editInlineKeyboard(b,msg)
