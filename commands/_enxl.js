/*CMD
  command: /enxl
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

Bot.editMessage("🔹እንፀልይ እ/ር አምላክ ሆይ ለነፍሳችንና ለስጋችን በሚሆን ጤና ዘወትር ደስ እንዲለን በተመሰገነችው ዘወትር ድንግል በሆነችው በእመቤታችን ማርያም በከበረው አማላጅነትዋ ከዚህ አለም ሀዘን እንድንድንና የዘለአለምን ደስታ እንድናገኝ ለኛ ለአገልጋዮችህ አድርግልን ብለን በጌታችን በኢየሱስ ክርስቶስ እንለምንሀለን --አሜን።",msg)&Bot.editInlineKeyboard(b,msg)
