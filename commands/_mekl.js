/*CMD
  command: /mekl
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
[{ title: "Volume 2", command: "/mekl2" },{ title: "Volume 3", command: "/mekl3" }],
[{title:"<--",command:"/tigmez1"}]]

Bot.editMessage("ከዚህ በታች የመቀሌ መዝሙሮች በVolume ተከፋፍለው ቀርበዋል",msg)&Bot.editInlineKeyboard(b,msg)
