let minute = document.getElementById("minute");
let second = document.getElementById("second");
let mili = document.getElementById("mili");
let starting = document.getElementById("start");
let pause = document.getElementById("pause");

let stop = document.getElementById("stop");
var save;
let i = 0;
    let j = 0;
    let k = 0;
function start() {
    pause.style.display = "inline"
    
    starting.style.display = "none";
    save = setInterval(
        function hell() {
            mili.innerHTML = i;
            if (j < 10) {
                second.innerHTML = "0"+j;
            } else {
                second.innerHTML = j;
            }
            if (k < 10) {
                minute.innerHTML = "0"+k;
            } else {
                minute.innerHTML = k;
            }
            i = i + 1;
            if (i == 100) {
                i = 0;
                j = j + 1;
                if (j == 60) {
                    j = 0;
                    k = k + 1;
                }
            }
        }, 10
    )
    stop.style.display= "inline"
}
function pausey(){
clearInterval(save);
pause.style.display = "none";
starting.style.display = "inline";

stop.style.display = "inline";

}

function stoping(){
    
    clearInterval(save);
    stop.style.display = "none";
    starting.style.display = "inline";

    pause.style.display = "none";
    k=0;
    j=0;
    i=0;
    mili.innerHTML = "00";
    if (j < 10) {
        second.innerHTML = "0"+j;
    } else {
        second.innerHTML = j;
    }
    if (k < 10) {
        minute.innerHTML = "0"+k;
    } else {
        minute.innerHTML = k;
    }

}


