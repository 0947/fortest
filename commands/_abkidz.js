/*CMD
  command: /abkidz
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
[{title:"በፎቶ የተደገፈ ",command:"/akp"},{title:"በፅሁፍ",command:"/akw"}],
[{title:"<-- ተመለስ",command:"/mych"}]]

Bot.editMessage(user.first_name+" የቅዱሳን አባባል በፅሁፍ እና በፎቶ ቀርቧል",msg)&Bot.editInlineKeyboard(b,msg)
