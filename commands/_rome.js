/*CMD
  command: /rome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg=User.getProperty("msgid")

var b = [[{ text: "⬆️ዋና ገፅ", callback_data: "/menu"}]]

 Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/9",caption:  "✍🏽ለምን ቤተክርስቲያናችንን ሮማዊት እንላለን⁉️\n\nቤተክርስቲያናችን ሮማዊት ነች፤ ምክንያቱም የቤተክርስቲያናችን የመጀመርያ እረኛ ቅዱስ ጴጥሮስ በሮማ ስለኖረ፤ ስለሞተና እዛዉም ስለተቀበረ ነው። ቅዱስ ጴጥሮስ የመጀመርያዉ ርእሰ ሊቃነ ጳጳሳት ነዉ። አሁንም ታዲያ የሮሙ ርእሰ ሊቃነ ጳጳሳት ልክ እንደ ቅዱስ ጴጥሮስ የመላዋ ካቶሊክ ቤተክርስቲያን የበላይ እረኛ ነዉ። እሱ የክርስቶስ ተከታዮችን በአንድ ላይ የሚጠብቅና የመላዋ ቤተክርስቲያን አንድነት ምሳሌ ነዉ። በሮም ያለዉ ርእሰ ሊቃነ ጳጳሳችን ክርስቶስ ቤተክርስቲያንን የመሠረተበት የጴጥሮስ ዓለት ነዉ። ከዚህ እረኛዋ ጋር ሆና በምታደርገዉ ትግል ቤተክርስቲያን ምን ጊዜም የዓለም ኃይላት ሊያሽንፉዋት አይችሉም፣ ይህ ደግሞ ክርስቶስ ራሱ የገባላት ቃል ነዉ፡፡ (ማቴ. 16፡18) ሌሎች ደግሞ የምሥራቅ ሥርዓተ አምልኮ የሚከተሉ ካቶሊኮች አሉ ፤ በተለይም ግሪክና ራሽያ በመሳሰሉ አገሮች ዉስጥ የሚገኙ፤ ከነዚህ አንዳንዶቹ ከሮማው ርእሰ ሊቃነ ጳጳሳት ጋር ኅብረት ያላቸዉ ሲሆኑ ሌሎች ደግሞ የሌላቸዉ ናቸዉ።", reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
