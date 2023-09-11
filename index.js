import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let txt="";

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req,res)=>{
  console.log(req.body);
  res.render("index.ejs",{content:req.body});
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});