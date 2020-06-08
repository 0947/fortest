/*CMD
  command: /onewe
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
[{title:"ተመለስ",command:"/mztxt"}]
]

Bot.editMessage("❤️አንድ አድርጎናል ❤️\n\n#አንድ አድርጎናል ኢየሱስ በደሙ\nከጠላት እስር ፈቶን በሀይሉ\nአያይዞናል ይታይ ፍቅራችን\nአንገፋፋም እርስ በርሳችን [2 X]\n\n1⃣አንድ አድርጎናል የለም ልዩነት [2X]\nእየሱስ ያኔ የተሰዋለት የሞተልንለት\nከተራራቅን እንጠጋጋ [2X]\nያንድአባት ልጆች ነንእኮ አንዘናጋ [2X]\n\n2⃣በመሽቀዳደም እንከባበር እንፈቃቀር\nማዶ ለማዶ መሆኑን ትተን [2X]\nበፍቅሩ እንኑር አንድ ሆነን ፀንተን [2X]\nሳንገፋፋ ሳንበታተን  [2X]\n\n3⃣እርሱን ጠጥተን እሱንም በልተናል [2X]\nበጌታ ኢየሱስ አንድወገን ሆነናል ተያይዘናል\nዛሬም አንድ እንሁን እንደ ትላንቱ [2X]\nፍቅራችን ይታይ በዉጭ በቤቱ [2X]",msg)&Bot.editInlineKeyboard(b,msg)
