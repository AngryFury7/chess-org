// this file contains information about the different types of movement of the peices and the working of the Peices 


export let Search = (a,b) => {
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




 
//----------------------------------------------------------------------------------------------------------------------------------

export const Cm = () => {
    document.querySelectorAll(".Cm").forEach((value,index) => {
        let Cm_X = Number(value.getAttribute("X"));
        let Cm_Y = Number(value.getAttribute("Y"));
        
        

        let ArrayofmovementsCm_TR= []; //done 
        let TRX = Cm_X ; 
        let TRY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            TRX = TRX + 1 ;     TRY = TRY + 1 ;
            if(TRX > 8 || TRY > 8){break}else{
            ArrayofmovementsCm_TR.push({x : TRX , y : TRY})}
        }

        let ArrayofmovementsCm_BR= [];  //done 
        let BRX = Cm_X ; 
        let BRY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            BRX = BRX + 1 ;
            BRY = BRY -1  ;
            if(BRX > 8 || BRY < 1){break}else{
            ArrayofmovementsCm_BR.push({x : BRX , y : BRY})}
        }



        let ArrayofmovementsCm_TL= [];  
        let TLX = Cm_X ; 
        let TLY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            TLX = TLX -1  ;
            TLY = TLY + 1  ;
            if(TLX < 1 || TLY > 8){break}else{
            ArrayofmovementsCm_TL.push({x : TLX , y : TLY})}
        }

        let ArrayofmovementsCm_BL= [];   
        let BLX = Cm_X ; 
        let BLY = Cm_Y ;
        for(let i = 1 ; i <= 7 ; i++)
        {
            BLX = BLX -1   ;
            BLY = BLY - 1  ;
            if(BLX < 1 || BLY < 1){break}else{
            ArrayofmovementsCm_BL.push({x : BLX , y : BLY})}
        }



        let breakerCm = (Arrayji,colorI) => {
            if(Arrayji.length !== 0){
                for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                {
                    if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                        {
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                        }

                        break 
                    }else{
                        Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                    }
                }
            }
        }


        value.addEventListener('click',()=> {

            if( !value.classList.contains("ActiveA") || !value.classList.contains("Cm"))
            {
                return 
            }
            cleanUp();

            if(value.classList.contains("whiteP")){
                breakerCm(ArrayofmovementsCm_TR,"blackP");
                breakerCm(ArrayofmovementsCm_BR,"blackP")
                breakerCm(ArrayofmovementsCm_TL,"blackP")
                breakerCm(ArrayofmovementsCm_BL,"blackP");
            }

            if(value.classList.contains("blackP")){
                breakerCm(ArrayofmovementsCm_TR,"whiteP");
                breakerCm(ArrayofmovementsCm_BR,"whiteP")
                breakerCm(ArrayofmovementsCm_TL,"whiteP")
                breakerCm(ArrayofmovementsCm_BL,"whiteP");
            }


        })




    })
}



