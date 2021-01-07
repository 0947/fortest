/*CMD
  command: /q1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message = "1⃣መጽሐፍ ቅዱስ በግሪክ ቋንቋ ሲፃፍ ትክክለኛ የፊደል አጣጣል የትኛው ነው?"
var buttons = [
{title: "biblos", command: "/q2" },
{title: "byblos", command: "/q2 an" },
{title: "byblus", command: "/q2 g"},
{title: "⬅️",command: "/qans dl"}
];



Bot.sendInlineKeyboard(buttons, message);

let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
