const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUI1enJLNGJGdTR0U2VvY3l1My9lVW9JV0laeE1SdXhST09MdWtSeUFHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHpvQXJGS0ZrVVo3RWI1S0l2Q2tkV05qRzBWWHVKVTkwM1EvNzk0VjJBaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQjFQNFZxbisvWGZxWVhFOHFxcHBsN0IrQldPUVJndkExenBTU1NrbEVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0OEo4NUsxRDdYRXErY3lNTzVoQlVSL0V0dStFK2IrNlQwWWFPZnZyNXdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLajdyeGd2aS9JakhENEZhL3hMdE1oM3ROS0NJMWdUTjlTUFhKRUdER2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJZOTJlVFc3Qm84M0JoKzJLSWJtTEpTckVLMUZWL21tSWtoT0dyMFFMR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5aNkF6cjZXL1RGcjNsMytNanpuSE5veXg0YmhBaWxwTzZDZzlHeG9uRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVIwbVZzS2RONVM3RjVONzU4cUpncTBBVnZESWZFR045dUkvNVczMWxSND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAybEUxY2Y1Ylo2OFRwdnlzQk9QZEJuQ0wyYTcrU1JiK0w4WVdzNUMvWjFiRmtnRFcyUVR0OHg1a3lRNGdIZGlmcG81R1pzZENFRy9xY3Q1STdmaWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJ2RHV5Ly9RUHM1Ujdabm9hZ200ZUExcE1aM3BZeEQyeCtJaXVBL3R0WnBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwWUYwa3VHeVNmcXZQd1lBYUI1NGt3IiwicGhvbmVJZCI6IjhmMjY1NmQ3LTNkOWYtNGJmNS1hOWZmLWM0NGQ3ZWFkYjJkNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJld1dmNkdhOGdGWUJMNXNhRlNZaFJmeW4wMWs9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllyeEY5N1BlUytiMEFLdTJ5YXZycW5qZFE4dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xpd3MvOERFS1NYaUw4R0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVQMDBVY3ZQNkk2TnBFK0xxYTJHeTdjU1dDenhTcUhsdFJHcVh6OEhlUkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilk5WHAwMjY2UkpURUlhSFM3S2pibWVxSFh5N2pNYkNXbjQyUGxyQzZFSGtnL1d6RFpKTjRDMlpsblhKWGYyeW9KUjZlS09DZCtqRWFDbXgvVkpPVkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1YUgzTDNzbmc3SzZ3dnFTVlE4Zm1UOHdnYS90MkJwcXhiSVdFM1AyRE4xZUY3dkwyWk10N3lGZDN2ZGRLOVdwQUJDT1NvbDF6RjNFN3kyMWZwZzNndz09In0sIm1lIjp7ImlkIjoiOTQ3NTI2Nzc4MDQ6N0BzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MjY3NzgwNDo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVUOU5GSEx6K2lPamFSUGk2bXRoc3UzRWxnczhVcWg1YlVScWw4L0Iza1MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDI4NjczNzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVgzIn0=",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
