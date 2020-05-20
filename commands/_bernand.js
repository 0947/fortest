/*CMD
  command: /bernand
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
[{title:"✴️ክፍል 1",command:"/bernand1"},{title:"✴️ክፍል 2",command:"/bernand2"}],
[{title:"✴️ክፍል 3",command:"/bernand3"}],
[{title:"◀️ለመመለስ",command:"/kidus"},{title:"🔼ዋና ገጽ",command:"/menu"}]
]

Bot.editMessage("ከዚህ በታች የቅዱስ በርናርዶስ ታሪክ በክፍል ተዘጋጅቶ ቀርቧል፡፡",msg)&Bot.editInlineKeyboard(b,msg)
