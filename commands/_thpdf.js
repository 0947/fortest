/*CMD
  command: /thpdf
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
[{title:"1",command:"/thpdf1"},{title:"2",command:"/thpdf4"}],
[{title:"<--",command:"/theolo"}]]

Bot.editMessage("በዚህ button የtheology ትምህርት በመጽሀፍ ያገኛሉ፡፡ ከታች ያሉ በተኖች በመጠቀም ገጽ ይምረጡ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