//----------------------------------------------------------------------------------------------------------------------------------
export const  Qn = () => {
document.querySelectorAll('.Qn').forEach((value,index)=> {
    let Qn_X = Number(value.getAttribute("X"))
    let Qn_Y = Number(value.getAttribute("Y"))



    let ArrayofmovementsQn_TR= []; //done 
    let TRX = Qn_X ; 
    let TRY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        TRX = TRX + 1 ;
        TRY = TRY + 1 ;
        if(TRX > 8 || TRY > 8){break}else{
        ArrayofmovementsQn_TR.push({x : TRX , y : TRY})}
    }

    let ArrayofmovementsQn_BR= [];  //done 
    let BRX = Qn_X ; 
    let BRY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        BRX = BRX + 1 ;
        BRY = BRY -1  ;
        if(BRX > 8 || BRY < 1){break}else{
        ArrayofmovementsQn_BR.push({x : BRX , y : BRY})}
    }



    let ArrayofmovementsQn_TL= [];  
    let TLX = Qn_X ; 
    let TLY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        TLX = TLX -1  ;
        TLY = TLY + 1  ;
        if(TLX < 1 || TLY > 8){break}else{
        ArrayofmovementsQn_TL.push({x : TLX , y : TLY})}
    }

    let ArrayofmovementsQn_BL= [];  //done 
    let BLX = Qn_X ; 
    let BLY = Qn_Y ;
    for(let i = 1 ; i <= 7 ; i++)
    {
        BLX = BLX -1   ;
        BLY = BLY - 1  ;
        if(BLX < 1 || BLY < 1){break}else{
        ArrayofmovementsQn_BL.push({x : BLX , y : BLY})}
    }

    let ArrayofmovementsQn_top = [];
    let T = Qn_Y;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        T = T+1 ;
        
        if(T>8){break}else{ArrayofmovementsQn_top.push({x : Qn_X , y : T })}
    }

    let ArrayofmovementsQn_bottom = [];
    let B = Qn_Y;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        B = B-1 ;
        
        if(B<1){break}else{ArrayofmovementsQn_bottom.push({x : Qn_X , y : B })}
    }


    let ArrayofmovementsQn_left = [];
    let L = Qn_X;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        L = L-1 ;
        
        if(L<1){break}else{ArrayofmovementsQn_left.push({x : L , y : Qn_Y })}
    }


    let ArrayofmovementsQn_right = [];
    let R = Qn_X;
    
    for(let i = 0 ; i <= 8 ; i++)
    {
        R = R+1 ;
        
        if(R>8){break}else{ArrayofmovementsQn_right.push({x : R , y : Qn_Y })}
    }



    value.addEventListener('click',()=> {

        if( !value.classList.contains("ActiveA") || !value.classList.contains("Qn"))
            {
                return 
            }

        let breakerQn = (Arrayji,colorI) => {
            if(Arrayji.length !== 0){
                let indexo = [0] ; 
                for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                {
                    if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                        {
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                        }

                        break 
                    }else{
                        Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                    }
                }
            }
        }
        cleanUp();


        if(value.classList.contains("whiteP"))
        {
            breakerQn(ArrayofmovementsQn_BL,"blackP")
            breakerQn(ArrayofmovementsQn_BR,"blackP")
            breakerQn(ArrayofmovementsQn_TL,"blackP")
            breakerQn(ArrayofmovementsQn_TR,"blackP")
            breakerQn(ArrayofmovementsQn_bottom,"blackP")
            breakerQn(ArrayofmovementsQn_top,"blackP")
            breakerQn(ArrayofmovementsQn_right,"blackP")
            breakerQn(ArrayofmovementsQn_left,"blackP")


        }

        if(value.classList.contains("blackP"))
            {
                breakerQn(ArrayofmovementsQn_BL,"whiteP")
                breakerQn(ArrayofmovementsQn_BR,"whiteP")
                breakerQn(ArrayofmovementsQn_TL,"whiteP")
                breakerQn(ArrayofmovementsQn_TR,"whiteP")
                breakerQn(ArrayofmovementsQn_bottom,"whiteP")
                breakerQn(ArrayofmovementsQn_top,"whiteP")
                breakerQn(ArrayofmovementsQn_right,"whiteP")
                breakerQn(ArrayofmovementsQn_left,"whiteP")
            }
    })

})
}

