/*CMD
  command: /split
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "ተመለስ", callback_data: "/first"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/2047",caption:  "የተለያዩ አብያተ ክርስቲያናት ከካቶሊክ ቤ/ክ የተለዩት መቼነው??\n\n#የምስራቅ ኦርቶዶክስ አብያተ ክርስቲያን።\n👉በ 451\n\n#የግሪክ ኦርቶዶክስ ቤ/ክ\n👉በ 1054\n\n#ሉተራን\n👉በ 1521\n\n#እንግሊካን\n👉በ 1534\n\n#ካልቭንስት\n👉በ 1550\n\n#ባፕቲስት\n👉በ 1609\n\n#ዋስሊያንስ\n\n🖐የእንግሊካን የተነጠለ ቡድን ነው።\n👉በ 1791\n\nአሁን ያለንበት ቤ/ክ {ካቶሊክ} የጴጥሮስ መንበር ላይ የተመሰረተች ናት።\n\n\n✝🛐 በአንዲት በቅድስት በሀዋርያዊት እና። በካቶሊካዊት ቤ/ክ አምናለሁ።", reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
