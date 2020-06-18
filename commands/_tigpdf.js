/*CMD
  command: /tigpdf
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
[{ title: "✨Page1⃣", command: "/tigpdf1" },{ title: "✨Page2⃣", command: "/tigpdf2" }],
[{ title: "✨Page3⃣", command: "/tigpdf3" },{ title: "✨Page4⃣", command: "/tigpdf4" }],
[{ title: "⬆️ወደ ዋናገፅ ይመለሱ⬆️ ", command: "/mytig" }]]

Bot.editMessage("ከታች የሚፈልጉትን የገፅ ቁጥር ይምረጡ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
