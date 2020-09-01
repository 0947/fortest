/*CMD
  command: /don
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
[{title:"1",command:"/don1"},{title:"2",command:"/don2"},{title:"3",command:"/don3"},{title:"4",command:"/don4"}],
[{title:"<-- ተመለስ",command:"/tigaud"}]]

Bot.editMessage("*ከዚህ በታች የቅዱስ ዶንቦስኮ ታሪክ በክፍል ተቀምጧል የሚፈልጉትን ክፍል ይጫኑ*",msg)&Bot.editInlineKeyboard(b,msg)
