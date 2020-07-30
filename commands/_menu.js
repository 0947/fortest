/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{ title: "❗️ይህንን ይጫኑ", command: "/mych"},{title:"❗️Home Page",command:"/mych"}]]

Bot.editMessage("*ውድ  "+ user.first_name+" 
 💯ወደ ዋና ገጽ ለመሄድ ከታች ያለውን ይጫኑት✅*",msg)&Bot.editInlineKeyboard(b,msg)
