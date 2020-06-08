/*CMD
  command: /capps
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
[{title:"1",command:"/capps1"},{title:"2",command:"/capps2"},{title:"3",command:"/capps3"}],
]

Bot.editMessage(user.first_name+" ከታች በገፅ ከፋፍለን አዘጋጅተናል ገጽ ይምረጡ",msg)&Bot.editInlineKeyboard(b,msg)
