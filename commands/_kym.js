/*CMD
  command: /kym
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
[{title:"⤴️ዋና ገጽ ",command:"/mych"}]
]

Bot.editMessage("    ❤️ቅዱስ ዮሴፍ ሞስካቲ❤️\n\nዮሴፍ ሞስካቲ ህክምናን እንደ ጥሪ በመመልከት ልክ የምስጢረ ክህነትን አገልግሎት እንደሚፈጽም የሚሠራ የተለየ ዶክተር ነው፡፡ በናፖሊ ምስራቃዊ ክፍል በምትገኝ ቤኔቬንቶ በምትባል ቦታ ወግ አጥባቂ ከሆነ ቤተሰብ ተወለደ፡፡ አባቱ ልዩ የህግ ሰው እና ዳኛ ሲሆን ዮሴፍ 17 ዓመት ሞልቶት እስከሞተበት ዕለት ቤተሰባቸው በኢኮኖሚ ረገድ ያድግ ነበር፡፡ በተመሳሳይ ዓመት ወደ ህክምና ትምህርት ቤት የገባው ዮሴፍ ከስድስት ዓመታት የጥናት ጊዜ በኋላ በህክምና ዘርፍ ተመርቶ በአካባቢው በሚገኝ አንድ ሆስፒታል ውስጥ መስራት ጀመረ፣ በኋላም የፖፖሎ ቅድስት ማርያም ወደሚባል በፈውስ አልባ ህመም የተጠቁ ሰዎች ባሉት ሆስፒታል ውስጥ መስራት ጀመረ፡፡\nጊዜው መንፈሳዊው እና ቁሳዊው የ19ኛ ክፍለ ዘመን ሳይንሳዊ ዓለም በየተለያየ ጐራ ሰው ማለት ምን ማለት ነው? ለሚለው ጥያቄ ምላሽ በመስጠት የተፋጠጡበት ጊዜ ነበር፡፡ እንዲህ ያለው መላ ምት ከመሰራጨቱ በፊት ዮሴፍ ባለው ጥልቅ እምነት መንፈሳዊውን ዓላማ በመከተል ዘወትር በሽታውን ብቻ ሳይሆን የሰውን ልጅ ለማከም ይፈልግ ነበር፡፡ ለተማሪዎቹም እንዲህ ሲል ፅፏል /አካልን ብቻ ሳይሆን ነፍስን ጨምር መንከባከብ እንዳለባችሁ በጥብቅ አስታውሰ፣ ለመድሃኒት ቀማሚው በሚላከው ተራ የመድሃኒት ማዘዣ ብቻ ሳይሆን በመምከርና መንፈሳቸውን እውነት በማስገንዘብ ጭምር ነው፡፡/ በእያንዳንዱ ስቃይ ውስጥ ባለ ህመምተኛ ግለሰብ ውስጥ ክርስቶስን የማመላከት እንጅ ሩህሩህ ሃኪም ነበር፡፡ በ19ዐ6 በሞሱቪየስ ተራራ ላይ እሳተ ጐመራው ሲፈነዳ ከተራራው ግርጌ በሚገኘው ሆስፒታል ውስጥ በሽተኞችን ለማዳን በሚደረገው ጥረት ውስጥ የራሱን ህይወት እንኳን አደጋ ላይ ሲወድቅ ያለውን ጥልቅ እንክብካቤ አሳይቷል፡፡ ከሆስፒታሉ ብዙኃን ትተውት ሲኮበልሉም ከጥቂቶቹ ጋር ሆስፒታል ወደ አመድ ከመለወጡ የመጨረሻቹ ደቂቃ ድረስ ታግሏል፡፡ ዮሴፍ ሞስካቲ አንድ ማለዳ እንደተለመደው መሥዋዕተ ቅዳሴውን ተካፍሎ፣ ቅዱስ ቁርባኑን ተቀብሎ በሽተኞቹን በመጐብኘት ላይ ሣለ ወደ ጌታው ደስታ ገባ፡፡በሥርዓተ ቀብሩ ላይ የናፖሊ /ኢጣሊያ/ ከተማ ሰዎች እንዲህ አሉ /ዓለም አንድ ቅዱስ ሰው ስላጣች እናለቅሳለን፣ ናፖሊ የመልካም ነገሮች ሁሉ ምሳሌ የሆነውን አጥታለችና ምስኪን ሕመምተኛ ድሆች ሁሉንም ነገር አጥተዋል፡፡/ የቅዱስ ዮሴፍ ምስካቲ ብፅዕና የታወጀው እ.ኤ.አ ሕዳር 16 ቀን በር.ሊ.ጳ. ጳውሎስ 6ኛ ሲሆን ቅድስናው የታወጀው በብፁዕ ር.ሊ.ጳ. ዮሐንስ ጳውሎስ ዳግማዊ ጥቅምት 25 ቀን 1987 ዓ.ም ነው፡፡",msg)&Bot.editInlineKeyboard(b,msg)
