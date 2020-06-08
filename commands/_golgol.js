/*CMD
  command: /golgol
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

Bot.editMessage("❤️ጎልጎልታ ወጣ❤️\n\nጎልጎልታ ወጣ የመርገም እንጨት ተሸክሞ \nደፋ ቀና እያለ በመገረፍ ብዛት ደክሞ \nእኛንና እናንተን በፍቅሩ ሊዋጀን \nበመስቀል ላይ ሆኖ ኢየሱስ ነው ያዳነን \n\n 1⃣ እኛን ለማዳን ነው እንዲህ መዋረዱ \nበበትር ሲመታ በየመንገዱ\n ሐጥያት ሳይኖርበት ሐጥያተኛ ሆነ ስለእኛ ብሎ\nእራሱን ኮነነ \n2⃣እኛን ፀጋ ሊያለብስ ልብሱን ተገፈፈ \nበግንድ ላይ ታስሮ እጅግ ተገረፈ\nበጥፊ መቱት ምራቅም ተፉበት\nስቀለው እያሉ ያለ ምክንያት ጠሉት \n\n3⃣  የፈጣሪ እጆች በፍጡር ደቀቁ \nጌታቸው መሆኑን እነርሱ አላወቁ \nጨክነው ሰቀሉት በሚስማር ቸንክረው \nእርሱ ግን ፀለየ አባት ሆይ ማራቸው\n\n4⃣ እጅግ ተሰቃየ ለብዙ ሰዓታት \n  ኮምጣጤ ቀመሠ ሲቃጠል  በጥማት \nኤሎሄ አሎሄ እያለ ቃተተ \nእንዲህ ተሰቃይቶ የማይሞት ሰው ሞተ",msg)&Bot.editInlineKeyboard(b,msg)
