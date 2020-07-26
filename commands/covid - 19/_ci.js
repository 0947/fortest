/*CMD
  command: /ci
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
[{title:"ICELAND",command:"/country is"}],
[{title:"INDIA",command:"/country in"}],[{title:"INDONESIA",command:"/country id"}],
[{title:"IRAN",command:"/country irn"}],
[{title:"IRAQ",command:"/country irq"}],
[{title:"IRELAND",command:"/country ie"}],
[{title:"ISRAEL",command:"/country il"}],
[{title:"ITALY",command:"/country it"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