//----------------------------------------------------------------------------------------------------------------------------------
export const  Kn = () => {
    document.querySelectorAll('.Kn').forEach((value,index)=> {
        let Kn_X = Number(value.getAttribute("X"))
        let Kn_Y = Number(value.getAttribute("Y"))
    
    
    
        let ArrayofmovementsKn_TR= []; //done 
        let TRX = Kn_X ; 
        let TRY = Kn_Y ;
        for(let i = 1 ; i <= 1 ; i++)
        {
            TRX = TRX + 1 ;
            TRY = TRY + 1 ;
            if(TRX > 8 || TRY > 8){break}else{
            ArrayofmovementsKn_TR.push({x : TRX , y : TRY})}
        }
    
        let ArrayofmovementsKn_BR= [];  //done 
        let BRX = Kn_X ; 
        let BRY = Kn_Y ;
        for(let i = 1 ; i <=1 ; i++)
        {
            BRX = BRX + 1 ;
            BRY = BRY -1  ;
            if(BRX > 8 || BRY < 1){break}else{
            ArrayofmovementsKn_BR.push({x : BRX , y : BRY})}
        }
    
    
    
        let ArrayofmovementsKn_TL= [];  
        let TLX = Kn_X ; 
        let TLY = Kn_Y ;
        for(let i = 1 ; i <= 1 ; i++)
        {
            TLX = TLX -1  ;
            TLY = TLY + 1  ;
            if(TLX < 1 || TLY > 8){break}else{
            ArrayofmovementsKn_TL.push({x : TLX , y : TLY})}
        }
    
        let ArrayofmovementsKn_BL= [];  //done 
        let BLX = Kn_X ; 
        let BLY = Kn_Y ;
        for(let i = 1 ; i <= 1 ; i++)
        {
            BLX = BLX -1   ;
            BLY = BLY - 1  ;
            if(BLX < 1 || BLY < 1){break}else{
            ArrayofmovementsKn_BL.push({x : BLX , y : BLY})}
        }
    
        let ArrayofmovementsKn_top = [];
        let T = Kn_Y;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            T = T+1 ;
            
            if(T>8){break}else{ArrayofmovementsKn_top.push({x : Kn_X , y : T })}
        }
    
        let ArrayofmovementsKn_bottom = [];
        let B = Kn_Y;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            B = B-1 ;
            
            if(B<1){break}else{ArrayofmovementsKn_bottom.push({x : Kn_X , y : B })}
        }
    
    
        let ArrayofmovementsKn_left = [];
        let L = Kn_X;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            L = L-1 ;
            
            if(L<1){break}else{ArrayofmovementsKn_left.push({x : L , y : Kn_Y })}
        }
    
    
        let ArrayofmovementsKn_right = [];
        let R = Kn_X;
        
        for(let i = 0 ; i <= 0 ; i++)
        {
            R = R+1 ;
            
            if(R>8){break}else{ArrayofmovementsKn_right.push({x : R , y : Kn_Y })}
        }
    
    
    
        value.addEventListener('click',()=> {

            if( !value.classList.contains("ActiveA") || !value.classList.contains("Kn"))
                {
                    return 
                }
                cleanUp();

    
            let breakerKn = (Arrayji,colorI) => {
                if(Arrayji.length !== 0){
                    let indexo = [0] ; 
                    for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                        {
                            if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                            {
                                Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                            }
    
                            break 
                        }else{
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                        }
                    }
                }
            }
    
            if(value.classList.contains("whiteP"))
            {
                breakerKn(ArrayofmovementsKn_BL,"blackP")
                breakerKn(ArrayofmovementsKn_BR,"blackP")
                breakerKn(ArrayofmovementsKn_TL,"blackP")
                breakerKn(ArrayofmovementsKn_TR,"blackP")
                breakerKn(ArrayofmovementsKn_bottom,"blackP")
                breakerKn(ArrayofmovementsKn_top,"blackP")
    
            }
    
            if(value.classList.contains("blackP"))
                {
                    breakerKn(ArrayofmovementsKn_BL,"whiteP")
                    breakerKn(ArrayofmovementsKn_BR,"whiteP")
                    breakerKn(ArrayofmovementsKn_TL,"whiteP")
                    breakerKn(ArrayofmovementsKn_TR,"whiteP")
                    breakerKn(ArrayofmovementsKn_bottom,"whiteP")
                    breakerKn(ArrayofmovementsKn_top,"whiteP")
        
                }
        })
    
    })
    }



