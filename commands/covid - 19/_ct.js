/*CMD
  command: /ct
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
[{title:"TAIWAN",command:"/country tw"}],
[{title:"TAJIKISTAN",command:"/country tj"}],
[{title:"TANZANIA",command:"/country tz"}],[{title:"THAILAND",command:"/country th"}],
[{title:"TIMOR-LESTE",command:"/country tl"}],
[{title:"TOGO",command:"/country tg"}],
[{title:"TRINIDAD & TOBAGO",command:"/country tt"}],
[{title:"TUNISIA",command:"/country tn"}],
[{title:"TURKY",command:"/country tr"}],
[{title:"TURKMENISTAN",command:"/country tm"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
