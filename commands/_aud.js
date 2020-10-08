/*CMD
  command: /aud
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/39",caption:  "ቅዱሳን እነማን ናቸው?\n\nኢየሱስ አማላጅ ነው ወይስ ምልጃ ተቀባይ\nበክቡር አባ ምስራቅ ጥዩ (ዶ/ር)"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/3687",caption:  "#አንተን_ወልዳ_ያጠባች_እናት_እንዴት_የተባረከች_ነች (ሉቃ.11፥27)\nበክቡር አባ ምስራቅ ጥዩ(ዶ/ር)"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/3688",caption:  "#ማርያም_ሆይ_በእግዚአብሔርም_ፊት_ሞገስ_አግኝተሻልና_አትፍሪ  (ሉቃ. 1፥30)\nበክቡር አባ ምስራቅ ጥዩ(ዶ/ር)"})
Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/3689",caption:  "#አንቺ_ሴት_ከኔ_ምን_አለሽ? (ዮሐ. 2፥3-5)\n\n   (በቃና ዘገሊላ በተከናወነዉ የሠርግ ድግስና በዚያ ቦታ ላይ ስለተገኙት ስለኢየሱስ እናት ማርያምና ደቀመዛሙርት!!)\n  #እዉነት_ትጠራናለች!\n\nበክቡር አባ ምስራቅ ጥዩ(ዶ/ር)"})

var b = [[{ text: "ተመለስ", callback_data: "/mych"}]]

Api.sendDocument({
  chat_id: chat.chatid,
  document: "https://t.me/xexgbjnsjnjudxbjjdxSam/40",caption:  "ማርያም ማን ናት? በክቡር አባ ምስራቅ ጥዩ (ዶ/ር)",reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