//----------------------------------------------------------------------------------------------------------------------------------
export const  El = () => {
    document.querySelectorAll('.El').forEach((value,index)=> {
        let El_X = Number(value.getAttribute("X"))
        let El_Y = Number(value.getAttribute("Y"))
    
        let ArrayofmovementsEl_top = [];
        let T = El_Y;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            T = T+1 ;
            
            if(T>8){break}else{ArrayofmovementsEl_top.push({x : El_X , y : T })}
        }
    
        let ArrayofmovementsEl_bottom = [];
        let B = El_Y;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            B = B-1 ;
            
            if(B<1){break}else{ArrayofmovementsEl_bottom.push({x : El_X , y : B })}
        }
    
    
        let ArrayofmovementsEl_left = [];
        let L = El_X;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            L = L-1 ;
            
            if(L<1){break}else{ArrayofmovementsEl_left.push({x : L , y : El_Y })}
        }
    
    
        let ArrayofmovementsEl_right = [];
        let R = El_X;
        
        for(let i = 0 ; i <= 8 ; i++)
        {
            R = R+1 ;
            
            if(R>8){break}else{ArrayofmovementsEl_right.push({x : R , y : El_Y })}
        }
    
    
    
        value.addEventListener('click',()=> {
            if( !value.classList.contains("ActiveA") || !value.classList.contains("El"))
                {
                    return 
                }

                cleanUp();

    
            let breakerEl = (Arrayji,colorI) => {
                if(Arrayji.length !== 0){
                    let indexo = [0] ; 
                    for(let i = 0 ; i <= Arrayji.length -1 ; i++)
                    {
                        if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains("Active"))
                        {
                            if(Search(Arrayji[i].x,Arrayji[i].y).classList.contains(colorI))
                            {
                                Search(Arrayji[i].x,Arrayji[i].y).classList.add("enemyMove")
                            }
    
                            break 
                        }else{
                            Search(Arrayji[i].x,Arrayji[i].y).classList.add("movable")
                        }
                    }
                }
            }
    
            if(value.classList.contains("whiteP"))
            {
                breakerEl(ArrayofmovementsEl_bottom,"blackP")
                breakerEl(ArrayofmovementsEl_top,"blackP")
                breakerEl(ArrayofmovementsEl_left,"blackP");
                breakerEl(ArrayofmovementsEl_right,"blackP")
            }
    
            if(value.classList.contains("blackP"))
                {
                breakerEl(ArrayofmovementsEl_bottom,"whiteP")
                breakerEl(ArrayofmovementsEl_top,"whiteP")
                breakerEl(ArrayofmovementsEl_left,"whiteP");
                breakerEl(ArrayofmovementsEl_right,"whiteP")
        
                }
        })
    
    })
    }


