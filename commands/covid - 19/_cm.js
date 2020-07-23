/*CMD
  command: /cm
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
[{title:"MACEDONIA",command:"/country mk"}],
[{title:"MADAGASCAR",command:"/country mg"}],
[{title:"MALAWI",command:"/country mw"}],[{title:"MALAYSIA",command:"/country my"}],
[{title:"MALI",command:"/country ml"}],
[{title:"MAURITANIA",command:"/country mr"}],
[{title:"MEXICO",command:"/country mx"}],
[{title:"MOLDOVA",command:"/country md"}],
[{title:"MONGOLIA",command:"/country mn"}],
[{title:"MONTENEGRO",command:"/country me"}],
[{title:"MOROCCO",command:"/country ma"}],
[{title:"MOZAMBIQUE",command:"/country mz"}],
[{title:"MYANMAR",command:"/country mm"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
