require('dotenv').config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';

//Database Connection
import ConnectDb from './database/DBConnection/conn';

//config
import googleAuthConfig from "./Config/google.config";
import routeConfig from "./Config/route.config";

//API integration
import Auth from './API/Auth/index';
import User from './API/User/index';
import Restaurant from './API/Restaurant/index';
import Food from './API/Food/index';
import Menu from './API/Menu/index';
import Image from './API/Image/index';
import MenuImage from './API/MenuImage/index';
import Review from './API/Review/index';
import Order from './API/Order/index';

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extrended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(cookieParser());
zomato.use(passport.initialize());

//passport config
googleAuthConfig(passport);
routeConfig(passport);

zomato.use("/auth", Auth);
zomato.use("/user", User);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/menuimage", MenuImage);
zomato.use("/review", Review);
zomato.use("/order", Order);

zomato.get('/', (req, res) => res.json({ message: "yay! we did it." }));

zomato.listen(process.env.PORT, () => {
    if (ConnectDb()) {
        console.log("Server is running and connected!");
    } else {
        console.log("Db connect to failed!");
    }
});    