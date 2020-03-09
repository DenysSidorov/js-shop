export default  (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//var port = ['портфель', 'сумка', 'накидка' , 'рюкзак']
//port[selfRandom(0, port.length-1)]
//"рюкзак"