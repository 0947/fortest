/*CMD
  command: /ck
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
[{title:"KAZAKHSTAN",command:"/country kz"}],
[{title:"KENYA",command:"/country ke"}],
[{title:"KUWAIT",command:"/country kw"}],
[{title:"KYRGYZSTAN",command:"/country kg"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
