/*CMD
  command: /bzlfk
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

Bot.editMessage("❤️በዘላለም ፍቅርህ❤️\n\nበዘላለም ፍቅርህ ያፈቀርከኝ\nበመንገዴም ሁሉ ከፊት የምትመራኝ\nጌታዬ እየሱስ ከፈተና አውጣኝ\n\n1⃣እንደማትለየኝ ልቤ ቢያውቀውም \n     እንደምትረዳኝ ብገነዘበውም\n     የእምነቴ ማነስ ሲያስቸግረኝ\n     አቤቱ ጌታ ሆይ ዝም አትበለኝ\n\n2⃣ደካማ ነኝና ሸክም ሲከብደኝ\n ፍርሀትና ጭንቀት ሲያርበደብደኝ\n ሌላ ስለሌለኝ እኔን ሚያግዘኝ\n አቤቱ ጌታ ሆይ ዝም አትበለኝ\n\n    3⃣ከሁሉም በላይ ነህ ለኔ ጌታ\n     ማንንም አላቆም በአንተ ቦታ\n     አንተን ክጄ የት እደርሳለሁ\n     ከልፋት በስተቀር ምን አተርፋለሁ\n\n4⃣በሀዘን በስቃይ በችግሬ ጊዜ\n መመኪያ መጠጊያ ለኔ ምርኩዜ\n ረዳቴ ስለሆንክ ጌታ እየሱሴ\n በአንተ ተሞልታ ትረካለች ነፍሴ",msg)&Bot.editInlineKeyboard(b,msg)
