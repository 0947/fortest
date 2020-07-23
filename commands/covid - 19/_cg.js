/*CMD
  command: /cg
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
[{title:"GABON",command:"/country ga"}],
[{title:"GAMBIA",command:"/country gm"}],
[{title:"GEORGIA",command:"/country ge"}],[{title:"GEARMANY",command:"/country de"}],
[{title:"GHANA",command:"/country gh"}],
[{title:"GREECE",command:"/country gr"}],
[{title:"GREEN-LAND",command:"/country gl"}],
[{title:"GUATEMALA",command:"/country gt"}],
[{title:"GUINEA",command:"/country gn"}],
[{title:"GUINEA-BISSAU",command:"/country gw"}],
[{title:"GUYANA",command:"/country gy"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
