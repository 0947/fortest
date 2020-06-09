/*CMD
  command: /wdxiy
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
[{title:"ተመለስ",command:"/mztxt"}]
]

Bot.editMessage("❤️ወደ ፂሆን❤️                         \nወደ ፂሆን ስንራመድ አንተን ተስፋ አድርገን\nፈተና እንዳያሸንፈን በእጆችህ ደግፈን\n\n1⃣፣እናውቃለን እንግዶች ነን ሁላችንም በዚች አለም\n ተስፋችን ግን መኖር ይሁን ከጌታ ጋር ለዘላለም\n   አሁን ከቶም ባንገናኝ በስጋዊው ህይወታችን\n   እንገናኛለን በርቱ በሰማያዊው ቤታችን\n\n2⃣፣ዋይታ ለቅሶ በሌለበት በሰማያዊው ቤታችን\nፍፁም ደስታ ይሆነናል እንኖራለን ከጌታችን\nእንግዲህ እምነት ይኑራችሁ ሰላም ሁኑ/2/\nከጌታችሁ አትለዩ በመከራ ችግር ሁሉ",msg)&Bot.editInlineKeyboard(b,msg)
