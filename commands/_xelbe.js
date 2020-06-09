/*CMD
  command: /xelbe
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
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("❤️ ፀሎት ወደ ኢየሱስ ❤️\n\nየኔ ኢየሱስ ሆይ ማረኝ -- ስለኔ ብለህ የተሰቀልህ ኢየሱስ ሆይ እኔን ሀጥያተኛውን ማረኝ -- ደጉ ኢየሱስ ሆይ መድሀኒቴ እንጂ ፈራጄ አትሁን -- ጌታዬ ሆይ በመስቀል ላይ ስለሞትክልኝ አመሰግንሀለሁ -- ኢየሱስ አምላኬ ሆይ ከሁሉ በላይ አንተን እወዳለሁ -- ደጉ ኢየሱስ ሆይ ሀይማኖት ተስፋ ፍቅር በእኔ ላይ እንዲበዛ አድርግልኝ -- በኃጢአቱ ያዘነና በትህትና የተሞላ ልብ ስጠኝ -- የኢየሱስ ቅዱስ ስም ለዘለአለም የተመሰገነ ይሁን።",msg)&Bot.editInlineKeyboard(b,msg)
