/*CMD
  command: /theolo
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
[{title:"በድምጽ",command:"/theoud"},{title:"በፅሁፍ",command:"/thtxt"}],
[{title:"በቪዲዮ",command:"/thvid"},{title:"በፎቶ",command:"/thpic"}],
[{title:"PDF መፅሀፍት",command:"/thpdf"}],
[{title:"✅ተመለስ",command:"/mych"}]]

Bot.editMessage(user.first_name+" ይህ የ theology of the body button ነው ከዚህ ጽሁፍ በታች ያሉትን በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
