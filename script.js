const min1 = document.getElementById('min1');
const min2 = document.getElementById('min2');

const sec1 = document.getElementById('sec1');
const sec2 = document.getElementById('sec2');

const startBtn = document.getElementById('start');
let time = new Date;
ResetDate();

let paused = false;
let timer = null;


startBtn.addEventListener('click',StartTime);

function StartTime(){
    startBtn.innerText = "STOP";
    if(paused == false){
        //Start timer
        timer = setInterval( () => {
            time.setSeconds(time.getSeconds()+1);
            //console.log(time);
    
            Segmenting(min1, Math.floor(time.getMinutes() / 10));
            Segmenting(min2, time.getMinutes() % 10);
            Segmenting(sec1, Math.floor(time.getSeconds() / 10));
            Segmenting(sec2, time.getSeconds() % 10);
        }, 1000);
        paused = true;
    }else{
        //Restart
        clearInterval(timer);
        ResetDate();
        paused = false;
        startBtn.innerText = "START";
    }
}

function ResetDate(){
    time.setSeconds(0);
    time.setMinutes(0);
}
function ClearSegment(segment){
    segment.forEach((s) => {
        s.style.opacity="0.3";
    });
}
function Segmenting(segment,number){
    if(number == 0){
        //console.log(segment.querySelectorAll('*'));
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[1].style.opacity = "1";
        separateSegments[2].style.opacity = "1";
        separateSegments[4].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
        separateSegments[6].style.opacity = "1";
    }
    if(number == 1){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[2].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
    }
    if(number == 2){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[2].style.opacity = "1";
        separateSegments[3].style.opacity = "1";
        separateSegments[4].style.opacity = "1";
        separateSegments[6].style.opacity = "1";
    }
    if(number == 3){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[2].style.opacity = "1";
        separateSegments[3].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
        separateSegments[6].style.opacity = "1";
    }
    if(number == 4){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[1].style.opacity = "1";
        separateSegments[2].style.opacity = "1";
        separateSegments[3].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
    }
    if(number == 5){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[1].style.opacity = "1";
        separateSegments[3].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
        separateSegments[6].style.opacity = "1";
    }
    if(number == 6){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[1].style.opacity = "1";
        separateSegments[3].style.opacity = "1";
        separateSegments[4].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
        separateSegments[6].style.opacity = "1";
    }
    if(number == 7){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[2].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
    }
    if(number == 8){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[1].style.opacity = "1";
        separateSegments[2].style.opacity = "1";
        separateSegments[3].style.opacity = "1";
        separateSegments[4].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
        separateSegments[6].style.opacity = "1";
    }
    if(number == 9){
        separateSegments = segment.querySelectorAll('*');
        ClearSegment(separateSegments);

        separateSegments[0].style.opacity = "1";
        separateSegments[1].style.opacity = "1";
        separateSegments[2].style.opacity = "1";
        separateSegments[3].style.opacity = "1";
        separateSegments[5].style.opacity = "1";
        separateSegments[6].style.opacity = "1";
    }
}