/*CMD
  command: /abox
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
[{title:"ተመለስ",command:"/xelo"}]
]

Bot.editMessage("⏰ፀሎት ማለት ከእ/ር ጋር መነጋገር ማለት ነው።\n\nልጅ ከአባቱ ጋር -- ወዳጅ ከወዳጁ ጋር -- ፍጡር ከፈጣሪው ጋር ሲነጋገር በአፍ መለፍለፍ ብቻ ሳይሆን በልብ እያስተዋለ ማንበብ አለበት።\n\nፀሎት ከሁሉ የበለጠ መልካም ነገር ነው። ፀሎት ማወቅ ከሁሉ የበለጠ ትልቅ ነገር ነው።\nበመልካም መፀለይ ከሁሉ የበለጠ አስደሳች ነገር ነው።\n\n\n☄ሳታቋርጡ ጸልዩ፤ በሁሉ አመስግኑ፤ ይህ የእግዚአብሔር ፈቃድ በክርስቶስ ኢየሱስ ወደ እናንተ ነውና።\n(1ኛ ወደ ተሰሎንቄ ሰዎች 5:17-18)\n\.ጊዜው መቼ እንዲሆን አታውቁምና ተጠንቀቁ፤ ትጉ፤ ጸልዩም።\n(የማርቆስ ወንጌል 13:33)☄\n\n📡 share the bot please",msg)&Bot.editInlineKeyboard(b,msg)
