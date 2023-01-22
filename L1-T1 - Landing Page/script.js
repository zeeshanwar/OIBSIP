let imgs = document.getElementsByClassName('productimgbox');

let heroimg = document.getElementById('heroimgleft');

let mainbtn = document.getElementById('mainbtn')

imgslink =
[
     "",
     "images/prod1hover.webp",
     "images/prod2hover.webp",
     "images/prod3hover.webp",
     "images/prod4hover.webp",
     "images/prod5hover.webp",
]

// console.log(imgs);

     for (let z = 1; z <= imgs.length; z++) 
     {

          let prdct = document.getElementById(`product${z}image`);
          let templink = prdct.src;


          prdct.addEventListener('mouseover' , () => {
               prdct.src = imgslink[z];
          })

          prdct.addEventListener('mouseout' , () => {
               prdct.src = templink;
          })

          
     }


     console.log(heroimg);
     console.log(mainbtn);


mainbtn.addEventListener('mouseover', ()=>{

     heroimg.src = "images/Layer 3@1x.png"
     // heroimg.style.zoom = "6%"
     // heroimg.style.height = "492px"
     // heroimg.style.width = "529px"
     
})

mainbtn.addEventListener('mouseout', ()=>{

     heroimg.src = "images/Layer 5@1x.png"
     // heroimg.style.height = "508px"
     // heroimg.style.width = "429px"

})