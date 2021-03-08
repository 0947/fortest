/*CMD
  command: /mztxt2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{title:"ፍቅርህን አየሁት",command:"/fksee"},{title:"ክርስትና", command :"/krsti"}],
[{title:"ካንተ ወዴት",command:"/wherei"},{title:"አትተወኝም", command :"/sm3"}],
[{title:"የኑሮዬ ጣዕም",command:"/testi"},{title:"ምንም የለን", command :"/sm7"}],
[{title:"ፀጋን የሞላሽ",command:"/sm9"},{title:"በቃና ዘገሊላ", command :"/sm5"}],
[{title:"ምርጫዬ ነህ",command:"/sm2"},{title:"መፅናኛችን", command :"/sm19"}],
[{title:"ለመልካም",command:"/sm13"},{title:"ዛሬም ይላል", command :"/sm23"}],
[{title:"ባለህ ሙሉ ግርማ",command:"/sm30"}],
[{title:"አልፈናል",command:"/tr3"},{title:"ሰላማችን", command :"/tr5"}],
[{title:"ምን አይነት",command:"/tr6"},{title:"እዘምራለሁ", command :"/tr8"}],
[{title:"ቅዱስ ቁርባን",command:"/tr10"},{title:"ላደረክልን", command :"/tr15"}],
[{title:"እንደ ስምህ",command:"/tr18"},{title:"ኧረ እንዴት", command :"/tr20"}],
[{title:"አንተ ነህ",command:"/tr28"},{title:"ገፀ በረከቴ", command :"/tr32"}],
[{title:"አንተ ነህ",command:"/tr28"},{title:"ያዳነኝ", command :"/tr35"}],
[{title:"ላመስግንህ",command:"/tr38"},{title:"በፊትህ", command :"/tr24"}],
[{title:"➖ወደ ገጽ 1 ለመመለስ➕️",command:"/mztxt"}],
[{title:"⏭ለመመለስ",command:"/mzmu"},{title:" ↕️ዋና ገፅ ", command :"/mych"}]]

Bot.editMessage("በዚህ ገፅ የካቶሊካዊት ቤተክርስቲያን መዝሙሮች በፅሁፍ ተቀምጠዋል፡፡ ከታች ያሉትን በተኖች ይጠቀሙ፡፡",msg)&Bot.editInlineKeyboard(b,msg)
