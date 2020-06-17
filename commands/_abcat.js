/*CMD
  command: /abcat
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
[{title:"ONE",command:"/cone"},{title:"HOLLY",command:"/chol"}],
[{title:"APOSTOLIC",command:"/capo"},{title:"CATHOLIC",command:"/ccta"}],
[{title:"GO BACK TO HOME",command:"/myin"}]
]

Bot.editMessage("️🍂*Four Marks of the True Church   \nIf we wish to locate the Church founded by Jesus, we need to locate the one that has  the four chief marks or qualities of his Church. The Church we seek must be:\n1⃣one,  \n2⃣holy,  \n3⃣catholic, and  \n4⃣apostolic*",msg)&Bot.editInlineKeyboard(b,msg)
