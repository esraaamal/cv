$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution:512,
        dropRadius:10,
    });

    const bars=document.querySelectorAll('.progress__bar');
    bars.forEach(function(bar){
    let percentage=bar.dataset.percent;
    let tooltip=bar.children[0];
    tooltip.innerText=percentage+'%';
    bar.style.width= percentage+'%';
    console.log(percentage);
    });


    //counter
    const counters=document.querySelectorAll('.counter');
    // consolelog(counters);

     function runCounter(){
         counters.forEach(counter=>{
             counter.innerText=0;
             let target= +counter.dataset.count;
             let step=target/100
          
            
             let countIt=function(){
                 let displayCount=+counter.innerText;
                 if(displayCount<target){
                     counter.innerText=Math.ceil(displayCount+step);
                     setTimeout(countIt,1);
                 }else{
                     counter.innerText=target;
                 }
             }
 

          countIt()

         })
        }

    
 let counterSection=document.querySelector('.counter__wrapper');

let options={
    rootMargin: '0px 0px -200px 0px'
}

let done=0;
 const sectionObserver=new IntersectionObserver(function(entries){
 if(entries[0].isIntersecting){
     done=1;
    runCounter();
 }


 },options)

    sectionObserver.observe(counterSection)



//image filter

var $wrapper=$('.portfolio__wrapper');







})