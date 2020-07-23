/*CMD
  command: /cn
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
[{title:"NAMIBIA",command:"/country na"}],
[{title:"NEW-ZEALAND",command:"/country nz"}],
[{title:"NICARAGUA",command:"/country ni"}],[{title:"NIGER",command:"/country ne"}],
[{title:"NIGERIA",command:"/country ng"}],
[{title:"NORTH KOREA",command:"/country kp"}],
[{title:"NORWAY",command:"/country no"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
