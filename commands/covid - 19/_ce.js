/*CMD
  command: /ce
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
[{title:"ETHIOPIA",command:"/country et"}],
[{title:"ECUADOR",command:"/country ec"}],
[{title:"EGYPT",command:"/country eg"}],[{title:"EL SALVADOR",command:"/country sv"}],
[{title:"EQUATORIAL GUINEA",command:"/country gq"}],
[{title:"ERITREA",command:"/country er"}],
[{title:"ESTONIA",command:"/country ee"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
