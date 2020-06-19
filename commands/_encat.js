/*CMD
  command: /encat
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
[{title:"By Video",command:"/dopingp"},{title:"Four Marks",command:"/abcat"}],
[{title:"The catholicism answer PDF",command:"/enpdf"}],
[{title:"✅Go Back",command:"/myin"}]]

Bot.editMessage(user.first_name+" By this button, they are well aware of Catholicism",msg)&Bot.editInlineKeyboard(b,msg)
