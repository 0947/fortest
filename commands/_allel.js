/*CMD
  command: /allel
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

Bot.editMessage("❤️አልለወጥ ያለኝ❤️\n\n🎤አልለወጥ ያለኝ ህይወቴ\nመነካት ያለበት ዘመኔ \nላንተ የማይመች ጓዳዬ \nመከፈል ያለበት ዕዳዬ \n    🎵ዕልፍ ቢሆን መጣሁ ወዳንተ \n     ሰላም ዓለህና ጌታዬ /2\n\n🔺በመብራትህ ብርሃን ብመራም\nስፈተን ስምህን ብጠራም\nእረኛዬ የሱስ ከፊቴ\nወደዋለሁ ይህን ልጅነቴ \n\n🔻ስደክም የማትደክም ማትርቀኝ እኔ ስርቅህ\nብቻህን ወዳጅ ነህና ሌላው እንኳን በቀረብኝ \n\n🔺በልጦብኝ ካፈሰስከው ደም \n     የሚያስረኝ ዙሪያዬ የለም \n     ሁንልኝ የልቤ ንጉስ \n     ለወደድከኝ ልመላለስ \n\n🔻ለድካሜ የማትጥለኝ \nመንፈስህ መቼ ተለየኝ\nእወድህ ዘንድ እንደገና\nበፀጋህ ቀናለሁና \n\n〰አልለወጥ ያለኝ ……. \n〰ስደክም የማትደክም…",msg)&Bot.editInlineKeyboard(b,msg)
