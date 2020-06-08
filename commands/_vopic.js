/*CMD
  command: /vopic
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
[{title:"ጠቅላላ ገጽ",command:"/vpa"},{title:"ሀገርኛ ቅኝቶች",command:"/evp"}]]

Bot.editMessage("ይህ የፎቶ vocal ገፅ ነው ከታች ያሉትን በተን በመጠቀም የአገልግሎቱ ተካፋይ ይሁኑ",msg)&Bot.editInlineKeyboard(b,msg)
