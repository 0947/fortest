/*CMD
  command: /tr24
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

Bot.editMessage("❤️በፊትህ ቆሜያለሁ❤️\n\nበፊትህ ቆሜያለሁ /2/ \nእግዚአብሔር ምህረትን እሻለሁ (2)\n \nከሀጢያቴም አንጻኝ ተፀፅቻለሁ \nበፍቅርህ ግዛኝ ተማርኬለሁ /2/ \nይደክፈኝ ያንተው ምህረት \nይበርታብኝ በእኔ ላይ ፍቅርህ /2/\n \nየማልገባ ጌታ ሆኛለሁ \nበሀጢያቴ ብዛት ከአንተ እርቄለሁ /2/ \nአሁን መልሰህ ማረኝ እልሀለሁ \nበደምህ እጠበኝ በፊትህ አለሁ /2/\n \nበፊት ቆሜአለሁ (2)",msg)&Bot.editInlineKeyboard(b,msg)
