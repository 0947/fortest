/*CMD
  command: /emmn
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

Bot.editMessage("❤️አማኑኤል❤️\n\nገዝፎ ሲመስለው የጠላት ድንበር የማይገፋ ቀንበር \nከፊት መሪያችን መች የዋዛ /እ/ር/ነው\nአያሳፍርም አምነነው \nአማኑኤል ከእኛ ጋራ ነው\nእግዚአብሔር ከእኛ ጋራ ነው \nጌታ ኢየሱስ ከእኛ ጋራ ነው \nመንፈስ ቅዱስ ከእኛ ጋራ ነው \n\nባንድነት ሆነን እናመስግነው \nህይወት የበዛልን በእርሱ ነው \nያትረፈረፈልን እርሱ ነው\nብርሃን የወጣልን በአርሱ ነው\nእናክብረው እናመስግነው \n\nበሞገስ ወጥተን እንገባለን\nእግዚአብሔርን ይዘን \nምድር ሲሸበር እኛን ትቶናል \nየሰላም አምላክ ይዞናል /ሆኖናል \n\nአማኑኤል ........\nባንድነት ሆነን ...\n\nመካከለኛ አስታራቂ ነው\nኢየሱስ ሆኖ ያለው \nእንመካለን አለ ከእኛ ጋ\nለክፉ ያሰበን ይስጋ\n\nአማኑኤል ......\nባንድነት ሆነን .....",msg)&Bot.editInlineKeyboard(b,msg)
