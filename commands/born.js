exports.run = (client, message, args) => {
  message.reply(`Your account was born at ${message.author.createdAt}`);
};
