/*CMD
  command: /tigmez1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{title:"አባ ግርማይ",command:"/girm"},{title:"መቀሌ", command :"/mekl"}],
[{title:"ዓድዋ ኪዳነ ምህረት",command:"/adwakid"},{title:"አምባሊጋኖ ኤርትራ", command :"/egli"}],
[{title:"ፍራንቸስኮስ አስመራ",command:"/fras"},{title:"ኤርትራ ኪዳነ ምህረት", command :"/erkid"}],
[{title:"ከረን ቅድስት ስላሴ",command:"/kslase"},{title:"ቅ.አንጦንዮስ ከረን", command :"/kanto"}],
[{title:"ሰምበል ኪዳነ ምህረት",command:"/senbel"},{title:"መ.ዓለም ሓሊመንቲ", command :"/hali"}],
[{title:"ቅ.ልቢ መ.ዓለም ዓዲግራት",command:"/adi"},{title:"ብዕልልታ ንዘምር", command :"/bellta"}],
[{title:"ብ ዘማሪ በርሀ መሓሪ",command:"/berha"},{title:"ቅ.አንጦንዮስ አስመራ", command :"/asm"}],
[{title:"ብ ዘማሪ ሰመረ ዘርኦም",command:"/semere"}],
[{title:"ብ ዘማሪ ምስግና ግላዝጊ", command :"/msgna"}],
[{title:"⏭ለመመለስ",command:"/tigmez"},{title:" ↕️ዋና ገፅ ", command :"/mytig"}]]

Bot.editMessage("የትግርኛ መዝሙሮች ከታች በአልበም ተሰናድተዋል፡፡ የፈለጉትን አልበም በመምረጥ የአገልግሎቱ ተጠቃሚ እንዲሆኑ ጋበዝንዎት",msg)&Bot.editInlineKeyboard(b,msg)
