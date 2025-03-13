// pothome ekta function use kore button er data ke 
// fetch kore niye asbo!oi function ta ekta promise response return korbe 
// and oi promise response ke json e convert korbo 
// then oi data ke ekta function call kore 
// argument hiseve pass kore dibo!

function loadCategories(){
 fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then((response)=>response.json())
   .then((data)=>showButtonCategories(data.categories));
}
// 2,abar function use kore video er data ke 
// fetch kore niye asbo!oi function ta ekta promise response return korbe 
// and oi promise response ke json e convert korbo 
// then oi data ke ekta function call kore 
// argument hiseve pass kore dibo!
function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((response)=>response.json())
    .then((data)=>showVideos(data.videos))
}
function showVideos(vidCategories){
  const divVideoContainer=document.getElementById("div-video-container");
  for(let vidCat of vidCategories){
    const divVidCon=document.createElement("div");
    divVidCon.innerHTML=`
    <div class="card bg-base-100 w-11/12 shadow-sm ">
            <figure class="relative">
            
                  <img class="w-full h-[200px] object-cover "
                  src="${vidCat.thumbnail}"
                  alt="Shoes" />

                  <button class=" absolute bottom-2 right-4  rounded-md p-1 bg-[#171717] text-white text-[10px]">3hrs 56 min ago</button>
               
   
            </figure>
            <div class="px-0 py-5">
              
               <div class="flex gap-2">
                  <div class="avatar">
                     <div class=" w-[40px] h-[40px] rounded-full px-0 ">
                       <img class="rounded-lg" src="${vidCat.authors[0].profile_picture}" />
                     </div>
                   </div>
                 <h2 class="text-sm font-semibold">Shape of You</h2>
               </div>
            
               
                
              
           
               <div class="flex gap-2 justify-center ">
                  <div class="text-gray-500 ">
                     Awlad Hossain

                  </div>
                  <div>
                   <img class="w-5 h-5" src="  https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                      
                  </div>
               </div>
               
                <div class="pl-14 text-gray-500 mt-2">91K views</div>
              
            </div>
          </div>
    `
    divVideoContainer.append(divVidCon);
  }
}

// jei function ke call korchi oi function 

function showButtonCategories(categories){
    // console.log(categories)
    // ekhon jekhane amra amader fetch kora data gulo ke use korbo oitar div ta niye aslam
    const divContainer=document.getElementById('div-button-container');
    // ekhon each of the categories data niye kaaj korbo tai for loop use korbo
    for(let cat of categories){
    //  protivar loop ghurle ekta kore div create korbo
    const divCategories=document.createElement("div");
    // ekhane dynamic vabe div create kore fetch kora data gulo ke loop chaliye
    //  ekhon oi data gulo ke diye sob category gulo ke nilam
    divCategories.innerHTML=`
    <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white text-black">${cat.category}</button>
    
    
    `
    divContainer.appendChild(divCategories);
    }

}
loadCategories();
loadVideos()