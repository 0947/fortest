/*CMD
  command: /grulb
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

Bot.editMessage("❤️ገሩ ልብህ ❤️\n\nገሩ ልብህ ምህረት የሞላው \nበኀጢያት እኛ ስንወጋው \nእምቢም አይል  ማረኝ ለሚለው \nጥቂጥ እንኳ ትንሽ ቂም የለው\n\nበቄስ ጆሮ የቀረብነውን \nየኛን ሥራ ምናምንቴውን \nበይቅርታህ አጥፋው አሁኑን \nካለማወቅ እንድትቆረጥልን \n\nበኛ በኩል ምንስ የት አለና\nበአንተ በኩል ምህረት ሞልቶቷልና \nገሩ የሱስ አሁን በል ቶሎ ና\nካንተ ጋራ ፍቅር እንዲፀና  \n\nንገስ  ንገስ የአንተ መንግስት ይስፋ \nየሰው ልጅ ዘር አንድ እንኳን እንዳይጠፋ \nበአለም ሁሉ አንተ ሁነን ተስፋ \nክፋት ቀርቶ የአንተ መንግስት ይስፋ \nክፋት ቀርቶ የአንተ መንግስት ይስፋ \n\nበክፉ አመል ስንቸነክርህ \nከአይሁድ ጋራ ተባብረንብህ \nዳሩ ግን አንተ ምንጊዜም ቸር ነህ\nይቅር በለን በገሩ ልብህ",msg)&Bot.editInlineKeyboard(b,msg)
