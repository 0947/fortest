/*CMD
  command: /sm2
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

Bot.editMessage("❤️ምርጫዬ ነህ❤️\n\nየጠራህ ያፈቀርከኝ የሱስ ጌታዬ\nየዘላለም ምርጫ ነህ የመጨረሻዬ\nቢወራ ቢገለጽ የሰጠኸኝ ደስታ\nተወደስ ልበልህ የነፍሴ አልኝታ\nምንን እከፍላለሁ ለዋልከው ውለታ\nተመስገን ልበልህ ጠዋት ሆነ ማታ /4/\nስምህን ጠርቼ ብነግርህ መሆኔን ከርታታ\nበፍቅር አይተኸኝ ለወጥክ ሁካታዬን በደስታ\nእንደ ፍቅርህ ብዛት ሰው ሆኜ በቤትህ ቆሜያለሁ\nለዘላለም ጌታ ካንተ ጋር እኖራለሁ\nየጠራህ ያፈቀርከኝ  ...\n\nለውለታህ ምላሽ ቢሆን ልገዛልህ የሱሴ\nበሄድኩበት ሁሉ ታክብርህ ታንግስህ ምላሴ\nለዚህ ያበቃኸኝ አንተ ብቻ እኮ ነህ አምላኬ\nላመስግንህ ዛሬም ፊትህ ተንበርኬ\nቢወራ ቢገለጽ …\n\nፍቅርህ ማያቋርጥ መሆኑን ዘወትር አውቃለሁ\nበህይወቴ ሁሉ ምስጋናን ለአንተ እቀኛለሁ\nበፍቅርህም ምራኝ የኔ ታላቅ አምላክ ጌታ\nፍጹም ይረዳኛል እኔ እንዳልረታ\nምርጫ ነህ ምርጫ /2/\nየግሌ ነህ የግሌ /2/\nበልቤ ውስጥ የሾምኩህ\nጌታዬ ነህ ጌታዬ",msg)&Bot.editInlineKeyboard(b,msg)
