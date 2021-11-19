'use strict';

let knygos={

    mokslinine:{

        knyga1:{
            
            isbn: 9782123457703,
            price: 5.00,
            year: 2020,
            title: "goodmorning",
            pagecount: 100},

        knyga2:{
            isbn: 9782663456803,
            price: 6.00,
            year: 2018,
            title: "goodevening",
            pagecount: 200},

        knyga3:{
            isbn: 9782688456803,
            price: 7.00,
            year: 2000,
            title :"goodnight",
            pagecount: 300}

    },
    veiksmo:{

        knyga1:{
            isbn:9282124116803,
            price:22.00,
            year:2010,
            title:"badmorning",
            pagecount:150},

        knyga2:{
            isbn:9282124556803,
            price:20.00,
            year:2005,
            title:"badevening",
            pagecount:110},

        knyga3:{
            isbn:978234456803,
            price:2.00,
            year:2018,
            title:"badnight",
            pagecount:165}


    },
    romanas:{

        knyga1:{
            isbn:9782123462803,
            price:51.00,
            year:2021,
            title:"mehmorning",
            pagecount:360},

        knyga2:{
            isbn:9782125552803,
            price:7.00,
            year:2015,
            title:"mehevening",
            pagecount:90},

        knyga3:{
            isbn:9744123462803,
            price:6.00,
            year:2018,
            title:"mehnight",
            pagecount:120},

    }

};

    for(let i in knygos){

        for(let j in knygos[i]){

            console.log(knygos[i][j].filter());

        }

    }

    /*if(knygos.mokslinine.knyga1.year == 2018){

        console.table(knygos.mokslinine.knyga1);

    }
    if(knygos.mokslinine.knyga2.year == 2018){

        console.table(knygos.mokslinine.knyga2);

    }
    if(knygos.mokslinine.knyga3.year == 2018){

        console.table(knygos.mokslinine.knyga3);

    }

    if(knygos.veiksmo.knyga1.year == 2018){

        console.table(knygos.veiksmo.knyga1);

    }
    if(knygos.veiksmo.knyga2.year == 2018){

        console.table(knygos.veiksmo.knyga2);

    }
    if(knygos.veiksmo.knyga3.year == 2018){

        console.table(knygos.veiksmo.knyga3);

    }

    if(knygos.romanas.knyga1.year == 2018){

        console.table(knygos.romanas.knyga1);

    }
    if(knygos.romanas.knyga2.year == 2018){

        console.table(knygos.romanas.knyga2);

    }
    if(knygos.romanas.knyga3.year == 2018){

        console.table(knygos.romanas.knyga3);

    }*/


