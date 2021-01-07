/*CMD
  command: /f1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message = "1⃣ናሆም ማለት ምን ማለት ነው?"
var buttons = [
{title: "መደሰት", command: "/f2" },
{title: "ተስፋ ማድረግ", command: "/f2 a" },
{title: "መጽናናት", command: "/f2 an"},
{title: "⬅️",command: "/qans dl"}
];



Bot.sendInlineKeyboard(buttons, message);

let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
