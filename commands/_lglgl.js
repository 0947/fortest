/*CMD
  command: /lglgl
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

Bot.editMessage("🎤️ላገልግለው🎤\n\nላገልግለው ከትላንቱ ይልቅ\nእኔ ደስ ይለኛል እ/ር ሲተልቅ 2\nላገልግለው ከትላንቱ ይልቅ\nእንዴት ደስያሰኛል እ/ር ሲተልቅ 2\n\n1⃣አካላቴ ንቁዎች ለርሱ እንዴት ይዝላሉ\nመታደል ነው ማመስገን እ/ርን ይላሉ\nበከበሮ ውብ ዜማ በሽብሸባ ተዋዝቶ\nዛሬም ልዘምርለት ልቤ በትላንቱ መች ረክቶ\n\n2⃣ከፊት ለፊቱ ቆሜ በመዝሙሬ ሳመልከው\nገጽታውን እያየሁ በደስታ እሞላለሁ\nኖሬስ አይጓደለው ሳይነሳ አምላኬ \nአከብረዋለሁ ገና ገና መች አበቃሁ ተርኬ\n\n3⃣እስኪ ጊዜው አትለፍ እ/ርን ሳልጠራ\nአላውቅም ሌላ ደስታ እኔ ይህን ሳልሰራ\nዛሬ አዲስን ነገር ይኸው ይዤለታለሁ\nአቤት ደስታውን ሳስብ ሀሴት አደርጋለሁ እረካለሁ",msg)&Bot.editInlineKeyboard(b,msg)
