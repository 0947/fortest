/*CMD
  command: /fbk
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
[{title:"የመለኮታዊ ምህረት ጸሎት",command:"/faux"}],
[{title:"የፋውስቲና ማስታወሻ",command:"/faup"}],
[{title:"<-- ተመለስ",command:"/faustin"}]]

Bot.editMessage("ከዚህበታች መፅሀፍት በPDF ተቀምጠዋል የመፅሀፉን ርዕስ ይምረጡ",msg)&Bot.editInlineKeyboard(b,msg)
