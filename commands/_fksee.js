/*CMD
  command: /fksee
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
[{title:"ተመለስ",command:"/mztxt2"}]
]

Bot.editMessage("❤️ፍቅርህን አየሁት❤️\n\nዛሬ በከፍታ ቦታ አቁመኸኛል \nከጠራሀቸው ጋር አደባልቀኸኛል\nበልቤ ታፍኖ የኖረው ፍቅርህ\nአሸንፎኝ ወቷል ይኸው ላሳይህ\n\nፍቅርህን አየሁት ወንዙን ሲያሻግረኝ\nፍቅርህን አየሁት ተራራን ሲያወጣኝ\nሁሉንም ችዬ እንዳልፍ ትእግስት ሲያስተምረኝ\nእንደማላውቅ ሆኜ ባጠገብህ ሳልፍ\nአልታዘዝ ብዬ ቃልህን ስተላለፍ\nወደ እውነት መንገድ ሲመራኝ አየሁት\nፍቅርህ  ነው ደግፎኝ መከራን ያለፍኩት\n\nመውደድ መዋደድን ትርጉሙን ሳላውቀው\nወንድሜን ስጠላ ጉዱፉን እያየሁ\nልቤ ዘልቆ ገባ እረቂቁ ፍቅርህ\nትእቢቴን ሰበረው ተንበረከኩልህ\n\nእምነቴ ጥልቅ ነው ተራራን ያፈረሳል\nተስፋዬም ብርቱ ነው መንግስት ያወረሰኛል\nብዬ ስመካ ነው እንግዲህ ሁሉ አለኝ\nፍቅርነው ሚበልጠው ብለህ ያስተማርከኝ\n\nየሱሴ ወዶኛል የሱም አድርጎኛል\nብዬ እንድመሰክር አንደበቴን ሞልቷል\nከማር የጣፈጠው ፍቅርህ ለማረከኝ\nእጆቼን አነሳሁ አባቴም ባረከኝ\n\nስለወደድከኝ ነው መጽናኛ የሰጠኸኝ\nማርያም እመቤቴን እናት ያረክልኝ\nእንደወደድኳቹ ተዋደዱ ብለህ\nበኔ ውስጥ ታተሟል የማልቀው ፍቅርህ\n\n እኔስ ኮራሁብህ ሰይጣንም አፈረ\nትእቢተኛው ልቤ በፍቅርህ ታሰረ\nየታወረው አይኔ ብርሀንን ለየ\nትልቅ ድንቅ ስራህ ዛሬ በእኔ ታየ",msg)&Bot.editInlineKeyboard(b,msg)
