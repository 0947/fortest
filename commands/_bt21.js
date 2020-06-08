/*CMD
  command: /bt21
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

Bot.editMessage("🌷 ብኣንነተይ መታን ከይምካሕ 🌷\n\n1. ዕድል ጎልያድ ንኸይገጥመኒ\nትምክሕቲ ስጋ ንኸይመልከኒ\nእንታይ ክገብር ትደልየኒ\nክብል ከም ጳውሎስ መሃረኒ\n\nተደ:ብኣንነተይ መታን ከይምካሕ\nኣንቃዕሪረ ከይጥምተካ\nንዓይ ዝኾን ክብረት ከይሓስብ\nበጃኻ ንዓይ ምራሕ ኢየሱስ\n\n2. ኣብ ስጋ ዝውከል ርጉም'ዩ\nእንካብ በለ ቃልካ ሓያል'ዩ\nኣንነተይ ፍፁም ክኽሕድ\nኦ ኢየሱሰይ መንገደይ መድምድ\n\n3. ኣንነተይ ኩሉ ብላዕሊ\nክብሪ ጎይታ ግና ብታሕቲ\nእዚስ ፍፁም ነየውፅኣኒ\nሃገር ሰላም ነየእትወኒ\n\n4. ክብረት ናተይ ኩሉ ኣብ ኢየሱስ'ዩ\nናይ ምድሪ ናብራ ኩሉ ናተይ\nከም ፍቓድካ ክጥቀመሉ\nሕልናይ ለውጦ ብኹሉ\n\n5. እዚስ ኩሉ ፍቓድ ኣምላኽ'ዩ\nእናበልኩ ክቕበል ኩሉ\nንድምፅኻ ንኸለልዮ\nንኣእምሮይ ኩሉ ግዝኣዮ\n\n ተደ: ብኣንነተይ...\n\n         🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#1",msg)&Bot.editInlineKeyboard(b,msg)
