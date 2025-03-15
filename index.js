console.log('index.js is loaded successfully');


// i am setting this as default thing and will change and i can do this first block.forEach as function which will run initially 
let blocks = document.querySelectorAll('.blocks');
blocks.forEach((value,index) => {
    value.classList.add(`block${index+1}`);
    Activeblock = (element,className) => {
        element.classList.add(className)
        //classname should be string and should be like '.Active.whiteP' or ".Active.blackP"
    }
    let A = index+1; 
    let i = 0;
    for(i ; i<=7;i++){
        if(i%2 === 0)
        {
            if(A>=((8*i) + 1) && A<=(8*(i+1))) 
                {
                    if(A%2 ===0)
                    {value.classList.add('dark_block')}
                }
        }

        if(i%2 !== 0 )
        {
            if(A>=((8*i) + 1) && A<=(8*(i+1))) 
                {
                    if(A%2 !==0)
                    value.classList.add('dark_block')
                }
        }

        if(A<=16 && A>=1){
            Activeblock(value,'Active');
            Activeblock(value,'whiteP')

        }

        if(A<=64 && A>=49){
            Activeblock(value,'Active');
            Activeblock(value,'blackP')
        }

        if(A===1){Activeblock(value,'El')};
        if(A===8){Activeblock(value,'El')}
        if(A===57){Activeblock(value,'El')}
        if(A===64){Activeblock(value,'El')}

        if(A===2){Activeblock(value,'Hr')};
        if(A===7){Activeblock(value,'Hr')}
        if(A===58){Activeblock(value,'Hr')}
        if(A===63){Activeblock(value,'Hr')}

        if(A===3){Activeblock(value,'Cm')};
        if(A===6){Activeblock(value,'Cm')}
        if(A===59){Activeblock(value,'Cm')}
        if(A===62){Activeblock(value,'Cm')}

        if(A===1){Activeblock(value,'El1')};
        if(A===8){Activeblock(value,'El2')}
        if(A===57){Activeblock(value,'El1')}
        if(A===64){Activeblock(value,'El2')}

        if(A===2){Activeblock(value,'Hr1')};
        if(A===7){Activeblock(value,'Hr2')}
        if(A===58){Activeblock(value,'Hr1')}
        if(A===63){Activeblock(value,'Hr2')}

        if(A===3){Activeblock(value,'Cm1')};
        if(A===6){Activeblock(value,'Cm2')}
        if(A===59){Activeblock(value,'Cm1')}
        if(A===62){Activeblock(value,'Cm2')}

        if(A===4){Activeblock(value,'Kn')};
        if(A===60){Activeblock(value,'Kn')}
        if(A===61){Activeblock(value,'Qn')}
        if(A===5){Activeblock(value,'Qn')}

        if(A>=9 && A<=16){Activeblock(value,'Pw')};
        if(A===9){Activeblock(value,`Pw${A-8}`)}
        if(A===10){Activeblock(value,`Pw${A-8}`)}
        if(A===11){Activeblock(value,`Pw${A-8}`)}
        if(A===12){Activeblock(value,`Pw${A-8}`)}
        if(A===13){Activeblock(value,`Pw${A-8}`)}
        if(A===14){Activeblock(value,`Pw${A-8}`)}
        if(A===15){Activeblock(value,`Pw${A-8}`)}
        if(A===16){Activeblock(value,`Pw${A-8}`)}


        if(A>=49 && A<=56){Activeblock(value,'Pw')};
        if(A===49){Activeblock(value,`Pw${A-48}`)}
        if(A===50){Activeblock(value,`Pw${A-48}`)}
        if(A===51){Activeblock(value,`Pw${A-48}`)}
        if(A===52){Activeblock(value,`Pw${A-48}`)}
        if(A===53){Activeblock(value,`Pw${A-48}`)}
        if(A===54){Activeblock(value,`Pw${A-48}`)}
        if(A===55){Activeblock(value,`Pw${A-48}`)}
        if(A===56){Activeblock(value,`Pw${A-48}`)}



        value.classList.add('notClicked')

    }
})

//also add the class on clicked to track the hover effect 


