/*CMD
  command: /g3
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

Bot.editMessage("🌷🙏 ብሰሪ በደለይ🌷🙏\n\n1,ብሰሪ በደለይ ገፅካ ተኸዊሉኒ\nከስቆርቁር የሕልፍ ኣለኹ ናብራ ከቢዱኒ\nእምነተይ ኣብ ምድራዊ ነገራት ኣንቢረ\nኣሕዚነካ የሱሰይ ካባኻ ርሒቐ\nብምሕረት ዓብይ ግን ኣምላኽ ሓጥያተይ ደምሲስካለይ\nውሉድካ ክኸውን ኣነ ክሕደስ ህይወተይ\n\nእግዚኣብሄር (3) ኢድካ የሕሊፍካለይ\nየሱስ ደራሪዝካዮ ንብዓት ካብ የዒንተይ\nኣብ ፍቕርኻ ወትሩ ክነብር መሪፅካ\nኦ ኣምለኽ እሙን ኢኻ'ሞ ምስጋና ይኹንካ\n\n2,የማንካ ሰቒሎም ንሞት ተፈሪደ\nሰላም ናይ ውሽጠይ ማህሚኑ ፀላም ተኸዲነ\nጎይታ ግን ትምሕረኒ ዓዊለ ኣለኹ\nብኽፉእ ተግባረይ እናተኣመንኩ\nጎይታየ ሽዑ ኣይትፍራሕ ብምባል ኣፅኒዑኒ\nምሳይ ኣሎኻ ሎሚ ኣብ ገነት ኢሉኒ\n\n              🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ መ.ዓለም ቪላጆ",msg)&Bot.editInlineKeyboard(b,msg)
