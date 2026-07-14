const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/generate", async (req,res)=>{

const idea=req.body.idea;


const plan = `
🚀 AI BUSINESS FACTORY

Business Idea:
${idea}

🏷 Brand Names:
${idea} Pro
${idea} Hub
Future ${idea}

🎯 Target Customers:
People who need a faster and easier solution.

🌐 Website:
Landing page
Booking system
Payments
Customer reviews

📣 Marketing:
Facebook
TikTok
Google
Email campaigns

💰 Revenue:
Subscriptions
Packages
Premium upgrades

🚀 Launch Plan:
Day 1: Brand
Day 2: Website
Day 3: Marketing
Day 7: First customers
`;


res.json({
result:plan
});


});


app.listen(8080,()=>{
console.log("AI Factory running");
});