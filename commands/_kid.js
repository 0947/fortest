/*CMD
  command: /kid
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
  photo: "https://t.me/xexgbjnsjnjudxbjjdxSam/5",caption:  "✍🏽 ለምን ቤተክርስቲያናችንን “ቅድስት” እንላታለን⁉️\n\nቤተክርስቲያን የእግዚአብሔር ሕዝቦች ስብስብ ማለት ነዉ ፤ የጌታ የሆኑ ሁሉ ማለት ነዉ። ቤተክርስቲያንን “ቅድስት” የሚያደርጋት ጌታ ራሱ ነዉ። እሱ ሙሽራው ሙሽሪትን እንደሚወድ ቤተክርስቲያንን ይወዳታልና፡፡ እኛ ካቶሊኮች ኃጢያተኞች መሆናችንን እንናዘዛለን፤ ነገር ግን የክርስቶስ ፍቅር እንደሚቀድሰንና የቅድስት ካቶሊካዊት ቤተክርስቲያን አካል እንደሚያደርገን እንናገራለን/እናዉጃለን፡፡\nክርስቶስ ስለቤተክርስቲያኑ ሞቷል፤እኛን ኃጢያተኞቹን ይቅር ብሎን እንደገና ይቀድሰናል። ለዘለዓለም ከኛ ጋር ሆኖ ሊቀድሰንና ሊያጠነክረን ስለፈለገ ቅዱስ ቃሉንና ሰባቱን ምሥጢራት ሰጥቶናል። ራሱ ክርስቶስ በመካከላችን ሆኖ ከኛ ምስኪን ባህሪያችንና አሳፋሪ ዉድቀታችን ባሻገር ሮማዊት ካቶሊካዊት ሐዋርያዊትና ቅድስት ቤተክርስቲያናችንን ይቀድሳታል፡፡ ይህ ሁሌም በደስታና በኩራት የምንናገረውና የምናበስረው ካቶሊካዊ እምነታችን ነው፡፡"
, reply_markup: { inline_keyboard: b } })

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
