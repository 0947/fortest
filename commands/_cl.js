/*CMD
  command: /cl
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"LAO",command:"/country la"}],
[{title:"LATIVIA",command:"/country lv"}],
[{title:"LEBANON",command:"/country lb"}],[{title:"LIBERIA",command:"/country lr"}],
[{title:"LIBYA",command:"/country ly"}],
[{title:"LITHUANIA",command:"/country lt"}],
[{title:"LUXEMBOURG",command:"/country lu"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
