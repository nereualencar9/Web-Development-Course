import express, { response } from "express";

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});

app.get("/", (_request, response) => {
    response.json({ class: "Outra coisa"});
});