/*CMD
  command: /t1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message = "1⃣ዜና መዋዕል ምን ማለት ነው"
var buttons = [
{title: "ዕለታት", command: "/t2" },
{title: "የእለታት ተርታ", command: "/t2 a" },
{title: "የእለታት ዜና", command: "/t2 an"},
{title: "⬅️",command: "/qans dl"}
];



Bot.sendInlineKeyboard(buttons, message);

let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
