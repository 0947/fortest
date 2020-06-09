/*CMD
  command: /bt36
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
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/menu"}]]

Bot.editMessage("🌷   መቑሕ ናይ ዓለም ሰበሮ   🌷\n\n1,እፅሊ ኣለኹ ክነብር ምሳኻ\nዝበለፀ'ዩ ክምካሕ በኣኻ\nኩሉ ክሓልፍ'ዩ ብዘይካ ቃልካ/2/\n\nተደ:መቑሕ ናይ ዓለም ሰበሮ\n     ንኹላ ቃልካ መሃሮ\n     ሓልዮትካ ሃቦ ጎይታይ\b     ብስምካ'ውን ኣሕብሮ\n\n2,ኣባኻ መፅየ ሕልናይ ዓሪፉ\nምህውታት ዓለም ኩሉ ተሪፉ\nብስምካ ጎይታይ ዓለም እነሆ ተተስፍዩ/2/\n\n3,ኢየሱስ ኢኻ ጉንዲ ወይኒ\nብፍቕርኻ ጌርካ ጥመረኒ\nፍቓድካ ኩሉ ክመልእ ሓግዘኒ/2/\n\n4,ትርእያ ኣለኻ ዓለም ብምልእታ\nኣምላኽ ኢኻ ናይ ኩሉ ጎይታ\nዘይትወላወል ኢየሱስ ፅኑዕ ዋልታ/2/\n\n       ተደ: መቑሕ ናይ....\n\n             🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#1",msg)&Bot.editInlineKeyboard(b,msg)
