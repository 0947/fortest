/*CMD
  command: /enart
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
[{title:"True Church",command:"/4c"}],
[{title:"Eucharistic Adoration",command:"/pea"}],
[{title:"Early Fathers",command:"/cef"}],
[{title:"⬅️",command:"/myin"}]]


Bot.editMessage("This is the article page. Use the buttons below",msg)&Bot.editInlineKeyboard(b,msg)
