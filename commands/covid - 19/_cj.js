/*CMD
  command: /cj
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
[{title:"JAMAICA",command:"/country jm"}],
[{title:"JAPAN",command:"/country jp"}],
[{title:"JORDAN",command:"/country jo"}]
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
