/*CMD
  command: /wherei
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
[{title:"ተመለስ",command:"/mztxt2"}]
]

Bot.editMessage("❤️ካንተ ወዴት እሄዳለው❤️\n\nካንተ ወዴት እሄዳለው አንተ የህይወት ቃል አለህ\nአንተን ትቼስ ምን አተርፋለው አንተ የህይወት ቃል አለህ\nለህይወቴ የምታስፈልጋት አንተ ነህ\nለነፍሴ የምትረባት አንተ ብቻ ነህ\n\nአንተ መልካም እረኛዬ ምንስ አጥቼ አውቃለው\nበለመለመ መስክ አድራለው ከረፍትም ውሀ እጠጣለው\nለህይወቴ የምታስፈልጋት አንተ ነህ\nለነፍሴ የምትረባት አንተ ብቻ ነህ\n\nበሞት ጥላ መሀል ብሄድ እንኳን ክፉውን አልፈራም\nአንተ ከእኔ እስካለህ ድረስ በሁኔታ አልታወክም\nካንተ ጋር መንገዴ ሁሉ ቀለለ\nያስፈራኝ ያስጨነቀኝ ቀን አለቀ",msg)&Bot.editInlineKeyboard(b,msg)
