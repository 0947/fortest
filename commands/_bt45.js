/*CMD
  command: /bt45
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

Bot.editMessage("🌷 ስጋኻን ደምካን ወፊኻለይ 🌷\n\n1,ስጋኻን ደምካን ወፊኻለይ\nንኽበልዖ ንኽሰትዮ\nዓፅምኻን ስጋኻን ከስኪስካለይ\nንኽድሕን ንኽነፅሕ\n\nተደ:ኣሜን/3/ ሃሌ-ሉያ ኣሜን\n     ኣሜን/3/ ተዓዊተ ኣሜን\n    ኣሜን/3/ ሃሌ-ሉያ ኣሜን\n     ኣሜን/3/ ተሓጕሰ ኣሜን\n\n2,ጥፍጣፍን ረሃፅን ገፅካ መሊኡ\nንኽነፅሕ ንኽነፅሕ \nስጋኻን ደምካን ተመጊበ\nንድሕነተይ ንድሕነተይ\n\n3,ብስሙር ዓፅምኻ ተኸቢበ\nካብ ፀላእተይ'ውን ድሒነ\nኣብ ትሕቲ ኣኽናፍካ ውን ኣፅሊለ\nብፍቕርኻ'ውን ሟሚቐ\n\n4,ኣብ ዛራ ማይ ፍቕርኻ ኣንሳፊፈ\nኣብ ኣእዳውካ ተሓቑፈ\nስጋኻን ደምካን ተመጊበ\nባህ ኢሉኒ'ውን ዓጊበ\n      ተደ: ኣሜን/3/ ሃሌ-ሉያ..\n\n               🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#1",msg)&Bot.editInlineKeyboard(b,msg)
