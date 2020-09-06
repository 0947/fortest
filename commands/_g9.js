/*CMD
  command: /g9
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
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/mytig"}]]

Bot.editMessage("🌷🙏 እግዚኣብሄር ሰላምና ኢዩ'ሞ🌷🙏\n\n1,ኩሉ ብርኪ ዝሰግደሉ\nረማዕ ገማዕ'ውን ዝብለሉ\nኣቱም ህዝቢ ኣመስግኑ\nንኣምላኽና ዓልልሉ(2)\n\nእግዚኣብሄር ሰላምና ኢዩ'ሞ\nንእግዚኣብሄር ክብሪ ንሃቦ\nእግዚኣብሄር ኣምላኽና ኢዩ'ሞ\nብምስጋና ልዕል ነብሎ(2)\n\n2,ብምሕረቱ ዝጠመተና\nኣብ ኣእዳው ዝወቀጠና\nዕዳ ከፊሉ ህይወት ሂቡና\nይውሕዶ'ዃ ስብሓት ምስጋና(2)\n\n3,እቲ ሓሲሩ ዘክበረና\nርእሲ መኣዝን ዝገበረና\nቀፅርታትና ኣብ ዓይኑ'ዩ\nሓላዊና ኣይታኸስን'ዩ(2)\n\n4,ልሳናትና ሰሓቅ ዕልልታ\nልባትና'ውን ሓጎስ ምስ ደስታ\nዘንጀርበበ ድንቂ ጎይታ'ዩ\nኣብ ዘመናት መስተንክር'ዩ ስርሑ\n\n             🌷🙏🙏🙏🌷\n\nብመዘምራን ኪ.ምሕረት ሰምበል",msg)&Bot.editInlineKeyboard(b,msg)
