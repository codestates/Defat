require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

const authRouter = require('./routes/AuthenticationRouter')
// const mainRouter = require('./routes/MainRouter')
const mealkitRouter = require('./routes/MealkitRouter')
const todayMenuRouter = require('./routes/Today_menuRouter')
const userRouter = require('./routes/UserRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

app.use(cookieParser());

app.use('/auth', authRouter);
// app.use('/main', mainRouter);
app.use('/mealkit', mealkitRouter);
app.use('/todaymenu', todayMenuRouter);
app.use('/user',userRouter) 


const PORT = process.env.HTTP_PORT || 8080;


app.listen(PORT, () => console.log("서버 정상 작동"));

