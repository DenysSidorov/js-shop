import mongoose from 'mongoose';
import random from "../../../src/components/shop/helpers/lib/randomArrElement";
import Good from "../../../app-server/shop/models/good";

export default (req, resp, next)=> {
    var name = {}
    var count = 0;
    var interval = setInterval(async()=> {
        if (count > 200){
            clearInterval(interval)
            resp.json(name);
        }
        var id = mongoose.Types.ObjectId();
        var tempName = {
            "_id": id,
            "name": random(['Belveta', 'Nuri', 'Chikago', 'Nice', 'Zelveta', 'Hori', 'Pint', 'CLS2', 'Nektar', 'Geltrino']),
            "model": random(['3000', 'Summer', 'Superstar', 'BoniClayd', 'Nice', 'Davinchi', 'Surinami', 'Eventador', 'Harmony', 'Colt']),
            "size": [random([28, 32, 30, 34, 36, 38, 40, 42]), random([38, 34])],
            "comments": [
                {
                    "_id": 1,
                    "message": "Хороший практичный портфель, купил себе и очень остался доволен!"
                },
                {
                    "_id": 2,
                    "message": "Качество нормальное, взял ездить на работу, уже пол года служит. Все отлично"
                }
            ],
            "price": random([680, 809, 700, 1100, 2300, 500, 1300, 456, 6050, 305, 780, 670, 950, 900, 800, 890]),
            "photo": [
                random(["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png", "/8.png", "/9.png", "/10.png", "/11.png", "/12.png", "/13.png", "/14.png", "/15.png", "/16.png", "/17.png", "/18.png", "/19.png"]),
                "/7.png",
                "/8.png",
                "/9.png"
            ],
            "count": random([1, 2, 3, 4, 5, 22]),
            "views": random([4, 66, 45, 12, 67, 89, 56, 4, 54, 76, 8, 897, 3, 45, 34, 213, 45, 78, 34, 23, 45, 34, 23, 5, 27, 73, 8, 5869, 36, 26]),
            "code": "68000",
            "desc-short": "Мужской портфель, подходит как для школы  и для работы",
            "desc-full": "Портфель на все случаи жизни. Удобный, легкий, вместительный. Мужской портфель, подходит как для школы та и для работы",
            "tags": [random([
                "портфель",
                "черный",
                "мужской",
                "город",
                "школа",
                "работа",
                "спорт"
            ])],
            "sail": random([5, 10, 15, 20]),
            "isNew": random([true, false]),
            "category": [random(["мужской", "городской", "школа", 'детский', 'практичный', 'женский'])],
            "isExists": random([true, false]),
            "isNewGood": random([true, false]),
            "producer": random(["China", "Ukraine", "Italy", "Germany", "France"])
        };
        try {
            name = await Good.create(
              tempName
            );
            count++
        } catch ({message}) {
            return next({
                status: 400,
                message
            });
        }
    }, 300)
}