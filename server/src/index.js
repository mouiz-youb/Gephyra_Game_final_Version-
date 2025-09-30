import express from 'express';
import AuthRouter from "./router/AuthRouter.js"
import cors from "cors"
const app = express();
const port  = 5000;
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // allow frontend dev server
}));
app.use("/auth", AuthRouter);
app.get('/', (req, res) => {
    res.send('listen to hi !');
});
app.get('/test', (req, res) => {
    res.send('listenasdkjsaldj;lsakd;ksa;lkd;lsad to hi !');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});