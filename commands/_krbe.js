/*CMD
  command: /krbe
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

Bot.editMessage("❤️ለኔ ቅርቤ ነው❤️\n\n🎤ከኔ በላይ ለኔ\n     ከእናት በላይ ለኔ\n     ከአባት በላይ ለኔ\n     ከሁሉ በላይ ለኔ/n\n    🎧እርሱ ለኔ ቅርቤ ነው                                                                       \n        እረዳት አባቴ የምለው\n1⃣ማነው እንባዬን ከአይኔ ያበሰው \nየኔን ፍጻሜ የቀየረው\nውለታ አለብኝ ለዚህ ጌታ\nመክፈል ማልችለው እንዲሁ በዋዛ               \n    〰እርሱ………………..\n\n2⃣ከቶ ማልረሳው በዚህ አለም\nበውስጤ ሰርፆ በኔ የኖረው \nለካስ እንዲህ ነው አባት ማለት \nኸረ ይለያል እየሱስ በእውነት  \n          〰እርሱ……………….\n\n3⃣ቅርቤ ነው ጌታ ለዘለአለም\nደጁን ጠንቼ ከቶ አላፈርኩም\nሰላም አገኘሁ እርሱን ስነካ\n ፀጋው በዛልኝ መንፈሴም እረካ\nእርሱ…………..",msg)&Bot.editInlineKeyboard(b,msg)