//----------------------------------------------------------------------------------------------------------------------------------
export const Hr = () => {
    document.querySelectorAll(".Hr").forEach((value,index) => {
        let Hr_X = Number(value.getAttribute("X"));
        let Hr_Y = Number(value.getAttribute("Y"));

        let ArrayofmovementsHr_top = [];
        let T = Hr_Y;
        let Tl = Hr_X;
        let Tr = Hr_X;
        for(let i = 0 ; i<=0; i++)
        {
            T = T + 2;
            Tl = Tl - 1;
            Tr = Tr + 1 ;
         ArrayofmovementsHr_top.push({x : Tl , y : T}, {x : Tr , y : T})
        }

        let ArrayofmovementsHr_left = [];
        let L = Hr_X;
        let Lt = Hr_Y;
        let Lb = Hr_Y;
        for(let i = 0 ; i<=0; i++)
        {
            L = L - 2;
            Lt = Lt + 1;
            Lb = Lb - 1 ;
          ArrayofmovementsHr_left.push({x : L, y : Lb}, {x : L , y : Lt})
        }

        let ArrayofmovementsHr_right = [];
        let R = Hr_X;
        let Rt = Hr_Y;
        let Rb = Hr_Y;
        for(let i = 0 ; i<=0; i++)
        {
            R = R + 2;
            Rt = Rt + 1;
            Rb = Rb - 1 ;
          ArrayofmovementsHr_right.push({x : R, y : Rb}, {x : R , y : Rt})
        }

        let ArrayofmovementsHr_bottom = [];
        let B = Hr_Y;
        let Bl = Hr_X;
        let Br = Hr_X;
        for(let i = 0 ; i<=0; i++)
        {
            B = B - 2;
            Bl = Bl - 1;
            Br = Br + 1 ;
           ArrayofmovementsHr_bottom.push({x : Bl , y : B}, {x : Br , y : B})
        }

        let ArrayofmovementsHr = ArrayofmovementsHr_top.concat(ArrayofmovementsHr_bottom,ArrayofmovementsHr_left,ArrayofmovementsHr_right);
        let ArrayofmovementsHrFiltered = ArrayofmovementsHr.filter((value,index) => {
            if(value.x <=  8 && value.x >=  1 && value.y >=  1 && value.y <= 8)
            {return true}else{return false}
        })

        
        value.addEventListener('click',()=> {
            if( !value.classList.contains("ActiveA") || !value.classList.contains("Hr"))
                {
                    return 
                }
                cleanUp();

           if(value.classList.contains("whiteP"))
           {
            ArrayofmovementsHrFiltered.forEach((value,index) => {
                if(Search(value.x,value.y).classList.contains("Active"))
                {
                    if(Search(value.x,value.y).classList.contains("blackP"))
                    {
                        Search(value.x,value.y).classList.add("enemyMove")
                    }
                }else{
                    Search(value.x,value.y).classList.add("movable")
                }

            })
           }

           if(value.classList.contains("blackP"))
           {
            ArrayofmovementsHrFiltered.forEach((value,index) => {
                if(Search(value.x,value.y).classList.contains("Active"))
                {
                    if(Search(value.x,value.y).classList.contains("whiteP"))
                    {
                        Search(value.x,value.y).classList.add("enemyMove")
                    }
                }else{
                    Search(value.x,value.y).classList.add("movable")
                }


            })
           }


        })

    })
}
//----------------------------------------------------------------------------------------------------------------------------------

export const Pw = () => {
    document.querySelectorAll(".Pw").forEach((value,index)=> {
        let Pw_X = Number(value.getAttribute("X"));
        let Pw_Y = Number(value.getAttribute("Y"))

            //white code
        let ArrayofmovementsPw_bottom_white = [];
        if(value.classList.contains("whiteP")){
            let B = Pw_Y;
            let Bl = Pw_X;
            let Br = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                B = B - 1;
                Bl = Bl - 1;
                Br = Br + 1 ;
               ArrayofmovementsPw_bottom_white.push({x : Bl , y : B,id:"pass"}, {x : Br , y : B , id : "pass"},{x : Pw_X, y : B, id : "pass"})
            }

            if(Pw_Y === 7){
                ArrayofmovementsPw_bottom_white.push({x : Pw_X, y : Pw_Y - 2, id : "notpass"})
            }
        }


            //black code
        let ArrayofmovementsPw_top_black = [];
        if(value.classList.contains("blackP")){
            let T = Pw_Y;
            let Tl = Pw_X;
            let Tr = Pw_X;
            for(let i = 0 ; i<=0; i++)
            {
                T = T + 1;
                Tl = Tl - 1;
                Tr = Tr + 1 ;
             ArrayofmovementsPw_top_black.push({x : Tl , y : T,id : "pass"}, {x : Tr , y : T,id : "pass"},{x : Pw_X , y : T,id : "pass"})
            }
            if(Pw_Y === 2){
                ArrayofmovementsPw_top_black.push({x : Pw_X, y : Pw_Y + 2,id : "notpass"})
            }
        }

        let ArrayofmovementsPw_bottom_whiteFiltered = ArrayofmovementsPw_bottom_white.filter((value,index) => {
            if(value.x <= 8 && value.x >= 1 && value.y >= 1 && value.y <= 8){
                return true
            }else{return false}

        })

        
        let ArrayofmovementsPw_top_blackFiltered = ArrayofmovementsPw_top_black.filter((value,index) => {
            if(value.x <=  8 && value.x >= 1 && value.y >=  1 && value.y <= 8){
                return true
            }else{return false}

        })


        value.addEventListener('click',()=> {

            if( !value.classList.contains("ActiveA") || !value.classList.contains("Pw"))
                {
                    return 
                }
                cleanUp();

            if(value.classList.contains("whiteP"))
            {
                ArrayofmovementsPw_bottom_whiteFiltered.forEach((value,index) => {
                    if(value.x !== Pw_X)
                    {
                        if(Search(value.x,value.y).classList.contains("blackP")){
                            Search(value.x,value.y).classList.add("enemyMove")
                        }
                    }else{
                        if(value.id === "notpass")
                        {
                            if(!Search(Pw_X,6).classList.contains("Active")){
                                if( !Search(value.x,value.y).classList.contains("Active"))
                                    {
                                        Search(value.x,value.y).classList.add("movable");
                                    };
                            }
                        }else{
                            if(!Search(value.x,value.y).classList.contains("Active")){
                                Search(value.x,value.y).classList.add("movable")
                            } 
                        }
                    }

                })
            }

            if(value.classList.contains("blackP"))
                {
                    ArrayofmovementsPw_top_blackFiltered.forEach((value,index) => {
                        if(value.x !== Pw_X)
                        {
                            if(Search(value.x,value.y).classList.contains("whiteP")){
                                Search(value.x,value.y).classList.add("enemyMove")
                            }
                        }else{
                            if(value.id === "notpass")
                            {
                                if(!Search(Pw_X,3).classList.contains("Active")){
                                  if( !Search(value.x,value.y).classList.contains("Active"))
                                    {
                                        Search(value.x,value.y).classList.add("movable");
                                    };
                                }
                            }else{
                                if(!Search(value.x,value.y).classList.contains("Active")){
                                    Search(value.x,value.y).classList.add("movable")
                                } 
                            }
                        }
    
                    })
                }
 

        })
    })
}








