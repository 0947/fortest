/*CMD
  command: /tigpdf4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/86"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/87"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/88"})
var b =[
[{ title: "✨Page1⃣", command: "/tigpdf1" },{ title: "✨Page2⃣", command: "/tigpdf2" }],
[{ title: "✨Page3⃣", command: "/tigpdf3" },{ title: "✨Page4⃣", command: "/tigpdf4" }],
[{ title: "⬆️ወደ ዋናገፅ ይመለሱ⬆️ ", command: "/menu" }]]
Bot.sendInlineKeyboard(b,"👇🏽ከታች የሚፈልጉትን ገፅ ቁጥር ይምረጡ")
