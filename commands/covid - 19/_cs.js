/*CMD
  command: /cs
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
[{title:"SOUDI ARABIA",command:"/country sa"}],
[{title:"SENEGAL",command:"/country sn"}],
[{title:"SERBIA",command:"/country rs"}],[{title:"SIERRALEONE",command:"/country sl"}],
[{title:"SINGAPORE",command:"/country sg"}],
[{title:"SLOVAKIA",command:"/country sk"}],
[{title:"SLOVENIA",command:"/country sl"}],
[{title:"SOLOMON ISLANDS",command:"/country sb"}],
[{title:"SOMALIA",command:"/country so"}],
[{title:"SOUTH AFRICA",command:"/country za"}],
[{title:"SOUTH SUDAN",command:"/country ss"}],
[{title:"SPAIN",command:"/country es"}],
[{title:"SRI LANKA",command:"/country lk"}],
[{title:"SUDAN",command:"/country sd"}],
[{title:"SURINAME",command:"/country sr"}],
[{title:"SWAZILAND",command:"/country sz"}],
[{title:"SWEDEN",command:"/country se"}],
[{title:"SWITZERLAND",command:"/country ch"}],
[{title:"SYRIAN AREB REPUBLIC",command:"/country sy"}],
[{title:"✅GO BACK",command:"/coval"}]]

Bot.editMessage("*Select The Country You Want*",msg)&Bot.editInlineKeyboard(b,msg)
