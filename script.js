(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
    let dlt = document.querySelector(".btn-delete");
    var answer;


    
        buttons.forEach(function (button) {
            button.addEventListener("click", function (e) {
                if(screen.value == "Please enter"){
                    screen.value="";
                }else if(screen.value == answer){
                    let string="-+/*"
                    let mark=e.target.dataset.num;
                    let result=string.indexOf(mark);
                    if(result==-1){
                        screen.value="";
                    }
                }
                let value = e.target.dataset.num;
                screen.value += value;
            });
        });
    
    

    equal.addEventListener("click",function(e){
        let string= screen.value;
        console.log(string);
        if(screen.value == ""){
            screen.value = "Please enter";
        }else{
            for (const x of string) {
                if(x=="/" || x=="*" || x=="-" || x=="+" ){
                    answer= eval(screen.value);
                    screen.value=answer;
                    break;
                }
                
            }
        }
    });

    clear.addEventListener("click",function(e){
        screen.value="";
    });

    dlt.addEventListener("click",(e)=>{
        if(screen.value!="" && screen.value!="Please enter"){
            let string=screen.value;
            screen.value=string.slice(0,-1);
        }
    });

}());