const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="vyankateshlegend@gmail.com"
global.location="Delhi,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "....";
global.website=process.env.GURL || ".." ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/RcDjGky/Images-3.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "LEGEND" 


global.devs = "919403621818" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919403621818,48459436486";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "48459436486";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_44_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICA3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDk4LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZlhzaU13SlZqaHdDZzVjMURsd3RUbUkxaitpM3pUNXhiWWFaa045ZmZ2TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODcyOTc1MTczMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDhFRTk2MDBCQkQ3QTIzMzA1MjQ1NDRGMkIyMDVCMkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODU5NDU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg3Mjk3NTE3MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg1OTU5MTRBNTY4RUYyNDlEMTVBODVCNDVGNDdCODczXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg1OTQ1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItR0toRG51VVRYU2pjRmc5WkJYd3ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2MzFiMTlhLTVhOGYtNDY2Yy1iMTJjLTQwNWMwNTc2ZTNiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDE5MyxcbiAgICAgIDEyLFxuICAgICAgMjM5LFxuICAgICAgMTcxLFxuICAgICAgNzUsXG4gICAgICA5NixcbiAgICAgIDM4LFxuICAgICAgMzIsXG4gICAgICAyNDAsXG4gICAgICAzMixcbiAgICAgIDIxMyxcbiAgICAgIDUzLFxuICAgICAgMTM0LFxuICAgICAgNzksXG4gICAgICAxMixcbiAgICAgIDEyNCxcbiAgICAgIDE3MyxcbiAgICAgIDM3LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgODMsXG4gICAgICAyMTAsXG4gICAgICA2LFxuICAgICAgMTI4LFxuICAgICAgMjA5LFxuICAgICAgMjQsXG4gICAgICAxNDQsXG4gICAgICA4NSxcbiAgICAgIDg2LFxuICAgICAgMTMxLFxuICAgICAgMTA1LFxuICAgICAgNjAsXG4gICAgICAxOTgsXG4gICAgICAxNTcsXG4gICAgICAyMTksXG4gICAgICAxMzgsXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4VzM4MUhORlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDg3Mjk3NTE3MzE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MDE5MTUyNzc1OTk1MzoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCU8J2QjfCdkIrwnZCN8J2QjvCdkJbwnZCNXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEhRNDFBUStmR0x0QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLQy9SRVRQa0tMYnFVVzRwSHczZnVTcTV3NUJiYW5CQ00zSzF3RkJjUUhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJlMSsyOE5NMExzQXRMdWtCVi91TzlxRFYvd2F2NDVtKzFscVV1UjhTZkdIcDJHNkFXTTV2UThvSkVUNDVGVzFKTVlHZ0xKYituK2RvdjRqZ3EvU0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImExTms1VG4waGl2bE92OWdsd2pUV3N0UERLajNsYW1SNXZ5TU5WVHU2emF2YmR0bzFHTUlVS1JnUjgrUndGbkxTMFNJVVlKMFdVdEFnSUNvVDdZekNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ4NzI5NzUxNzMxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NTk0NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVHNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Ucy5qc29uIjogIntcImtleURhdGFcIjpcIkF5eDVTZFZaaUR5UXFkMkh1S2NsbnBxZkhtTkVjNDFHamxqOXdCK2ZNWHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NDA0NDY1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2NzA3NDkxOTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "UNKNOWN" , // 
 
  author : process.env.PACK_AUTHER|| "UNKNOWN",
  packname: process.env.PACK_NAME || "LEGEND",
  botname : process.env.BOT_NAME  || "UNKNOWN",
  ownername:process.env.OWNER_NAME|| "LEGEND",


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
