/*CMD
  command: /girm
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
[{ title: "Volume 1", command: "/girm1" },{ title: "Volume 2", command: "/girm2" }],
[{title:"<--",command:"/tigmez1"}]]

Bot.editMessage("ከዚህ በታች የአባ ግርማይ መዝሙሮች በVolume ተከፋፍለው ቀርበዋል",msg)&Bot.editInlineKeyboard(b,msg)
