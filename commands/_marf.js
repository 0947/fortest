/*CMD
  command: /marf
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

Bot.editMessage("❤️ማረፊያ ነህ❤️\n\nማረፊያዬ ነህ ለዘለዓለም መኖሪያዬ ተደላድያለሁ \nአንተ ነህ መኩሪያዬ እመካብሀለሁ ውድዬ \n(ሁሌም ለጌታዬ (2)\n\nተረስቼ ነበር ተጥዬ የቀረሁ ማንም ያላሰበኝ\n (ከአመድ ትቢያ ያለሁ(2) መኖርን አግኝቼ ባንተ \nኮርቻለሁ ዛሬም ብቻ ሳይሆን (ሁሌም እወድሀለሁ(2)\n\n ትንሽ ድሀ ነበርኩ ከቁጥር የማልገባ ወድቄ የቀረሁ\n (ምንም የማልረባ(2) ምን ይሳናል ላንተ ሁሉን ታደርጋለህ \nእኔንም አክብረህ (አንተም ትከብራለህ(2) \n\nማክበርስታውቅበት ደግሞም ማደላደል ሽልመህ ቀብተህ \n(እፍረትን ምታስጥል(2) ላክብርህ በፊትህ ይገባሀል\n ና ቃሌን ባይገልጽልኝ ያለኝን ነውና ያለኝን ነውና",msg)&Bot.editInlineKeyboard(b,msg)
