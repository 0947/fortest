/*CMD
  command: /zlaml
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

Bot.editMessage("❤️የዘላለም አምላክ ❤️\n\nየዘላለም አምላክ የዘላለም ንጉስ(#2)\nቅዱስ ጌታ ኢየሱስ  \n\n1⃣ዘመን የማይሽረው የነገስታት ንጉስ \nአለምን የፈጠርክ የኛ ጌታ ኢየሱስ\nቅዱሳን በሙሉ ስራህ ያወራሉ \nለታላቅነትህ ወድቀው ይሰግዳሉ  \n\n2⃣በሰማይ በምድር የለም የሚመስልህ\nከአማልክቶች ሁሉ አንተ ትበልጣለህ \nየፍጥረት ገዚ እ/ር ድንቅ ነህ \nጌታ ለዘላለም ፀንተህ ትኖራለህ  \n\n3⃣ሁሉን የምትችል የሰራዊት ጌታ ባንተ የታመነ ከቶ ማን ተረታ \nየሐያላን ሀያል አቻ የሌለህ ነህ ለዘለዓለም ጌታ ነግሰህ ትኖራለህ\n\n4⃣ሀይለኛውን ሁሉ በስልጣን ታዛለህ \nየማበሉን ወጀብ ፀጥ ታደርጋለህ \nወጥመድን ሰባብረህ ነፃ ታወጣለህ  \nጌታ አምላካችን ይክበርልን ስምህ",msg)&Bot.editInlineKeyboard(b,msg)
