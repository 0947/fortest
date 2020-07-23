/*CMD
  command: /cv
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
[{title:"VANUATU",command:"/country vu"}],
[{title:"VENEZUELA",command:"/country ve"}],
[{title:"VIETNAM",command:"/country vn"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
