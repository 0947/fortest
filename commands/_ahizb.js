/*CMD
  command: /ahizb
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

Bot.editMessage("❤️አህዛብ ለአምላክ❤️\n    የእግዚአብሔር ስጦታ ሀይል እና አምልኮ\n    ታምራቱን ሰጠን መንፈስ ቅዱስ ልኮ\n    ሊያስታውቀን ዘንድ ይኸው ትምህርቱን\n    ለመንግስተ ሰማይ ሊያዘጋጀን\n\nአህዛብ ለአምላክ እልል በሉ ዝማሬውን አንሱ\nከበሮንም በገና መሰንቆ መለከትንም ንፉ\n\n    በነበሩበት ቤት ዙሪያ ተቀምጠው\n    እመቤታችንን ማሪያምን ከበው\n    በእሳት ነበልባል በእርግብ አምሳል\n    ሀዋሪያትን ከጭንቅ ነፍሳቸውን አድኗል\n\nጌታ ሆይ ከባሪያህ ፊትህን አትሰውር\nበመቅደስ በሰማይ በክብር ስትኖር\nከጥፋት ጎዳና እኔን አድንና\nባንተ አምኜ ልኑር ዘውትር በምስጋና\n    አምልኮ ምስጋና ክብር ይብዛልህ\n    ላረከው ምላሽ እንኳ ቢሆንልህ\n    ተረድተናልና አባትነትህን\n    እናከብርሀለን ይኸው ተቀበለን",msg)&Bot.editInlineKeyboard(b,msg)
