/*CMD
  command: /ymir
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

Bot.editMessage("❤️የሚረዳኝ የሚያግዘኝ❤️\n\nየሚረዳኝ የሚያግዘኝ የለምና ከእኔ አትቅ\nየደስታዬ የሰላሜ ምንጭ እኮ ነህ ያዝ እጄን አትልቀቅ\n\n        ብቸኝነት ህይወቴን ሲከባት\n        ሲያናውጣት እጅግ ሲፈትናት\n        አቅሜ አይችልም ይከብደኛል ለኔ\n        ቶሎ ናልኝ ቶሎ ና መድህኔ\n\nደስ አይለኝም አንተ የሌለህበት\nበመንፈስ ያልተገኘህበት\nከጎኔ ሁንልኝ ረዥም ነው የኔ መንገድ\nከአንተ ሌላ እኔ የለኝም ዘመድ\n\n  እኔ አልሻም እኔን የሚረዳ\n      የተነሳ ከደም እና ስጋ\n      አንተው ሁነኝ ምርኩዜ ረዳቴ\n      እየሱሴ ይሄ ነው መሻቴ",msg)&Bot.editInlineKeyboard(b,msg)
