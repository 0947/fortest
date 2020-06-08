/*CMD
  command: /tetmk
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

Bot.editMessage("❤️ ተጠመቀልን ❤️\n\n1⃣በበረሀ የሚጮህ ድምጽ \nራሱን አይቶ ሰው እንዲያንጽ \nጎባጣው ይቅና ጎድጓዳው ይደልደል #2\nዋግ የመታውን እንደ አዲስ ያለምልም #2\n\n  *ተጠመቀልን ጌታ ተጠመቀልን #2\nተጠመቀልን እየሱስ #2*\n\n2⃣አርያ ሊሆን ራሱን አዋረደ \n   ንጉስ በባሪያ እጅ ተጠመቀ \nየጫማው ማሰሪያ ሊነካ ያልተገባ #2\nዮሐንስ ከበረ ትንሽ ሆኖ ገባ #2\n\n      ተጠመቀልን ....#2\n\n3⃣በበረሀ የሚጮህ ድምጽ \nራሱን አይቶ ሰው እንዲያንጽ \nገለባን ከፍሬ በመንሹ ይለያል #2 \nአውድማውን ያጠራል ገለባውን ያቃጥላል #2\n\n4⃣በአንድ አምላክ ሶስት አካላት \n  ህላዌውን ላለም ሊያስተምራት\n ማህያዊውን ፍቅሩን ሰጠን #2\nበዮርዳኖስ ወንዝ ተጠመቀልን #2",msg)&Bot.editInlineKeyboard(b,msg)
