/*CMD
  command: /xehow
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

Bot.editMessage("🔹ሁሉን በሚችል ሰማይንና ምድርን በፈጠረ በእግዚአብሄር አብ አምናለሁ።\n✨የአብ አንድ ልጅ በሆነው በጌታችን በኢየሱስ ክርስቶስ አምናለሁ\n✨እሱ በመንፈስ ቅዱስ ተፀነሰ ከድንግል ማርያም ተወለደ\n✨በጴንጤናዊው ጲላጦስ ዘመን ተሰቃየ ተሰቀለ ሞተ ተቀበረ\n✨ወደ ሲኦል ወረደ በሶስተኛ ቀን ከሙታን ተለይቶ ተነሳ\n✨ወደ ሰማይ ወጣ ሁሉን በሚችል በአባቱ ቀኝ ተቀመጠ\n✨ያሉትንና የሞቱትን ሊፈርድ ዳግመኛ ይመጣል\n✨በመንፈስ ቅዱስ አምናለሁ የሁሉም በሆነችው በቅድስት ቤተክርስቲያን በቅዱሳን አንድነት አምናለሁ።\n✨በሀጥያት ስርየት በሙታን ትንሳኤ: በዘለአለም ህይወት አምናለሁ አሜን።",msg)&Bot.editInlineKeyboard(b,msg)
