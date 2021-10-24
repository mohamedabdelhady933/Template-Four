// let page =document.querySelector('.landing');
// let counter=1;
// setInterval(()=>{
//     let x='0'+counter+'.jpg';
//     page.style.backgroundImage='url("images/'+x+'")';
//     ++counter;
//     if (counter==7){
//         counter=0;
//     }
// },1000)

// -----------Change Landing Images----------
let page =document.querySelector('.landing');



let imgsArray=["01.jpg" , "02.jpg" , "03.jpg" , "04.jpg" , "05.jpg" , "06.jpg" ,"07.jpg"];

let backgroundOption = true;


function randomImage(){
    
    if(backgroundOption === true){

       

let backgroundInterval = setInterval(()=>{

    let randomNum =Math.floor(Math.random() * imgsArray.length);

    page.style.backgroundImage = 'url("images/' + imgsArray[randomNum]+ '")';
},3000);
    }
    
    
}
// -----------Change Landing Images----------


// -------------Setting Box----------------
let mainColor = localStorage.getItem("color_option");

if(mainColor !==null){

    document.documentElement.style.setProperty('--main-color', mainColor)
}


 document.querySelector('.icon-container .fa-cog').onclick = function() {
    this.classList.toggle("fa-spin");

    document.querySelector('.setting-box').classList.toggle("open");
 };

//  change color 
const colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(li=>{

    li.addEventListener("click",(e)=>{

        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

        localStorage.setItem("color_option",e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element=>{

            element.classList.remove("active");
        });

        e.target.classList.add("active");

    });
});

// Change background 
let backgroundLocalItem = localStorage.getItem("background_option");

if (backgroundLocalItem !== null){

    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
    }else{
        backgroundOption = false;
    }

}
const randomBackEle = document.querySelectorAll(".random-background span");

randomBackEle.forEach(span =>{

    span.addEventListener("click",(e)=>{

        

        e.target.parentElement.querySelectorAll(".active").forEach(element=>{

            element.classList.remove("active");
        });

        e.target.classList.add("active");

        if(e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randomImage();
            localStorage.setItem("background_option" ,true);
        }
        else{
            
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option" ,false);
        };

    });
});

// -------------Setting Box----------------

// -----------------------------------------------------Our Skills---------------------------------------------
let ourSkills = document.querySelector(".skill");

window.onscroll = function(){

    let skillsOffsetTop = ourSkills.offsetTop;
    
    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop >(skillsOffsetTop + skillsOuterHeight - windowHeight)){

        let allskills = document.querySelectorAll('.our-skills .container .skill .level-skill span');
        
        allskills.forEach(skill =>{
            skill.style.width = skill.dataset.progress;
        });
    }
}



// ---------------------------------------OUR Gallery----------------------------

let ourGallery = document.querySelectorAll('.gallery .images-box img');

ourGallery.forEach(img =>{

    img.addEventListener("click", (e)=> {

        //Create overlay element
        let overlay = document.createElement("div");

        //add class

        overlay.className ='popup-overlay';

        document.body.appendChild(overlay);

        //create popup
        let popupbox = document.createElement("div");

        popupbox.className = 'popup-box';

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupbox.appendChild(popupImage);

        document.body.appendChild(popupbox);

        let closeButton = document.createElement('span');

        let closeButtonText = document.createTextNode('X');

        closeButton.appendChild(closeButtonText);

        closeButton.className = 'close-button';

        popupbox.appendChild(closeButton);

    });

});

document.addEventListener('click',(e)=>{

    if(e.target.className == 'close-button'){
        e.target.parentElement.remove();

        document.querySelector('.popup-overlay').remove();
        
    }
})