/*CMD
  command: /bt57
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

Bot.editMessage("🌷🌷🌷 ብጊዜ ንእስነትካ🌷🌷🌷\n\n1,ባህ ኣይበለንን እትብለሉ ከይመፀ\nክፉእ መዓልትታት ከይቀረበካ ኸሎ\nኣዒንትኻ ደኺመን ከይጠለማኻ ከለዋ\nብመዓልትታት ንእስነትካ ንፈጣሪኻ ዘክሮ\n      ተደ:\nብጊዜ ንእስነትካ ንፈጣሪኻ ዘክሮ /2/\nብርሃንን ፀሓይን ኩሎም ከይፀልመቱኻ\nብመዓልትታት ንእስነትካ ንፈጣሪኻ ዘክሮ\n                 🙏🙏🙏🏽\nኦ ክቡር መንእሰይ : እቲ ኣቦ ክብሪ ዝኾነ ኣምላኽ : ሓሪዩካን ፀዊዑካን እዩ'ሞ : ክብርኻ ፈሊጥካ ናብቲ ክብር ነገር ጠምትን ተጉዓዝን : መወዳእታኻ ውን ክብሪ ክህልዎ ዩ\n\n2,ብጊዜ ንእስነትካ ባህ ይበለካ\nመዓልትታት ንእስነትካ ተደሰት ተሓጎስ\nልብኻ ዝደልዮ ንኹሉ ሰዓቦ \nግና ኣምላኽ ከምዝፈርደካ ንኹሉ ዘክሮ\n\n3,ሕይወትካ ተበላሽ'ዩ ዘርሞ ዘርሞ ኮይኑ\nብፅልኢ ብዕብዳን ልብኻ ክሒኑ\nክሳብ መዓዝ ኢኻ ብኸምዚ ክትቅፅል\nሕጂስ ይኣኽለካ ተመለስ ናብ ኣምላኽካ\n\n              🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#2",msg)&Bot.editInlineKeyboard(b,msg)
