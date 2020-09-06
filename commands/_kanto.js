/*CMD
  command: /kanto
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
[{ title: "Volume 4", command: "/kanto4" },{ title: "Volume 5", command: "/kanto5" }],
[{title:"<--",command:"/tigmez1"}]]

Bot.editMessage("ከዚህ በማስከተል የቅ.ኣንጦኒዮስ ከረን ሲሆኑ፡፡ በvolume ተከፋፍለው ቀርበዋል",msg)&Bot.editInlineKeyboard(b,msg)
