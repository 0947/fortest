/*CMD
  command: /fpho
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
[{title:"ገፅ 1",command:"/fpic1"},{title:"ገፅ 2",command:"/fpic2"},{title:"ገፅ 3",command:"/fpic3"}],[{title:"ገፅ 4",command:"/fpic4"},{title:"ገፅ 5",command:"/fpic5"}],
[{title:"<-- ተመለስ",command:"/faustin"}]]

Bot.editMessage("ከዚህ በታች ፎቶዎች በገጽ ተከፋፍለው ተቀምጠዋል የገጽ ቁጥር ይምረጡ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
