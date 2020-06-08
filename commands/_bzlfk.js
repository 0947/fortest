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

Bot.editMessage("❤️በዘላለም ፍቅርህ❤️\n\nበዘላለም ፍቅርህ ያፈቀርከኝ\nበመንገዴም ሁሉ ከፊት የምትመራኝ\nጌታዬ እየሱስ ከፈተና አውጣኝ\n\nእንደማትለየኝ ልቤ ቢያውቀውም\nእንደምትረዳኝ ብገነዘበውም\nየእምነቴ ማነስ ሲያስቸግረኝ\nአቤቱ ጌታ ሆይ ዝም አትበለኝ\n\nደካማ ነኝና ሸክም ሲከብደኝ\nፍርሀትና ጭንቀት ሲያርበደብደኝ\nሌላ ስለሌለኝ እኔን ሚያግዘኝ\nአቤቱ ጌታ ሆይ ዝም አትበለኝ\n\nከሁሉም በላይ ነህ ለኔ ጌታ\nማንንም አላቆም በአንተ ቦታ\nአንተን ክጄ የት እደርሳለሁ\nከልፋት በስተቀር ምን አተርፋለሁ\n\nበሀዘን በስቃይ በችግሬ ጊዜ\nመመኪያ መጠጊያ ለኔ ምርኩዜ\nረዳቴ ስለሆንክ ጌታ እየሱሴ\nበአንተ ተሞልታ ትረካለች ነፍሴ",msg)&Bot.editInlineKeyboard(b,msg)
