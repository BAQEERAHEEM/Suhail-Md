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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdHVHM3Rmh0cTd5MVptN1N2aHJzS1YxNXVVOVh3RGRycms5Skl2bmFwY1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2OTEzODA4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0RDc4MEFGNTQwNEZBRkZCNDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTQyNDU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2OTEzODA4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGNjkxMjc5RDU3NjBDMTQyODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTQyNDYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1aM2N3TXA5U0FXY0xaQjJXUjNsdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTZhNDA2YTItMmE0MS00ZDA4LWFiN2MtYzhhNzc4ZDA2NGY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDY0LFxuICAgICAgMjM5LFxuICAgICAgMjIzLFxuICAgICAgMjQyLFxuICAgICAgNTUsXG4gICAgICAyNDEsXG4gICAgICAyMjIsXG4gICAgICAxODAsXG4gICAgICAyMSxcbiAgICAgIDIyMyxcbiAgICAgIDMyLFxuICAgICAgNTEsXG4gICAgICA3NSxcbiAgICAgIDQ2LFxuICAgICAgOTUsXG4gICAgICAxMjEsXG4gICAgICA4OSxcbiAgICAgIDE5NyxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICA3OCxcbiAgICAgIDI1MixcbiAgICAgIDk1LFxuICAgICAgMzEsXG4gICAgICAxOTcsXG4gICAgICAxMTcsXG4gICAgICAyMSxcbiAgICAgIDEzOCxcbiAgICAgIDMzLFxuICAgICAgNzEsXG4gICAgICAxMTMsXG4gICAgICA3OCxcbiAgICAgIDMsXG4gICAgICAxMzMsXG4gICAgICAxMCxcbiAgICAgIDYzLFxuICAgICAgMTM1LFxuICAgICAgMjIsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcW95NjRFRUxUNmtMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNUYjJsT0U0S3cwQUFMNEhHTmxkdlRTZ0k3MXplVnVVem5ITFRtZWh5a1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiekQveHpHUEdEaHZZby9uRmVjMmFpTmtxVUJKeCt2a1BDWWZIdlZxY1d1NTY4alQ5RFFxYjVzTzAvdThMRHFHd2RCT1I2Zk5GTW9HbDBVVVhkdngzalE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiLzFqZktxR1pOQkVrT211WisrV1pCbWlVbGR6Qk5PM0Y0MW9iNHo1aHg0WDFnL3IzVG9SMllGL2dEYXZvYUwrbVVYY0FHbjM1bjFUZDc0ZDNEbHBGQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY5MTM4MDg2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDIyMzEzNzczNDg1OToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlDhurzFgcWyTcOP8J+lgPCfpbfwn6aFXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY5MTM4MDg2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NDI0NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMYWNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxhYy5qc29uIjogIntcImtleURhdGFcIjpcIkhoN29PQTFoSElQa0dxTzhFTlNsd25Ib3liRE9zWlU4Qnc0aHpubHppNlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3MTQ0NDg0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5OTQyNDU2Mzg2XCJ9Igp9"  // PUT your SESSION_ID 


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
