/*CMD
  command: /jana
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
[{title:"ክፍል 1",command:"/jana1"},{title:"ክፍል 2",command:"/jana2"}],
[{title:"⏮ለመመለስ",command:"/kidus"},{title:"🔼ዋና ገጽ",command:"/mych"}]]

Bot.editMessage("ከዚህ በታች የቅድስት ጃና ታሪክ በክፍል አዘጋጅተናል ከታች ያሉትን በተኖች ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
