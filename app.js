//npm i env-cmd
//npm i @slack/bolt
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.event("app_home_opened", ({ event, say }) => {
  say(`Hello world1, <@${event}>!`);
});

app.message("hello", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});

console.log(
  process.env.SLACK_SIGNING_SECRET,
  "+++++",
  process.env.SLACK_BOT_TOKEN
);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 80);

  console.log("⚡️ Bolt app is running 80!");
})();
