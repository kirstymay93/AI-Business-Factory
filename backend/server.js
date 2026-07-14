const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", (req,res)=>{

const idea = req.body.idea;

res.json({
result:
"🚀 Business Plan\n\nIdea: " + idea +
"\n\n✅ Brand\n✅ Website\n✅ Marketing\n✅ Revenue Plan"
});

});

app.listen(8080,()=>{
console.log("AI Factory running");
});