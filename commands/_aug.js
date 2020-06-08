/*CMD
  command: /aug
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
[{title:"1",command:"/aug1"},{title:"2",command:"/aug2"},{title:"3",command:"/aug3"}],
[{title:"4",command:"/aug4"},{title:"5",command:"/aug5"},{title:"6",command:"/aug6"}],
[{title:"7",command:"/aug7"},{title:"8",command:"/aug8"},{title:"9",command:"/aug2"}],
[{title:"⏮ለመመለስ",command:"/kidus"},{title:"🔼ዋና ገጽ",command:"/menu"}]]

Bot.editMessage("ከዚህ በታች የቅዱስ አውጎስጢኖስ የህይወት ታሪክ በክፍል አዘጋጅተናል የሚፈልጉትን ክፍል ቁጥር ይምረጡ",msg)&Bot.editInlineKeyboard(b,msg)
