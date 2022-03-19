var  vMakan = 500;
var x = 0;

var  vMain = 500;
var y = 0;

var  vTidur = 500;
var z = 0;

var  vBelajar = 0;
var l = 0;

var w1 = 0;
var w2 = 0;
var w3 = 0;
var w4 = 0;
var go = 1;
var reduce;
var go2 = 0
var countdown = 0;

function wi(){
    if (vMakan < 150 && w1 == 0){
        Swal.fire({
            title: 'Warning',
            text: 'Makan dulu Yuk!',
            icon: 'warning',
            confirmButtonText: 'Siap'
        })
        w1 = 1;
    }
    if (vMain < 150 && w2 == 0){
        Swal.fire({
            title: 'Warning',
            text: 'Main dong, Bosan ni',
            icon: 'warning',
            confirmButtonText: 'Siap'
        })
        w2 = 1;
    }
    if (vTidur < 150 && w3 == 0){
        Swal.fire({
            title: 'Warning',
            text: 'Tidur dulu bang, Ngantuk!',
            icon: 'warning',
            confirmButtonText: 'Siap'
        })
        w3 = 1;
    }
    if(vMakan<=0){
        Swal.fire({
            icon: 'error',
            title: 'YOU LOSE!!',
            text: 'MATI KELAPARAN KARENA GAK DISURUH AYANG MAKAN',
            showConfirmButton: false,
            timer: 3000
        }),
        setTimeout(function(){
            window.location.reload();
        }, 3000);
    }
    if(vTidur<=0){
        Swal.fire({
            icon: 'error',
            title: 'YOU LOSE!!',
            text: 'ANDA MENGALAMAI DARAH RENDAH KARENA TIDAK TIDUR',
            showConfirmButton: false,
            timer: 3000
        }),
        setTimeout(function(){
            window.location.reload();
        }, 3000);
    }
    if( vMain<=0){
        Swal.fire({
            icon: 'error',
            title: 'YOU LOSE!!',
            text: 'ANDA RESIGN KARENA GEJALA MENTAL BREAKDANCE',
            showConfirmButton: false,
            timer: 3000
        }),
        setTimeout(function(){
            window.location.reload();
        }, 3000);
    }
}

