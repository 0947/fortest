/*CMD
  command: /pea
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
[{title:"BACK",command:"/enart"},{title:"HOME",command:"/myin"}]
]

Bot.editMessage("Promises of Eucharistic Adoration\n \nJesus said to Catalina: “I promise to the soul that visits Me frequently in this Sacrament of Love, that I will receive it affectionately together with all the Blessed and the Angels in Heaven, and that each of its visits will be written down in the Book of its Life and I will grant to it:\n \n1. Every petition that is presented before the Altar of God in favor of the Church, the Pope and consecrated souls.\n \n2. The annulment of Satan’s power over its person and its loved ones.\n \n3. Special protection in case of earthquakes, hurricanes and other natural disasters which otherwise would affect it.\n \n4. It will be lovingly withdrawn from the world and its attrac­tions, which are the cause of perdition.\n \n5. The elevation of its soul, desiring to attain sanctification, in virtuous eternal contemplation of My Face.\n \n6. Relief of its loved ones from the pains of Purgatory.\n \n7. My blessing on every material and spiritual project it under­takes, if they are for the good of its own soul.\n \n8. The receiving of My visit in company with My Mother at the moment of its death.\n \n9. To listen to and to look after the needs of the persons for whom it prays.\n \n10. The intercession of the Saints and Angels at the hour of its death, in order to diminish temporal punishment.\n \n11. That My Love will cause holy vocations consecrated to God among its loved ones and friends.\n \n12. That the soul which preserves a genuine devotion to My Pres­ence in the Eucharist will not be condemned or die without the Sacraments of the Church.\n \n“To the priests and nuns that propagate the devotion of Adora­tion, I will grant many special graces, the complete recognition of their sins and the Grace to amend them.  I will help them to form communities of devout and holy faithful, and they will attain many privileges.”\n \n“I promise these things to all persons, under only two conditions which are the fruit of genuine love towards My Real Presence in the Eucharist, and which are absolutely indispensable for My promises to become a reality in their lives:\n \na) That they strive to preserve the dignity of My Altars.\n \nb) That they be merciful towards their neighbor.",msg)&Bot.editInlineKeyboard(b,msg)
