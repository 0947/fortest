/*CMD
  command: /ca3
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
[{title:"BACK",command:"/4c"},{title:"HOME",command:"/myin"}]
]

Bot.editMessage("🍃The Church Is Catholic🍃\n (Matthew 28:19-20; Revelation 5:9-10; CCC 830-856)  \nJesus’ Church is called catholic (“universal” in Greek) because it is His gift to all  \npeople. He told His apostles to go throughout the world and make disciples of “all  \nnations” (Matthew 28:19-20).\nFor 2,000 years the Catholic Church has carried out this mission, preaching the good  \nnews that Christ died for all men and that He wants all of us to be members of his  \nuniversal family (Galatians 3:28).  \nToday, the Catholic Church is found in every country of the world and is still sending  \nout missionaries to “make disciples of all nations” (Matthew 28:19).  \nThe Church Jesus established was known by its most common title, “the Catholic  \nChurch,” at least as early as the year 107, when Ignatius of Antioch used that title to  \ndescribe the one Church Jesus founded. The title apparently was old in Ignatius’s  \ntime, which means it probably went all the way back to the time of the apostles",msg)&Bot.editInlineKeyboard(b,msg)
