/*CMD
  command: /tr20
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

Bot.editMessage("❤️ኧረ እንዴት❤️\n\nኧረ  እንዴት እረሳለሁ /4/ \nየረዳኸኚ የከፈልክልኚ \nእኔ እንዴት እረሳለሁ ባንተ የሆነልኝ /2/\n \nተንከባክበኸኝ እንደ እናት እንደ አባት \nአሳድገኸኛል ሆነኸኛል ሞገስ (2)\n \nክብሬ አንተው ነህ \nማዕረጌ ጌታ \nሁሉን ያለፍኩብህ ያንተ እንዴት ልርሳ\n \nኧረ እንዴት ......\n \nቃላቴ አይገልፀውም \nአቤት ያንተን ስራ \nካእምሮዬ በላይ ነው ባወራው /2/ (2)\n \nእኔ ምስክር ነኝ \nበህይወት ዘመኔ ከቶ አልረሳውም ውለታህን እኔ /2/\n \nክብሬ /2/ እግዚአብሔር ነው ሞገሴ (2) \nየደስታዬ ምንጭ አንተ ነህ ጌታ \nየኔ ወግ ማረጌ አንተ ነህ ጌታ \nየሰላሜ ምንጭ አንተ ነህ ጌታ \nየበረከቴ ምንጭ አንተ ነህ ጌታ(2)",msg)&Bot.editInlineKeyboard(b,msg)
