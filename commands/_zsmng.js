/*CMD
  command: /zsmng
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

Bot.editMessage("❤️የሰማይ የምድር ንጉስ❤️\n\nየሰማይ የምድር ንጉስ መንግስትህ የማየፈርስ አንተ ነህ ኢየሱስ /2/ ያገር ገዢዎች ራስ የንጉሶች ንጉስ አንተ ነህ እየሱስ(2) \n\nንጉስ ነገስታት ላመኑበህ ሕይወት ኢየሱስ ነህ በእውነት (2) \n\nመንግስትህ በጣም ይስፋ የሰው ነፍስ እንዳይጠፋ ክርስቶስ የኛ ተስፋ \n\n በቁርባን ስውር ነህ በሐይማኖት ላየህ ኢየሱስ ሆይ ውብ ነህ (2) \n\n ስወድህ ውደደኝ ስጠራህ ቅረበኝ ያላንተ ማን አለኝ (2) \n\nበፍቅርህ ተመርቼ በሀይማኖት ፀንቼ እንዳነኝህ በርትቼ /2\n\nበፍቅርህ አልፋቅ ከልብህ አልራቅ አንተን ብቻ ልወቅ (2)",msg)&Bot.editInlineKeyboard(b,msg)
