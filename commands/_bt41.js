/*CMD
  command: /bt41
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

Bot.editMessage("🌷   ተስፋ ኣይቆርፅን ኢየ  🌷\n1,ሓጥያተይ ከቢዱኒ ዒቢ ፅዕነት ኮይኑኒ\nማርያም ኣማልድለይ ወድኺ ክምሕረኒ \n\nተደ:ተስፋ ኣይቆርፅን'የ /2/\n   ክሳብ ተማልድለይ ኣነ ኣብ ትሕቴኺ'የ\n\n2,ሰይጣን እንተፈተነኒ ኢሉ ከውድቐኒ\nርሕርሕቲ ወላዲተይ ንስኺ ኣለኽኒ\n\n3,ብሓጥያተይ ዝኣክል ሕልናይ ከይወቕሰኒ\nንድሕሪት ከይምለስ ኣደይ ሓግዝኒ\n\n4,ሕልናይ ተሸቢሩ ሰላም'ውን ስኢነ\nእልምን ኣለኹ ኣብ እግርኺ ኮይነ\n\nተደ: ተስፋ ኣይቖርፅን'የ \n\n             🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ vol#1",msg)&Bot.editInlineKeyboard(b,msg)
