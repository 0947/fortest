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

let msg = User.getProperty("msgid");

var b =[
[{title:"ሻንቶ ቅ.ገ",command:"/shant"},{title:"ኤዶ ኪ.ም",command:"/edokid"}],[{title:"ደሳለኝ ዶርጮ",command:"/desdo"},{title:"ዱቦ ሉ.ማ",command:"/dublu"}],
[{title:"✅ተመለስ",command:"/mych"}]]

Bot.editMessage(user.first_name+" ይህ የወላይትኛ ገጽ ነው፡፡ ከታች መዝሙሮች በበተን ተቀምጠዋል ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
