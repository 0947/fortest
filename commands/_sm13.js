/*CMD
  command: /sm13
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

Bot.editMessage("❤️ሁሉም ለመልካም❤️\n\nሁሉም ለመልካም ነው ሁሉ ለበጎ ነው /2/\nአንተ አትሳሳትም እኔ አምንሀለሁ\nአንተ ትክክል ነህ እኔ አውቅሀለሁ\nአሁንም አንተው ነህ የኔ ተስፋ/4/\nስጋዬ ቢቆስል መንፈሴ ቢጎዳ\nአለኝ ብዬ ያልኩት ሳልስበው ባጣ\nለምን አልልህም እግዚአብሔር ጻድቅ ነህ\nበምትሰራው ስራ ሁሌም ትክክል ነህ /2/\nአሁንም አንተው ነህ …\n\nሁሉን ታደርግ ዘንድ ቻይ ነህ አውቅሀለሁ\nአንተኑ ታምኜ እጠብቅሀለሁ\nአንተ ያሰብክልኝ መልካም ነው ይሻላል\nአይወዳደርም ከሁሉም ይበልጣል/2/\nሁሉ ለመልካም ነው--\n\nአትቸኩልም ጌታ ደግሞም አትዘገይም\nቀስ ብለህ ብትሄድ ማንም አይቀድምህም\nነገርን በጊዜው ውብም ታደርጋለህ \nታሪክን ቀይረህ ታምር ትሰራለህ",msg)&Bot.editInlineKeyboard(b,msg)
