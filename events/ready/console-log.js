module.exports = (client) => {
    const { ActivityType } = require("discord.js");
    const pogger = require("pogger");
    
      pogger.success(
        "[CLIENT]",
        `Logged in as ${client.user.tag}
    Version: ${require("../../package.json").version}
    Node.js: ${process.version}
    `,
      );
      client.user.setPresence({
        activities: [
          {
            name: "Discord.js v14",
            type: ActivityType.Playing,
            // url: "URL HERE",
          },
        ],
        status: "online",
      });
  };