export const cleanUp = () => {
    document.querySelectorAll(".movable").forEach((value,index) => {
        value.classList.remove("movable")
    });


    document.querySelectorAll(".enemyMove").forEach((value,index) => {
        value.classList.remove("enemyMove")
    });
}





export const Testing = () => {
Pw() ; Cm(); Kn(); Qn() ; El(); Hr();;cleanUp();}


let turns = ["white"];

export const AllowTurn = () => {
    document.querySelectorAll('.blocks').forEach((value,index) => {
        if(turns[turns.length - 1] === "white")
        {
            if(value.classList.contains("blackP"))
            {
                value.classList.remove("ActiveA");
            }

            if(value.classList.contains("whiteP"))
            {
                value.classList.add("ActiveA");
            }

        }


        if(turns[turns.length - 1] === "black")
        {
            if(value.classList.contains("whiteP"))
            {
                value.classList.remove("ActiveA");
                value.classList.remove("Clicked");
                value.classList.add("notClicked")
            }

            if(value.classList.contains("blackP"))
            {
                value.classList.add("ActiveA");
                value.classList.remove("Clicked");
                value.classList.add("notClicked")
            }

        }
    })
}

let clickedNum = [];
let clickedNumX = [];
let clickedNumY = [];

document.querySelectorAll('.blocks').forEach((value,index) => {
    value.addEventListener('click',()=> {
        let typeofblock ;
                let Classes = ["El" , "Hr" , "Cm" , "Pw" , "Kn" , "Qn"];
                for(let i = 0 ; i<= 5 ; i++)
                {
                    if(value.classList.contains(Classes[i]))
                    {
                        typeofblock = Classes[i];
                    }
                }



        clickedNum.push(Number(value.getAttribute("positionN")));
        clickedNumX.push(Number(value.getAttribute("X")));
        clickedNumY.push(Number(value.getAttribute("Y")));
        if(value.classList.contains("movable")){ 
            if(colorofPeice === "white"){turns.push("black")}
            if(colorofPeice === "black"){turns.push("white")}
            AllowTurn();
            if(currentX){ //starting bracket of if 
            Search(currentX,currentY).classList.remove(typeofPeice);
            Search(currentX,currentY).classList.remove(classcolorofPeice);
            Search(currentX,currentY).classList.remove("Active");
            Search(currentX,currentY).classList.remove("ActiveA");
            Search(currentX,currentY).firstElementChild.setAttribute('src',"");
            value.classList.add(typeofPeice);
            value.classList.add(classcolorofPeice);
            value.classList.add("Active");
            value.firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_${peicestring}.svg`);
            MakeDefault();
            ActiveblockMover();
            Testing();


            }//closingbracket of if
        }


        if(value.classList.contains("enemyMove")){ 
            if(currentX){ //starting bracket of if 
                
                if(colorofPeice === "white"){turns.push("black")}
                if(colorofPeice === "black"){turns.push("white")}

                 Search(currentX,currentY).classList.remove("Active");
                 Search(currentX,currentY).classList.remove("ActiveA");
                 Search(currentX,currentY).classList.remove(typeofPeice);
                 Search(currentX,currentY).classList.remove(classcolorofPeice);


                 value.classList.add(typeofPeice);
                 value.classList.add(classcolorofPeice);

                 value.classList.remove(typeofblock);
                 value.classList.remove(classcolorofEnemy);
                 value.classList.remove("Clicked");
                 value.classList.add("notClicked")


                 Search(currentX,currentY).firstElementChild.setAttribute('src',"");


                value.firstElementChild.setAttribute('src',`./svgs/${colorofPeice}_${peicestring}.svg`);

            MakeDefault();
            ActiveblockMover();
            cleanUp();
            AllowTurn();

            

            }//closingbracket of if
        }
    })
});


let currentX = undefined;
let currentY = undefined;
let typeofPeice = undefined;  
let peicestring = undefined;
let colorofPeice = undefined;  
let colorofEnemy = undefined;
let classcolorofEnemy = undefined;
let classcolorofPeice = undefined; 
let updatedSvgtype = undefined; 
let indexomania  = undefined;

export const MakeDefault = () => 
    {
         currentX = undefined;
         currentY = undefined;
         typeofPeice = undefined;  
         colorofPeice = undefined;   
         colorofEnemy = undefined;
         classcolorofEnemy = undefined;
         classcolorofPeice = undefined;  
         updatedSvgtype = undefined;  
         indexomania  = undefined;
         peicestring = undefined;
    }


export const ActiveblockMover = () => {
    document.querySelectorAll('.blocks').forEach((value,index) => {
            value.addEventListener('click',()=> {
                Pw();Hr();Qn();El();Kn();Cm();
                let mainindex = index;
                if(value.classList.contains("Active")){
                currentX = Number(value.getAttribute("X"));
                currentY = Number(value.getAttribute("Y"));
                if(value.classList.contains("whiteP")){colorofEnemy = "black" ; colorofPeice = "white" , classcolorofEnemy = "blackP" ; classcolorofPeice = "whiteP"};
                if(value.classList.contains("blackP")){colorofEnemy = "white" ; colorofPeice = "black" , classcolorofEnemy = "whiteP" ; classcolorofPeice = "blackP"};
                let indexdecider ;
                let classes = ["El" , "Hr" , "Cm" , "Kn" , "Qn" , "Pw"];
                let peiceNames = ["elephant" , "horse" , "camel" , "king" , "queen" , "pawn"]
                for(let i = 0 ; i<= 5 ; i++){
                    if(value.classList.contains(classes[i])){
                        typeofPeice = classes[i];
                        indexomania = i;
                        indexdecider = i;
                    }
                };
                peicestring = peiceNames[indexdecider];
                document.querySelectorAll('.blocks').forEach((value,index) => {
                    if(index !== mainindex){
                        value.classList.remove("Clicked");
                        value.classList.add("notClicked")
                    }else{
                        value.classList.add("Clicked");
                        value.classList.remove("notClicked")
                    }
                })

        }})
        
    })
};











 









