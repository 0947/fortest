/*CMD
  command: /bt59
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
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/mych"}]]

Bot.editMessage("🌷🌷🌷 ኣደ መድሓኒና 🌷🌷🌷\n\n1,ኦ ማርያም ኣዴና ኣደ መድሓኒና\nነዓና ደቅኺ ሰላምኪ ኣውርድልና\nብፍረ ናይ ከርስኺ ፀግዕና ኩንና\nዋልታ ናይ ሕሙማት መፀናንዒት ሕዙናት\n\n   ተደ:\nንማርያም ንለምና ፀገኣ ክትሰደልና\nፀገምና ነካፍላ ካብ ወዳ ክተማልደልና ካብ ወዳ ክተማልደልና\n\n2,መሳልል ድሕነትና ኦ ማርያም ንስኺ\nብእምነት ንፅሊ ተንበርኪኽና ናባኺ\nከተማልድልና ናብቲ ፍቁር ወድኺ\nንምሕፀነኪ ኣሎና ንሕና ድኹማት ደቕኺ\n\n3,ናይ ኣኽብሮት ስግደት ነቕርብ ናባኺ\nስለ ተቕርብልና ምሕረት ርሕራሔኺ\nዕልልታ ተቐበሊ ካብ ፍቑራት ደቅኺ\nንምጉሶ ኣሎና ነቲ ፍረ ከርስኺ\n\n            🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#2",msg)&Bot.editInlineKeyboard(b,msg)
