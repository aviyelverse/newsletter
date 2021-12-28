const express = require("express");
const path = require("path");
const app = express();
const port = 9000;

const staticPath = path.join(__dirname, "../views/");
// app.use(express.static(staticPath));

app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index.hbs", {
    aviyelNewsletterTitle: "Aviyel Newsletter",
    issueAndDate: "Issue 3 | 06/01/2022",
    gardeningBigImage:
      "https://user-images.githubusercontent.com/37651620/147542872-e3499b05-c33a-484c-952f-c850b361f05f.png",
    readMainTitle: "READ",
    readImageUrl:
      "https://user-images.githubusercontent.com/37651620/147545716-938a14be-47b4-4cc9-8b8c-1502e229e6f4.png",
    readArticleTitle: "Build and Incentivise Strong Communities",
    readArticleDescription:
      "Tools to grow and incentivise a strong community around your open source projects. Aviyel ensures a seamless exchange of knowledge and ideas with the community.",
    amaMainTitle: "AMA",
    amaImageUrl:
      "https://user-images.githubusercontent.com/37651620/147545522-a3398a1a-6b3c-4a50-b7f6-7fefe21e0ab4.png",
    amaArticleTitle: "Showcase Open Source Projects",
    watchmainTitle: "WATCH",
    watchImageUrl:
      "https://user-images.githubusercontent.com/37651620/147545806-8fc8a026-640e-4f12-a672-eb082789c470.png",
    watchTitle: "Up to Date Code. Latest and the Best",
    watchDescription:
      "Aviyel works with the creators and the contributors to get you up to date code with the highest quality and security compliances.",
    learnMainTitle: "LEARN",
    learnImageUrl:
      "https://user-images.githubusercontent.com/37651620/147545803-ee37a315-b4c6-42b2-885b-5a88970d2b35.png",
    learnArticleTitle: "Share and Learn",
    learnArticleDescription:
      "We ensure that your knowledge is hosted and shared seamlessly across the community. Aviyel is a platform to teach, learn, and earn.",

    manifestoArticleUrl:
      "https://aviyel.com/post/33/manifesto-aviyel?utm_source=mailjet&utm_medium=articles_faq&utm_campaign=post_33",
  });
});

app.get("/", (req, res) => {
  res.spend("Hello there");
});

app.listen(port, () => {
  console.log(`${port}`);
});
