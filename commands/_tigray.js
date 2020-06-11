/*CMD
  command: /tigray
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
[{ title: "☘መዝሙሮች☘", command: "/tigmez" },{ title: "🍃PDF መፅሀፍ🍃", command: "/tigpdf" }],
[{ title: "⚡️የቫቲካን ሬዲዮ⚡️", command: "/tigvat" },{ title: "🌺የድምፅ ስራዎች🌺", command: "/tigaud" }],
[{ title: "🎬ቪዲዮዎች🎬", command: "/tigvid" },{title:"🎲አፕሊኬሽን🎲",command:"/tigapp"}],[{title:"⤴️ወደ ዋና ገፅ⤴️",command:"/mych"}]]

Bot.editMessage(user.first_name+" ይህ የትግርኛ ገፅ ነው፡፡ አስፈላጊ ያልናቸውን መረጃዎች ከታች የጫንን ሲሆን ከዚህ ፅሁፍ በታች በኩል ያሉትን በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
