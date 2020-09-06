/*CMD
  command: /cp
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
[{title:"PAKISTAN",command:"/country pk"}],
[{title:"PALESTINE",command:"/country ps"}],
[{title:"PANAMA",command:"/country pa"}],[{title:"PAPUA-NEW-GUINEA",command:"/country pg"}],
[{title:"PARAGUAY",command:"/country py"}],
[{title:"PERU",command:"/country pe"}],
[{title:"PHILIPPINES",command:"/country ph"}],
[{title:"POLAND",command:"/country pl"}],
[{title:"PORTUGAL",command:"/country pt"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
