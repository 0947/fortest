/*CMD
  command: /fras
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
[{ title: "Volume 1", command: "/fras1" },{ title: "Volume 2", command: "/fras2" }],
[{title:"Volume 3",command 
:"/fras3"}],
[{title:"<--",command:"/tigmez1"}]]

Bot.editMessage("ከዚህ በታች የአስመራ ቅ.ፍራንቺስኮስ መዝሙሮች ሲሆኑ በVolume ተከፋፍለው ቀርበዋል",msg)&Bot.editInlineKeyboard(b,msg)
