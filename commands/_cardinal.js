/*CMD
  command: /cardinal
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
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/6",caption:  "✍🏽ርእሰ ሊቃነ ጳጳሳት የሚመረጡት በካርዲናሎች ጉባኤ ነዉ፡፡\n\nበካቶሊክ ቤተክርስቲያን በአሁን ጊዜ ወደ 120 የሚጠጉ መራጭና ተመራጭ ካርዲናሎች አሉ። ከነዚህ በተጨማሪ ዕድሜያቸው ከ80 ዓመት በላይ የሆናቸው በጡረታ ላይ የሚገኙ ካርዲናሎች ይገኛሉ።እያንዳንዱ ካርዲናል የሚመረጠዉ በርእሰ ሊቃነ ጳጳሳት ነዉ። እነዚህ በርእሰ ሊቃነ ጳጳሳት በግል የተመረጡት ካርዲናሎች የግል አማካሪያቸው ሆነዉ ይሠራሉ፡፡ ርእሰ ሊቃነ ጳጳሳት ሲሞት ካርዲናሎች ሁሉ በሲስትን ቤተ-ጸሎት (Sistine Chapel) ይሰበሰቡና ከመካከላቸዉ አዲስ ርእሰ ሊቃነ ጳጳሳት ይመርጣሉ፡፡ አዲሱ ርእሰ ሊቃነ ጳጳሳት ከተመረጡ በኋላ ወዲያዉኑ መንበራቸዉን ይይዛሉ ፤ የሮም ጳጳስና የጴጥሮስ እንደራሴ እንደመሆናቸው መጠን የመላዋ ካቶሊክ ቤተክርስቲያን ራስ ይሆናሉ። አዲስ ርእሰ ሊቃነ ጳጳሳት ሆነዉ ሲመረጡ አዲስ ስም ያወጣሉ። ለምሳሌ ካርዲናል ቤርጎሊዮ በ2005 ዓ.ም ርእሰ ሊቃነ ጳጳሳት ሆነዉ ሲመረጡ ፍራንቸስኮስ የሚለዉን ስም መጠሪያቸዉ እንዲሆን መርጠዋል። ከሳቸዉ በፊት በዚህ ስም የሚጠሩ ርእሰ ሊቃነ ጳጳሳት አልነበሩም፡፡ አዲሱ ርእሰ ሊቃነ ጳጳሳት ተመርጠዉ መንበራቸዉን ከያዙ በኋላ ሁሉም ካርዲናሎች አንድ በአንድ እየመጡ አክብሮታቸዉንና መሉ ታዛዥነታቸዉን ይገልጹላቸዋል።"
, reply_markup: { inline_keyboard: b },on_result: "/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
