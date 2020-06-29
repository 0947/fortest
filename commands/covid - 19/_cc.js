/*CMD
  command: /cc
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
[{title:"CAMBODIA",command:"/country kh"}],
[{title:"CAMEROON",command:"/country cm"}],
[{title:"CANADA",command:"/country ca"}],[{title:"CENTRAL AFRICA",command:"/country cf"}],
[{title:"CHAD",command:"/country td"}],
[{title:"CHILE",command:"/country cl"}],
[{title:"CHINA",command:"/country cn"}],
[{title:"COLOMBIA",command:"/country co"}],
[{title:"CONGO",command:"/country cg"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
