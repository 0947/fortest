/*CMD
  command: /tigaud
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
[{ title: "🎤ስብከት🎤", command: "/tigsib" },{ title: "➕መቁፀሪያ➕", command: "/tigmek" }],
[{ title: "🗣ስብከት በአባ ዮናስ🗣", command: "/tigsib2" },{ title: "👁ግዕዝ ዜማ👁", command: "/geez" }],
[{title:"〽️የቅዱስ ዶንቦስኮ ታሪክ〽️",command:"/don"}],
[{title:"<--",command:"/mytig"}]]



Bot.editMessage("ከዚህ በታች የድምፅ/audio ስራዎች ቀርበዋል፡፡ የፈለጉትን መርጠው ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
