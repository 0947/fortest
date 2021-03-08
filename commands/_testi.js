/*CMD
  command: /testi
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

Bot.editMessage("❤️የኑሮዬ ጣእም❤️\n\nየኑሮዬ ጣእም የመንገዴ ፋና\nእየሱስ /2/ አሜን ማራናታ ቶሎ ና\nናፍቃለችና ነፍሴ \nአንተን ትሻለች ንጉሴ\nያላንተ ማን አላት አንተ አረጋጋት\n\nጥማቷንም ቁረጥላት\nከማያልቅ ውሀህ አንተ አጠጣት\nያላንተ ማን አላት አንተ አረጋጋት\n\nመባዘንሽ ይብቃሽ በላት\nቤትህም ምራት ሰላም ሁናት\nያላንተ ማን አላት አንተ አረጋጋት\n\nናፍቃለችና ነፍሴ\nናፍቃለችና ህይወቴ\nአንተን ትሻለች አንተን ትላለች ንጉሴ\nማን አላት ያላንተ /4/",msg)&Bot.editInlineKeyboard(b,msg)
