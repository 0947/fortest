/*CMD
  command: /laly
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

Bot.editMessage("❤️ላላይ ሌላ❤️\n\n🎤ላላይ ሌላ ላልፀፀት\n    ተደግፌአለሁ በአንተ ረፍት\n    የኔ ጌታ እየሱስ\n\n1⃣ምንም አልጎደለኝ መርምሬ\n     አንተን ከመረጥኩህ ጀምሬ\n     አተረፍኩ እንጂ በህይወቴ\n     ከቶ አይፀፅተኝም ድርጊቴ\n\n2⃣ባህሩን ስረግጠው አምኜ\n    ላላይ ነው ከግራ ከቀኜ\n    ከፊቴ ወጥተሀል ልትሰራ\n    ምርኩዜ ብርቱ ነህ ጠንካራ\n\n3⃣ግድ የለም ሞኝ ተብያለሁ\n    እኔ ግን ይዤህ እሞታለሁ\n    በምድር አይቀርም ህይወቴ\n    የዘላለም ነው ሽልማቴ\n\n4⃣ስኬት ከሚመስል እደላ\n    መንፈስን ከሚያርቅ ድለላ\n    ተቃውሜ ወጣሁ በስምህ\n    የሚቆጨኝ የለም ካለም",msg)&Bot.editInlineKeyboard(b,msg)
