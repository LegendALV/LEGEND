const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_26_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUWE0ZUNValhsR1p1Vnp5TXZmWmkzUlRINnFIcWZnS3lUbVlSd2pJRUFWYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc1NTk0MTQxODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4NDFEQUIyRUVDOEI1ODczNDEyODVDRDhDMzk1M0VDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc1NzU2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzU1OTQxNDE4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjRCMkI1MTE2QUU3NEE1MjZCRkZFNjZFNzJDQ0Y0REZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzU3NTY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NTU5NDE0MTgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5N0I3QkMzQjJBOTE5M0YxOUU2QjRFQUM0MURGN0Q2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3NTc1NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTm1sMTRoVjNUVktiM3VVVExWamhoUVwiLFxuICBcInBob25lSWRcIjogXCI4YmM3Mjc4My0xZmQ1LTQ3OTMtYjg3YS0wN2VhZjk5ZWM3MDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMjExLFxuICAgICAgMTE4LFxuICAgICAgMjA0LFxuICAgICAgMTUsXG4gICAgICAyMzgsXG4gICAgICAxMzksXG4gICAgICAxNixcbiAgICAgIDkyLFxuICAgICAgNzksXG4gICAgICAxMzUsXG4gICAgICAyMSxcbiAgICAgIDIxOCxcbiAgICAgIDcyLFxuICAgICAgMTQyLFxuICAgICAgMjQ2LFxuICAgICAgMjQxLFxuICAgICAgMTIwLFxuICAgICAgNDgsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTcyLFxuICAgICAgOTcsXG4gICAgICAxNjAsXG4gICAgICAxMjksXG4gICAgICAxMTcsXG4gICAgICAyMyxcbiAgICAgIDEwMyxcbiAgICAgIDgxLFxuICAgICAgMTUsXG4gICAgICAyNDksXG4gICAgICA1MCxcbiAgICAgIDg1LFxuICAgICAgMTEsXG4gICAgICAxODQsXG4gICAgICA5NCxcbiAgICAgIDE5MixcbiAgICAgIDI0NyxcbiAgICAgIDE0NSxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJUQzNDNzVaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc1NTk0MTQxODI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI0OTIzNjEyMTAyODQ3OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQXJ5YVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvUW11VUNFUGJWaGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWxqRFZLZ0phNHdtaVBDQVdMOGFuUytRVlpFbHVSTitjN2E0OVVoYzZRcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJicm1zTUxLN3hHdkhtZm5tNXJncGN5a0tQaXF0bFplQWlPUHBxUDVZSXhwZ1o5NnhXNzJUL2tOM1I3UnJQN2tZRHRVSWNETnZBMHlrVExrYzNLWWpCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHM1c1M2ZPQUczVlU3d1dFUWV2bFRZcW9ScGlZNVAycElBZGNlTThEeUpCdXdNSzRKeVVodGVGWEM4N3RUNXh0Wk42VEhoakpjUS9iRU4wazV6TkFndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc1NTk0MTQxODI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NTc1NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMnRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMydC5qc29uIjogIntcImtleURhdGFcIjpcImNxd3RTZ0drNmRvRTVNMXlaMy9XbTlRZXJlR3pHWXpQY0RLTlF6MWF5dHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzQ5MTE5NTAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3NTc1NjI4NDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
