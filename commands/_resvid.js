/*CMD
  command: /resvid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/4559",caption:  "ሕፃን ተወልዶልናል ዘማሪ ብሩክ ተስፋዬ  Hitsan teweldolinal new Gospel song Biruk tesfaye 2021"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/4531",caption:  "(ተመስገን) የቅዱስ ገብርኤል ካቶሊክ ቤተክርስቲያን  ወጣት ማህበር  የመዝሙር ዲቪዲ"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/4532",caption:  "ኢየሱስ ሆይ ባንተ እታመናለሁ ዘማሪት ርብቃ ንጋቱ\nEyesus Hoy Beante Etamenalew Zemarit Ribka Nigatu"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/4530",caption:  "የፍቅርህ ባለዕዳ /ቸርአምላክ በርሃ new ethiopian catholic song 2020"})


var b = [[{ text: "ተመለስ", callback_data: "/mych"}]]

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxsam/4533",caption:  "ትልቅ ነህ (2012) - ቀበና ኪዳነምህረት ወጣት ካቶሊካውያን  ማህበር | Tilik Neh (2020) - Kebena Kidane Meheret",reply_markup: { inline_keyboard: b }
})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