function idle(id,value){
    var bar = document.getElementById(id);
    reduce = setTimeout(ree, 1000);
        function ree(){
            if (go == 0){
                clearTimeout(reduce);
                if(id == 'greenBar'){
                    vMakan = value;
                }
                if(id == 'greenBar2'){
                    vMain = value;
                }
                if(id == 'greenBar3'){
                    vTidur = value;
                }
                go2 = 1;
            }
            else{    
                if(id == 'greenBar' || id == 'greenBar2' ||id == 'greenBar3' ){
                    value = value - 5;
                    bar.style.width = (value)/10 + "%";
                    bar.innerHTML =  (value)/10 + "%";
                }
                
                if(id == 'greenBar'){
                    vMakan = value;
                }
                if(id == 'greenBar2'){
                    vMain = value;
                }
                if(id == 'greenBar3'){
                    vTidur = value;
                }
                if(id == 'greenBar4'){
                    countdown++;
                    if (countdown >= 144 && w4 == 0){
                        Swal.fire({
                            title: 'Warning',
                            text: 'Belajar woi, biar pintar dikit!',
                            icon: 'warning',
                            confirmButtonText: 'Siap'
                        })
                        w4 = 1;
                    }
                    if (countdown >= 216){
                        Swal.fire({
                            icon: 'error',
                            title: 'YOU LOSE!!',
                            text: 'ANDA DI DO KARENA MALAS BELAJAR',
                            showConfirmButton: false,
                            timer: 3000
                        }),
                        setTimeout(function(){
                            window.location.reload();
                        }, 3000);
                    }
                }
                if(vMakan<=0){
                    Swal.fire({
                        icon: 'error',
                        title: 'YOU LOSE!!',
                        text: 'MATI KELAPARAN KARENA GAK DISURUH AYANG MAKAN',
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    setTimeout(function(){
                        window.location.reload();
                    }, 3000);
                }
                if(vTidur<=0){
                    Swal.fire({
                        icon: 'error',
                        title: 'YOU LOSE!!',
                        text: 'ANDA MENGALAMAI DARAH RENDAH KARENA TIDAK TIDUR',
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    setTimeout(function(){
                        window.location.reload();
                    }, 3000);
                }
                if( vMain<=0){
                    Swal.fire({
                        icon: 'error',
                        title: 'YOU LOSE!!',
                        text: 'ANDA RESIGN KARENA GEJALA MENTAL BREAKDANCE',
                        showConfirmButton: false,
                        timer: 3000
                    }),
                    setTimeout(function(){
                        window.location.reload();
                    }, 3000);
                }
                idle(id,value);
            }
        }
}

function ii()
{
    idle('greenBar', vMakan);
    idle('greenBar2', vMain);
    idle('greenBar3', vTidur);
    idle('greenBar4', vBelajar);
}

var pbtn = document.getElementById('playbtn');
pbtn.addEventListener('click', e => {
    ii();
});


//Bagian pause saat button di click
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

btn1.addEventListener('click', function(){
    go = 0;
    setInterval(disable, 10);
    function disable(){
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
    }
    idle('greenBar', vMakan);
    idle('greenBar2', vMain);
    idle('greenBar3', vTidur);
    idle('greenBar4', vBelajar);
    ini();
    function ini(){
        if(go2 == 0){
            setTimeout(ini, 100);
        }
        else{
            Makan(); r1main(); r1tidur();
            go2 = 0
        }
    }
    var wait = setTimeout(con, 4000);
    function con (){
        go = 1
        idle('greenBar', vMakan);
        idle('greenBar2', vMain);
        idle('greenBar3', vTidur);
        idle('greenBar4', vBelajar);
        clearTimeout(con);
        setInterval(enable, 10);
        function enable(){
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
        }
    }
});

btn2.addEventListener('click', function(){
    go = 0;
    setInterval(disable, 10);
    function disable(){
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
    }
    idle('greenBar', vMakan);
    idle('greenBar2', vMain);
    idle('greenBar3', vTidur);
    idle('greenBar4', vBelajar);
    ini();
    function ini(){
        if(go2 == 0){
            setTimeout(ini, 100);
        }
        else{
            Main(); r2makan(); r2tidur();
            go2 = 0
        }
    }
    var wait = setTimeout(con, 7000);
    function con (){
        go = 1
        idle('greenBar', vMakan);
        idle('greenBar2', vMain);
        idle('greenBar3', vTidur);
        idle('greenBar4', vBelajar);
        clearTimeout(con);
        setInterval(enable, 10);
        function enable(){
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
        }
    }
});

btn3.addEventListener('click', function(){
    go = 0;
    setInterval(disable, 10);
    function disable(){
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
    }
    idle('greenBar', vMakan);
    idle('greenBar2', vMain);
    idle('greenBar3', vTidur);
    idle('greenBar4', vBelajar);
    ini();
    function ini(){
        if(go2 == 0){
            setTimeout(ini, 100);
        }
        else{
            Tidur(); r3makan(); r3main();
            go2 = 0
        }
    }
    var wait = setTimeout(con, 19000);
    function con (){
        go = 1
        idle('greenBar', vMakan);
        idle('greenBar2', vMain);
        idle('greenBar3', vTidur);
        idle('greenBar4', vBelajar);
        clearTimeout(con);
        setInterval(enable, 10);
        function enable(){
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
        }
    }
});

btn4.addEventListener('click', function(){
    go = 0;
    countdown = 0;
    w4 = 0;
    setInterval(disable, 10);
    function disable(){
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
    }
    idle('greenBar', vMakan);
    idle('greenBar2', vMain);
    idle('greenBar3', vTidur);
    idle('greenBar4', vBelajar);
    ini();
    function ini(){
        if(go2 == 0){
            setTimeout(ini, 100);
        }
        else{
            Belajar(); r4tidur(); r4makan(); r4main();
            go2 = 0
        }
    }
    var wait = setTimeout(con, 7000);
    function con (){
        go = 1
        idle('greenBar', vMakan);
        idle('greenBar2', vMain);
        idle('greenBar3', vTidur);
        idle('greenBar4', vBelajar);
        clearTimeout(con);
        setInterval(enable, 10);
        function enable(){
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;
            btn4.disabled = false;
        }
    }
});


function Makan() {
    let elem = document.getElementById("greenBar");
    var id = setInterval(setInterval1, 1000);
    function setInterval1(){
        if (vMakan >= 1000){
            clearInterval(id);
        
        } else {
            vMakan = (vMakan+ 200);
            if (vMakan>= 1000){
                vMakan= 1000;
            }
            elem.style.width =  (vMakan)/10 + "%";
            elem.innerHTML =   (vMakan)/10 + "%";
            x++;
            if(x >= 3){
                x = 0;
                clearInterval(id);
            }
        }
    }
}

function r1main() {
    let elem = document.getElementById("greenBar2");
    var id = setInterval(red2, 1000);
    function red2(){
        if (vMain <= 0){
        clearInterval(id);
        
        } else {
            vMain = (vMain - 20);
            if (vMain <= 0){
                vMain = 0;
            }
            elem.style.width =  (vMain)/10 + "%";
            elem.innerHTML =   (vMain)/10 + "%";
            wi();
            y++;
            if(y >= 3){
                y = 0;
                clearInterval(id);
            }
        }
    }
    w2 = 0;
}

function r1tidur(){
    let elem = document.getElementById("greenBar3");
    var id = setInterval(red3, 1000);
    function red3(){
        if (vTidur <= 0){
        clearInterval(id);
        elem.style.width = 0 + "%";
        vTidur = 0;
        
        } else {
            vTidur = (vTidur - 20);
            if (vTidur  <= 0){
                vTidur = 0;
            }
            elem.style.width =  (vTidur)/10 + "%";
            elem.innerHTML =   (vTidur)/10 + "%";
            wi();
            z++;
            if(z >= 3){
                z = 0;
                clearInterval(id);
            }
        }
    }
    w3 =0;
}

function Main() {
    let elem = document.getElementById("greenBar2");
    var id = setInterval(setInterval2, 1000);
    function setInterval2(){
        if (vMain >= 1000){
            clearInterval(id);
        } else {
            vMain = (vMain + 100);
            if (vMain >= 1000){
                vMain = 1000;
            }
            elem.style.width =  (vMain)/10 + "%";
            elem.innerHTML =   (vMain)/10 + "%";
            y++;
            if(y >=6){
                y = 0;
                clearInterval(id);
            }
        }
    }
}

function r2makan(){
    let elem = document.getElementById("greenBar");
    var id = setInterval(red1, 1000);
    function red1(){
        if (vMakan
         <= 0){
        clearInterval(id);
        
        } else {
            vMakan = (vMakan - 20);
            if (vMakan<= 0){
                vMakan = 0;
            }
            elem.style.width = (vMakan)/10 + "%";
            elem.innerHTML = (vMakan)/10 + "%";
            wi();
            x++;
            if(x >=6){
                x = 0;
                clearInterval(id);
            }
        }
    }
    w1 =0;
}

function r2tidur(){
    let elem = document.getElementById("greenBar3");
    var id = setInterval(red3, 1000);
    function red3(){
        if (vTidur <= 0){
        clearInterval(id);
        elem.style.width = 0 + "%";
        vTidur = 0;
        
        } else {
            vTidur = (vTidur - 15);
            if (vTidur <= 0){
                vTidur = 0;
            }
            elem.style.width =  (vTidur)/10 + "%";
            elem.innerHTML =   (vTidur)/10 + "%";
            wi();
            z++;
            if(z >=6){
                z = 0;
                clearInterval(id);
            }
        }
    }
    w3 =0;
}

function Tidur() {
    let elem = document.getElementById("greenBar3");
    var id = setInterval(setInterval3, 1000);
    function setInterval3(){
        if (vTidur >= 1000){
            clearInterval(id);
        } else {
            vTidur = (vTidur + 30);
            if (vTidur >= 1000){
                vTidur = 1000;
            }
            elem.style.width =  (vTidur)/10 + "%";
            elem.innerHTML =   (vTidur)/10 + "%";
            z++;
            if(z >=18){
                z = 0;
                clearInterval(id);
            }
        }
    }
}

function r3makan(){
    let elem = document.getElementById("greenBar");
    var id = setInterval(red1, 1000);
    function red1(){
        if (vMakan
         <= 0){
        clearInterval(id);
        
        } else {
            vMakan= (vMakan- 20);
            if (vMakan <= 0){
                vMakan = 0;
            }
            elem.style.width =  (vMakan)/10 + "%";
            elem.innerHTML =   (vMakan)/10 + "%";    
            wi();
            x++;
            if(x >=18){
                x = 0;
                clearInterval(id);
            }
        }
    }
    w1 = 0;
}

function r3main() {
    let elem = document.getElementById("greenBar2");
    var id = setInterval(red2, 1000);
    function red2(){
        if (vMain <= 0){
        clearInterval(id);
        
        } else {
            vMain = (vMain - 15);
            if (vMain <= 0){
                vMain = 0;
            }
            elem.style.width =  (vMain)/10 + "%";
            elem.innerHTML =   (vMain)/10 + "%";
            wi();
            y++;
            if(y >=18){
                y = 0;
                clearInterval(id);
            }
        }
    }
    w2 =0;
}

let sem1 = 1;
function Belajar() {
    let elem = document.getElementById("greenBar4");
    var id = setInterval(setInterval4, 1000);
    function setInterval4(){
        if (vBelajar >= 1000){
            clearInterval(id);
            elem.style.width = 0 + "%";
            elem.innerHTML = 0 + "%";
            vBelajar = 0;
            document.getElementById('semes').innerHTML="SEMESTER " + (sem1+=1);
            Swal.fire({
                icon: 'success',
                title: 'GREAT JOB',
                showConfirmButton: false,
                timer: 1500
            })
            if(sem1==9){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'HAPPY GRADUATION',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function(){
                    window.location.reload();
                }, 3000);
            }
            //Tambah semester baru
        } 
        else if (vMakan >= 900 && vMain >=300 && vTidur >=300  ||
                  vMain >= 900 && vMain >=300 && vTidur >=300  ||
                  vTidur >= 900 && vMain >=300 && vTidur >=300 ){
            vBelajar = (vBelajar + 40);
            if (vBelajar >= 1000){
                vBelajar = 1000;
            }
            elem.style.width =  (vBelajar)/10 + "%";
            elem.innerHTML =   (vBelajar)/10 + "%";
            l++;
            if(l >=6){
                l = 0;
                clearInterval(id);
            }
        }
        else if (vMakan <= 300 || vMain <=300 || vTidur <=300){
          vBelajar = (vBelajar + 15);
          if (vBelajar >= 1000){
              vBelajar = 1000;
          }
          elem.style.width =  (vBelajar)/10 + "%";
          elem.innerHTML =   (vBelajar)/10 + "%";
          l++;
          if(l >=6){
              l = 0;
              clearInterval(id);
          }
        }
        else{
          vBelajar = (vBelajar + 25);
          if (vBelajar >= 1000){
              vBelajar = 1000;
          }
          elem.style.width =  (vBelajar)/10 + "%";
          elem.innerHTML =   (vBelajar)/10 + "%";
          l++;
          if(l >=6){
              l = 0;
              clearInterval(id);
          }
        }
    }
}

function r4makan(){
    let elem = document.getElementById("greenBar");
    var id = setInterval(red1, 1000);
    function red1(){
        if (vMakan
         <= 0){
        clearInterval(id);
        
        } else {
            vMakan = (vMakan - 20);
            if (vMakan<= 0){
                vMakan= 0;
            }
            elem.style.width =  (vMakan)/10 + "%";
            elem.innerHTML =   (vMakan)/10 + "%";
            wi();
            x++;
            if(x >=6){
                x = 0;
                clearInterval(id);
            }
        }
    }
    w1 =0;
}

function r4main() {
    let elem = document.getElementById("greenBar2");
    var id = setInterval(red2, 1000);
    function red2(){
        if (vMain <= 0){
        clearInterval(id);
        
        } else {
            vMain = (vMain - 25);
            if (vMain <= 0){
                vMain = 0;
            }
            elem.style.width =  (vMain)/10 + "%";
            elem.innerHTML =   (vMain)/10 + "%";
            wi();
            y++;
            if(y >=6){
                y = 0;
                clearInterval(id);
            }
        }
    }
    w2 =0;
}

function r4tidur(){
    let elem = document.getElementById("greenBar3");
    var id = setInterval(red3, 1000);
    function red3(){
        if (vTidur <= 0){
        clearInterval(id);
        elem.style.width = 0 + "%";
        vTidur = 0;
        
        } else {
            vTidur = (vTidur - 15);
            if (vTidur <= 0){
                vTidur = 0;
            }
            elem.style.width =  (vTidur)/10 + "%";
            elem.innerHTML =   (vTidur)/10 + "%";
            wi();
            z++;
            if(z >=6){
                z = 0;
                clearInterval(id);
            }
        }
    }
    w3 =0;
}
