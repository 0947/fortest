/*CMD
  command: /tr32
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

Bot.editMessage("❤️ገፀ በረከቴ❤️\n\nገፀ በረከቴ ክብሬ ለእኔ ሀይሌ \nበልጅሽ ተፍቋል ያ ክፉ በደሌ \nእኔም አምኝሻለሁ አማላጅ ነሽ ለእኔ \nወጣሁ ተማጽኜሽ ከዚያ ከኩነኔ (2)\n \nእናትነትሽን መቼ እዘናጋለሁ \nየመዳን በሬ ነሽ እኔም አምንሻለሁ \nአማልጂኝ እያልኩኝ ደጅሽ እጠናለሁ \nከልካይ በሌለበት ማርያም /2/ እልሻለሁ (2)\n \nሽልማቴ የኔ እናት መአዛዬ \nመውጫዬ መሰላል ሆንሽልኝ አርማዬ \nጥሩ እምነቴ ነሽ ንፅህት ኪዳኔ \nአሻግሬ አየሁሽ ታማኜ ነሽ የኔ\n \nእናትነትሽን .........\n \nጠጥቼ የረካሁብሽ የጥሜ ውሃዬ \nማርያም አንቺው ነሽ ለኔ መመከያዬ \nጨለማውን ረቺ ኢየሱስን የወለድሽ \nትውልድ ሁሉ ብፅህት ንፂሂት የሚሉሽ\n \nእናትነትሽ ......",msg)&Bot.editInlineKeyboard(b,msg)
