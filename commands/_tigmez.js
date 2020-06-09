/*CMD
  command: /tigmez
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
[{ title: "🥁የ Audio🎧", command: "/tigmez1" },{ title: "📂የመዝሙር ግጥም📁", command: "/tigmez2" }],
[{title:"☑️ወደ ዋና ገፅ☑️",command 
:"/menu"}]]

Bot.editMessage(user.first_name+" ይህ የመዝሙር ገጽ ነው መዝሙሮቹን በሚፈልጉት መልክ አሰናድተናል ይጠቀሙባቸው",msg)&Bot.editInlineKeyboard(b,msg)
