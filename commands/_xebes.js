/*CMD
  command: /xebes
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

Bot.editMessage("🔹የ እግዚአብሔር መልአክ ማርያምን አበሠራት --- እሷም በመንፈስ ቅዱስ ፀነሰች\n🔹ፀጋን የሞላሽ ማርያም ሆይ --- (ቅድስተ ማርያም)\n🔹እነሆኝ የእ/ር አገልጋይ --- እንዳልከኝ ይሁንልኝ\n🔹ፀጋን የመላሽ (ቅድስተ ማርያም)\n🔹ቃል ስጋ ሆነ --- በእኛም አደረ\n🔹ፀጋን የመላሽ (ቅድስተ ማርያም)\n🔹ቅድስት የአምላክ እናት ሆይ ለምኝልን --- ክርስቶስ ለሰጠን ተስፋ የተገባን እንድንሆን\n\n🔹እ/ር ሆይ በመልአክ ምስራች የልጅህን የኢየሱስ ክርስቶስን ሰው መሆን እንዳወቅን --- በህማሙና በመስቀሉ ወደ ትንሳኤ ክብር እንድንደርስ ፀጋህን ስጠን --- በጌታችን በኢየሱስ ክርስቶስ እንለምንሀለን\n\nአሜን🙏🏽",msg)&Bot.editInlineKeyboard(b,msg)
