/*CMD
  command: /cf
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
[{title:"FALKLAND ISLANDS",command:"/country fk"}],
[{title:"FIJI",command:"/country fj"}],
[{title:"FINLAND",command:"/country fl"}],[{title:"FRANCE",command:"/country fr"}],
[{title:"FRENCH GUIANA",command:"/country gf"}],
[{title:"FRENCH SOUTHERN",command:"/country tf"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
