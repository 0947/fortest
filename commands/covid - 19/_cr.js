/*CMD
  command: /cr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: covid - 19
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"REPUBLIC OF KOSOVO",command:"/country xk"}],
[{title:"ROMANIA",command:"/country ro"}],
[{title:"RUSSIA",command:"/country ru"}],[{title:"RWANDA",command:"/country rw"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
