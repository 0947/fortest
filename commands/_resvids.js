/*CMD
  command: /resvids
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
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/4530",caption:  "የፍቅርህ ባለዕዳ /ቸርአምላክ በርሃ new ethiopian catholic song 2020"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/4531",caption:  "\"ተመስገን\"  የቅዱስ ገብርኤል ካቶሊክ ቤተክርስቲያን  ወጣት ማህበር  የመዝሙር ዲቪዲ"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/4532",caption:  "ኢየሱስ ሆይ ባንተ እታመናለሁ ዘማሪት ርብቃ ንጋቱ  Eyesus Hoy Beante Etamenalew Zemarit Ribka Nigatu"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/4533",caption:  "ትልቅ ነህ (2012) - ቀበና ኪዳነምህረት ወጣት ካቶሊካውያን  ማህበር | Tilik Neh (2020) - Kebena Kidane Meheret"})
Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/5864",caption:  "መልካም ጋብቻ ባንታየው ሸዋዬ #Catholic_Mezmur #Ethiopian_Mezmur  #Ethiopian_Catholic_Wedding_song  #Mezmur"})


var b = [[{ text: "ተመለስ", callback_data: "/mych"}]]

Api.sendVideo({
  chat_id: chat.chatid,
  video: "https://t.me/xexgbjnsjnjudxbjjdxSam/5511",caption:  "\"ሕፃን ተወልዶልናል\" ዘማሪ ብሩክ ተስፋዬ  Hitsan teweldolinal new Gospel song Biruk tesfaye 2021",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
