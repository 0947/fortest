/*CMD
  command: /elll
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

Bot.editMessage("❤️እልል እልል❤️\n\nእልል እልል እልል /3/\nምስጋና ለማርያም ይገባል \n\n1⃣ምድር ሰላም ሆነች እጅግ አማረባት \nበከብቶች በረት ውስጥ ጌታ ወረደላት \nደስ ይበልሽ ማርያም ምስጋና ይድረስሽ  \nድንግላዊ ሆነሽ አምላክን ወለድሽ\n\n2⃣ ትንቢት ተፈፀመ የነቢያቶች \nበዳዊት ከተማ ጌታን ወለደች \nከሴቶች የተለየሽ ማርያም ድንግሊቱ \nያንቺ ስም ሲጠራ ይወርዳል ምህረቱ \n\n3⃣ስምሽ የሚጣፍጥ ከማር ከወተት \nማርያም እመቤት ጌታን  ወላዲት \nተንበርክኬ ልደር ልፀልይ ለክብርሽ \nበአፌም ልዘምር ምስጋና ይድረስሽ",msg)&Bot.editInlineKeyboard(b,msg)
