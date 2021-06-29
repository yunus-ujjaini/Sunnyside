function toggleMenu()
{
    let menubtn=document.getElementById("menubtn");
    let navlink=document.getElementById("navlinks");
    if(menubtn.classList.contains("menubtn-open")==true)
    {
        menubtn.classList.remove("menubtn-open");
        navlink.classList.remove("nav-links-open")
    }
    else{
        menubtn.classList.add("menubtn-open");
        navlink.classList.add("nav-links-open")
    }
}


function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  window.onscroll = function() {
    console.log("called");
    let el=document.getElementById("section-one");
    if(elementInViewport2(el)==true){
        console.log("inViewporyt");
        if(el.classList.contains("loadcontent")==false){
            el.classList.add("loadcontent");
        }
        
    }
    let el2=document.getElementById("section-two");
    if(elementInViewport2(el2)==true){
        console.log("inViewporyt");
        if(el2.classList.contains("loadcontent")==false){
            el2.classList.add("loadcontent");
        }
        
    }
    let el3=document.getElementById("section-three");
    if(elementInViewport2(el3)==true){
        console.log("inViewporyt");
        if(el3.classList.contains("loadcontent")==false){
            el3.classList.add("loadcontent");
        }
        
    }
    let el4=document.getElementById("section-four");
    if(elementInViewport2(el4)==true){
        console.log("inViewporyt");
        if(el4.classList.contains("loadcontent")==false){
            el4.classList.add("loadcontent");
        }
        
    }
    let el5=document.getElementById("section-five");
    if(elementInViewport2(el5)==true){
        console.log("inViewporyt");
        if(el5.classList.contains("loadcontent")==false){
            el5.classList.add("loadcontent");
        }
        
    }
    let el6=document.getElementById("section-six");
    if(elementInViewport2(el6)==true){
        console.log("inViewporyt");
        if(el6.classList.contains("loadcontent")==false){
            el6.classList.add("loadcontent");
        }
        
    }
   
    // let el2=document.getElementById("about");
    // if(elementInViewport2(el2)==true){
    //     console.log("In viewpoint");
    //     if(el2.classList.contains("loadcontent")==false){
    //         el2.classList.add("loadcontent");
    //     }
    // }

    // let el3=document.getElementsByClassName("creation-content-image");
    // if(elementInViewport2(el3[0])==true)
    // {
    //     for(let i=0;i<el3.length;i++)
    //     {
    //         setTimeout(()=>{
    //             el3[i].classList.add("loadcontent2");
    //         },(i*200))
            
    //     }
    // }
   
};