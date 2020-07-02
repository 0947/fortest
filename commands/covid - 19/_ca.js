/*CMD
  command: /ca
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
[{title:"AFGHANISTAN",command:"/country af"}],
[{title:"ALBANIA",command:"/country al"}],
[{title:"ALGERIA",command:"/country dz"}],[{title:"ANGOLA",command:"/country ao"}],
[{title:"ARGENTINA",command:"/country ar"}],
[{title:"ARMENIA",command:"/country am"}],
[{title:"AUSTRALIA",command:"/country au"}],
[{title:"AUSTRIA",command:"/country ag"}],
[{title:"AZERBAIJAN",command:"/country az"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("Select The Country You Want",msg)&Bot.editInlineKeyboard(b,msg)
