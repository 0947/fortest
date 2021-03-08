/*CMD
  command: /sm9
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

Bot.editMessage("❤️ፀጋ የሞላሽ❤️\n\nአንቺ ፊት ስንበረከክ\nራሴን ለፀሎት ሳቀና\nቀኑን ውሰጅ ያንቺ አድርጊው \nበልጅሽ ደስታ ሙይኝ\n\nፀጋ የሞላሽ ማርያም\nከሴቶች የተለየሽ\nየሆድሽም ፍሬ እየሱስ \nየተባረከ ነው\n\nያለኝን ሁሉ ሠጠሁሽ \nእቅድና ውጥኖቼን\nየክርስቶስ እናት የኔም እናት\nወደ ጌታ አቅርቢልኝ\n\nአንቺ ፊት ስንበረከክ \nብርሀናዊ ፊትሽን ሳይ\nጭንቀቴ ሁሉ ተወገደ\n ሰላም አለኝ ባንቺ ጥላ\n\nፅዮን ሆይ ደስ ይበልሽ \nድለኛው ጌታ ካንቺ ዘንድ ነው\nካንቺ ጋራ እንድደሠት\n አስተምሪኝ ካንቺ እምነት",msg)&Bot.editInlineKeyboard(b,msg)
