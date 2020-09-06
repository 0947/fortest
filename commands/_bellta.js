/*CMD
  command: /bellta
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
[{ title: "PAGE 1", command: "/bellta1" },{ title: "PAGE 2", command: "/bellta2" }],
[{title:"PAGE 3",command 
:"/bellta3"}],
[{title:"<--",command:"/tigmez1"}]]

Bot.editMessage("የሚፈልጉትን መዝሙር በገፅ ከፋፍለን አቅርበናል የፈለጉትን ገፅ ከታች ይምረጡ",msg)&Bot.editInlineKeyboard(b,msg)
