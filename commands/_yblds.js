/*CMD
  command: /yblds
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

Bot.editMessage("❤️ይበልሽ ደስ❤️\nይበልሽ ደስ ነሽ ታሪካዊት \nአምላክ ወደደ አንቺን ለእናት \nአምላክ መረጠሽ ምንተስኖት \nይበልሽ ደስነሽ ታሪካዊት \nማርያም መረጠሽ ኢየሱስ ለእናት \nለእራሱ አደረገሽ ለእርሱ መምጣት \n\n1⃣ለልበ ቅኖች የልብ ነው \nእግዚአብሔር መርጦ ስሕተት የለው \nማርያም በፊቱ ደስ ይበልሽ \nኢየሱስ ሞገስ ከሆነልሽ\nየፊቱን ሞገስ ካበራልሽ \n       〰 ይበልሽ ደስ .....\n\n2⃣በሁሉ ሳለ ሞልቶ ምርጫው \nለምህረት እጁ ሆንኸው መምጫው \nበዓለም ተሰማ ታሪክሽ \nእግዚአብሔር እንዳከበረሽ\nማርያም ብፅእት መሆንሽ  /2/\n\n3⃣ኸረ እንዴት ማርያም ጌታ አደለሽ \nበፅድቁ መንገድ ላይ ተገኘሽ \nየክብር /የክብሩ/ ንግስት አድርጎሻል\nየሰማይ አክሊል አልብሶሻል /2/",msg)&Bot.editInlineKeyboard(b,msg)
