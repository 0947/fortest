/*CMD
  command: /tr28
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

Bot.editMessage("❤️አንተ ነህ ሰላሜ❤️\n\nአንተ ነህ ሰላሜ /2/ \nአንተው ነህ እረፍቴ \nደጉ ሳምራዊ ጌታ ኢየሱሴ (2)\n \nፈውስህ ልዬ ነው አይመረመርም \nሰላሜ የአንተ ነው ወሰን ጥግ የለው \nእኔስ አላየሁ አንተን መሳይን \nሆነኸኝ እኮ ነው ሰላሜ የምልህ (2)\n \nአንተ ነህ ሰላሜ .....\n \nለብዙ ዘመን ያ አልጋ ጓደኛ \nአሁን ግን አገኘሁ እኔስ መዳኛ \nየበሽታዬን ጣር ረጋግጠህ ሰብረህ \nአቁመኸኛል ጌታ ፈውሴ አንተ ነህ (2)\n \nአንተ ነህ ሰላሜ ....\n \nእንደካህኑ መቼ ትተህ አለፍከኝ \nእንደ ሌዊውም ሰው መቼ ሸሸኸኝ \nአንስተህ ከአፈር በዘይትህ ቀባኸኝ \nሰላሜን ሰጥተህ በቤትህ አቆምከኝ (2)\n \nአንተ ነህ ሰላሜ (2)",msg)&Bot.editInlineKeyboard(b,msg)
