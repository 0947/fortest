/*CMD
  command: /thwz
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
[{title:"ተመለስ",command:"/thtxt"}]
]

Bot.editMessage("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺\nካቶሊካዊት ቤ/ክ በታላቁ የፍቅር አለም ብርሀን እየተመራች ስለ ፆታዊ ባህርያት የሚከተሉት መመሪያዎች ትሰጠናለች። 📌ወንድና ሴት ከጋብቻ በፊት:-ወንድና ሴት ከማንኛውም አይነት ፆታዊ ግንኙነት መታቀብ አለባቸው። ራስን የመግዛት ኃይል እያዳበሩ ራስ ወዳድ ባልሆነው ፍቅር ራሳቸውን መግራት አለባቸው። በዚህ አይነት ለራሳቸው ጠንካራና ደስተኛ የሆነ የጋብቻ ሕይወት ለመኖር ፅኑ መሠረት ይዘጋጃሉ። ፆታዊ ግንኙነት መደረግ ያለበት በጋብቻ ውስጥ ብቻ ነው። (ካ.ቤ.ት.ክ. 2360-2363)\n🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀\n🍇🍇🍇🍇🍇🍇🍇🍇🍇🍇🍇🍇",msg)&Bot.editInlineKeyboard(b,msg)