let Peices = [
    {
        currentPosition : [this.defaultPosition] , id  : "E1",
        defaultPosition : 1,
        color : "white"
    },
    {
        currentPosition : [this.defaultPosition] , id : "H1",
        defaultPosition : 2,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "C1",
        defaultPosition : 3,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "K",
        defaultPosition : 4,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "Q",
        defaultPosition : 5,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "C2",
        defaultPosition : 6,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "H2",
        defaultPosition : 7,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "E2",
        defaultPosition : 8,
        color : "white"
    },
    {
        currentPosition : [this.defaultPosition] , id : "P1",
        defaultPosition : 9,
        color : "white"
    },
    {
        currentPosition : [this.defaultPosition] , id : "P2",
        defaultPosition : 10,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "P3",
        defaultPosition : 11,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "P4",
        defaultPosition : 12,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "P5",
        defaultPosition : 13,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "P6",
        defaultPosition : 14,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "P7",
        defaultPosition : 15,
        color : "white"
    },    {
        currentPosition : [this.defaultPosition] , id : "P8",
        defaultPosition : 16,
        color : "white"
    },
        {
        currentPosition : [this.defaultPosition] , id : "P1",
        defaultPosition : 49,
        color : "black"
    },
    {
        currentPosition : [this.defaultPosition] , id : "P2",
        defaultPosition : 50,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "P3",
        defaultPosition : 51,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "P4",
        defaultPosition : 52,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "P5",
        defaultPosition : 53,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "P6",
        defaultPosition : 54,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "P7",
        defaultPosition : 55,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "P8",
        defaultPosition : 56,
        color : "black"
    },
    {
        currentPosition : [this.defaultPosition] , id : "E1",
        defaultPosition : 57,
        color : "black"
    },
    {
        currentPosition : [this.defaultPosition] , id : "H1",
        defaultPosition : 58,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "C1",
        defaultPosition : 59,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "K",
        defaultPosition : 60,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "Q",
        defaultPosition : 61,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "C2",
        defaultPosition : 62,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "H2",
        defaultPosition : 63,
        color : "black"
    },    {
        currentPosition : [this.defaultPosition] , id : "E2",
        defaultPosition : 64,
        color : "black"
    },
]
//these coordinates are with respective to 61 !;
let X = [1,2,3,4,5,6,7,8];
let Y = [1,2,3,4,5,6,7,8];

// position will look something like this X[a],Y[b]

//first we will have to figure out how this thing will move 

AddImg = (element,color,type,) => {
    element.firstElementChild.setAttribute('src',`./svgs/${color}_${type}.svg`);
    //pass the color and type as string 
}

RemoveImg = (element) => {
    element.firstElementChild.setAttribute('src',"");
}

Activeblock = (element,className) => {
    element.classList.add(className)
    //classname should be string and should be like '.Active.whiteP' or ".Active.blackP"
}


Removeblock = (element,className) => {
    element.classList.remove(className)
    //classname should be string and should be like '.Active.whiteP.horse' or ".Active.blackP.horse"
}





document.querySelector('.testing').addEventListener('click',()=> {
    AddImg(document.querySelector('.testing'),"white","king")
})





//now we will have to make the logic of finding possible moves to go !

//if the position of pawn (white) is xA , yB then possible ways to go [xA,y(B-1)],[x(A+1),y(B-1)],[x(A-1),y(B-1)] and [xA,y(B-2)] if it is at its default position ;
//if the position of pawn (white) is xA , yB then possible ways to go [xA,y(B+1)],[x(A+1),y(B+1)],[x(A-1),y(B+1)] and [xA,y(B+2)] if it is at its default position ;


// if the position of the king is at xA, yB then it can move to these positions : [x(A+0),y(B+1)],[x(A+0),y(B-1)],[x(A+1),y(B+0)],[x(A-1),y(B+0)],[x(A+1),y(B+1)],[x(A+1),y(B-1)],[x(A+0),y(B+0)],[x(A+0),y(B+0)];


// only show the hover effect to those where elements are already placed !;
// first scan the positions where the peice can move and then render then colors 
// then you can focus on the other things such as maintaining the arrays 


// first make a function to scan on click and other like update information 


let Search = (a,b) => {
    let Arrayone = [];
    let P = [];
    if(a>=1 && a<=8 && b>=1 && b<=8){
     let JP = document.querySelectorAll('.blocks').forEach((value,index) => {
         if(Number(value.getAttribute("X")) === a){
            Arrayone.push(value);
        }

        if(Arrayone.length === 8){
            Arrayone.forEach((value,index) => {
                if(Number(value.getAttribute("Y")) === b)
                {
                    P.push(value);
                    return true
                }
            })
        } 
    });}
    else{
        P.push("Error : check your values !!!!!!!!!!!!!!!")
    }
    return P[0]
} 

//now i will have to make functions for the El / Hr / Cm / Kn / Qn / Pw so the can search and i can add two conditions for them 


const El = () => {
    
    document.querySelectorAll('.El').forEach((value,index) => {
        //does not matter weather it is white or black ;
        let El_X = Number(value.getAttribute("X"));
        let El_Y = Number(value.getAttribute("Y"));
        let ArrayofmovementsEl = []


        for(i=1;i<=8;i++)
        {
            if(i !== El_X)
                {
                 ArrayofmovementsEl.push(Search(i,El_Y))

                } 
        }

        for(i=1;i<=8;i++)
        {
            if(i !== El_Y)
                {
                    ArrayofmovementsEl.push(Search(El_X,i))
                } 
        }

        

    })
}

El();



document.querySelectorAll('.Active').forEach((value,index) => {
    value.addEventListener('click',()=> {
       // console.log(value.classList)
    })
})






















