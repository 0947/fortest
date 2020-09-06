/*CMD
  command: /asm
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
[{ title: "Volume 1", command: "/asm1" },{ title: "Volume 2", command: "/asm2" }],
[{title:"Volume 3",command 
:"/asm3"}],
[{title:"<--",command:"/tigmez1"}]]

Bot.editMessage("ከዚህ በታች የአስመራ ቅዱስ አንጦኒዮስ መዝሙሮች ሲሆኑ በVolume ተከፋፍለው ቀርበዋል",msg)&Bot.editInlineKeyboard(b,msg)
