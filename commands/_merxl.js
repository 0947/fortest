/*CMD
  command: /merxl
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

Bot.editMessage("🔹እጅግ ርኅርኅት የሆንሽ ድንግል ማርያም ሆይ ባንቺ ጥበቃ ከተማጠኑ እርዳታሽን ከለመኑ።\nአማላጅነትሽም ከፈለጉ ሰዎች አንድ እንኳን የተኮነነ እንዳልተሰማ አስቢ የድንግሎች ድንግል የሆንሽ እናቴ ሆይ እኔም በዚህ እምነት ተፅናንቼ ወደአንቺ እሮጣለሁ በኃጢአቴም እየተጨነቅኩ በፊትሽ ቆምያለሁ። የቃለ እ/ር እናት ሆይ ራርተሽ ቃሌን ስሚ አድምጪ እንጂ ችላ አትበዬኝ አሜን",msg)&Bot.editInlineKeyboard(b,msg)
