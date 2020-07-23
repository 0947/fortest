/*CMD
  command: /cu
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
[{title:"UNITED STATES",command:"/country us"}],
[{title:"UAE",command:"/country ae"}],
[{title:"UGANDA",command:"/country ug"}],[{title:"UNITED KINGDOM",command:"/country gb"}],
[{title:"UKRAINE",command:"/country ua"}],
[{title:"URUGUAY",command:"/country uy"}],
[{title:"UZBEKISTAN",command:"/country uz"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
