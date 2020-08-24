/*CMD
  command: /sit
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
[{ title: "Volume 5", command: "/sit5" },{ title: "Volume 6", command: "/sit6" }],
[{title:"Volume 7",command:"/sit7"}],
[{title:"<--",command:"/tigmez1"}]]

Bot.editMessage("ከዚህ በታች የሲታውያን መዝሙሮች በVolume ተከፋፍለው ቀርበዋል ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
