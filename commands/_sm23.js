/*CMD
  command: /sm23
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

Bot.editMessage("❤️ዛሬም ይላል❤️\n\nዛሬም ይላል ማርያም ብጽእት ናት በህይወቷ\nትውልድ አምኖ እግዚአብሔርም ምርጥነቷን\nእንደ ቃሉ ሳይቀንስ ሳይጨምር \nያከብራታል ሁልጊዜም የሰው ዘር\n\nብርቱ የሆነው ስሙም ቅዱስ ነው በእርሷ ታላቅ ስራ አድርጓል\nየፍጥረት ጌታ የፍጥረት ንጉስ በማህጸኗ ሊያድር ወዷል\nየእግዚአብሔር ጸጋ እንዴት አደላት ዛሬም አምኖ ትውልድ ሁሉ\nብጽእት ይላል እየተስማማ ከቶ ሳይጨምር ከቃሉ\n\nከጌታ የተነገርላት ቃል ይፈጸማል እንዳመነች\nየእየሱስ እናት ለመሆን በቃች ኧረ እንዴት እንዴት ምስጉን ናት\nበነፍሷ ጌታን አክብራዋለች በሱም ሀሴት ታደርጋለች\nእንደ እግዚአብሔር ቃል ትውልድ ተረድቶ ማርያም ብጽእት ይላል መቶ\n\nየባርያይቱን ውርደቷን አይቶ መንፈስ ቅዱስ በርሷ መጥቶ\nካላማው ጋራ አሰልፏታል ትውልድ ብጽእት ይላታል\nታዛዥ ቅን ልቧ ለእርሱ ባደረ ልኡልም በሀይል ተጸለለ\nየሱስ ተቤዠን በእሽታዋ ምሳሌ ሆነ ኑሮዋ",msg)&Bot.editInlineKeyboard(b,msg)
