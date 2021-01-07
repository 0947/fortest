/*CMD
  command: /s1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message = "1⃣ሁለተኛው የጴጥሮስ ተከታይ ማን ነው?"
var buttons = [
{title: "አናክለቱስ", command: "/s2 an" },
{title: "ሊኖስ", command: "/s2 a" },
{title: "ቄለመንጦስ", command: "/s2 n"},
{title: "⬅️",command: "/qans dl"}
];



Bot.sendInlineKeyboard(buttons, message);

let msg=User.getProperty("msgid")

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
