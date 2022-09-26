import express from "express";
import items from "./routes/products.js"

const app = express()

const port = 3000

app.use("/products", items)

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})