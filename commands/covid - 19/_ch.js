/*CMD
  command: /ch
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
[{title:"HAITI",command:"/country ht"}],
[{title:"HONDURAS",command:"/country hn"}],
[{title:"HONG-KONG",command:"/country hk"}],[{title:"HUNGARY",command:"/country hu"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
