function getResult(){ //Iterating each value input
    var a =parseInt(document.getElementById('phase-0-score').value);
    var b =parseInt(document.getElementById('phase-1-score').value);
    if (a>100 || b > 100){
        alert('Enter correct number'); //to prevent unwanted values
    }
    else{
        var obtained = a + b;
        document.getElementById('obt').innerHTML = obtained;
        var per = obtained / 200 * 100; //calculation of the average % of the scores in the two phases
        document.getElementById('per').innerHTML = per + '%';
        
        if(per < 40){ //condition for E
            document.getElementById('grade').innerHTML = 'E';
        }
        else if(per > 40 && per < 49){ //condition for D
            document.getElementById('grade').innerHTML = 'D';
        }
        else if(per > 50 && per < 59){ //condition for C
            document.getElementById('grade').innerHTML = 'c';
        }
        else if(per > 60 && per < 79){ //condition for B
            document.getElementById('grade').innerHTML = 'B';
        }
        else if(per > 79){ //condition for A
            document.getElementById('grade').innerHTML = 'A';
        }
    }
}