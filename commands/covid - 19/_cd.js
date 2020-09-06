/*CMD
  command: /cd
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
[{title:"DENMARK",command:"/country dk"}],
[{title:"DJIBOUTI",command:"/country dj"}],[{title:"DEMOCRATIC REPUBLIC",command:"/country do"}],
[{title:"DR CONGO",command:"/country co"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
