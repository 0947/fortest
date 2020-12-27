/*CMD
  command: /4c
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
[{title:"one",command:"/on1"},{title:"holy",command:"/ho2"}],
[{title:"catholic",command:"/ca3"},{title:"apostolic",command:"/ap4"}],
[{title:"⬅️",command:"/enart"}]]


Bot.editMessage("🍂Four Marks of the True Church   \nIf we wish to locate the Church founded by Jesus, we need to locate the one that has  \nthe four chief marks or qualities of his Church. The Church we seek must be: \n\n1⃣one,  \n2⃣holy,  \n3⃣catholic, and  \n4⃣apostolic\n\n👇use buttons for more info",msg)&Bot.editInlineKeyboard(b,msg)
