/*CMD
  command: /xescy
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

Bot.editMessage("📌 በሠማያት የምትኖር አባታችን ሆይ\n✨ስምህ ይመስገን መንግስትህ ይምጣ\n✨ፈቃድህ በሰማይ እንደሆነ እንዲሁም በምድር ይሁን\n✨የእለት እንጀራችንን ዛሬ ስጠን\n✨እኛን የበደሉንን ይቅር እንደምንል በደላችንን ይቅር በልልን\n✨ከክፉ ሁሉ ሰውረን እንጂ ወደፈተና አታግባን\n✨መንግስት ሀይልና ክብር ምስጋና ለዘለአለም የአንተ ነውና አሜን።",msg)&Bot.editInlineKeyboard(b,msg)
