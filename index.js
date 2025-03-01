import"./assets/styles-COGGUw73.js";import{a as c,S as r,i as d}from"./assets/vendor-cW5AzyDy.js";const p=document.querySelector(".gallery"),h=document.querySelector("form"),n="41243216-d0c3aacbdbd6d0005d29ac5a4",t=document.querySelector(".load_MORE");let s="",l=1;console.log(t);h.addEventListener("submit",a=>{a.preventDefault(),s=a.currentTarget.search.value,console.log(),c.get(`https://pixabay.com/api/?key=${n}&q=${a.currentTarget.search.value}&image_type=photo&page=1`).then(function(o){if(console.log(o.data.hits.length),o.data.hits.length===0)throw error;o.data.hits.map(i=>{p.insertAdjacentHTML("afterbegin",`<a href="${i.largeImageURL}" class="smallIMG">
            <img src="${i.previewURL}" class="bigIMG" height="100" width="150">
            <div class='info'>
            <div class='elem'>
            <p>Likes</p>
            <p>${i.likes}</p>
            </div>
            <div class='elem'>
            <p>Views</p>
            <p>${i.views}</p>
            </div>
            <div class='elem'>
            <p>Comments</p>
            <p>${i.comments}</p>
            </div>
            <div class='elem'>
            <p>Downloads</p>
            <p>${i.downloads}</p>
            </div>
            </div>
            </a>`)}),t.classList.remove("is-hidden"),new r(".gallery a").on("show.simplelightbox",function(){})}).catch(function(o){d.warning({title:"Caution",message:`We don't have a photos of ${s}`})})});t.addEventListener("click",()=>{l+=1,console.log(),c.get(`https://pixabay.com/api/?key=${n}&q=${s}&image_type=photo&page=${l}`).then(function(a){if(console.log(a.data.hits.length),a.data.hits.length===0)throw error;a.data.hits.map(e=>{p.insertAdjacentHTML("beforeend",`<a href="${e.largeImageURL}" class="smallIMG">
            <img src="${e.previewURL}" class="bigIMG" height="100" width="150">
            <div class='info'>
            <div class='elem'>
            <p>Likes</p>
            <p>${e.likes}</p>
            </div>
            <div class='elem'>
            <p>Views</p>
            <p>${e.views}</p>
            </div>
            <div class='elem'>
            <p>Comments</p>
            <p>${e.comments}</p>
            </div>
            <div class='elem'>
            <p>Downloads</p>
            <p>${e.downloads}</p>
            </div>
            </div>
            </a>`)}),new r(".gallery a").on("show.simplelightbox",function(){}),scrollBy({top:600,behavior:"smooth"})}).catch(function(a){d.warning({title:"Caution",message:`We don't have a photos of ${s}`})})});
//# sourceMappingURL=index.js.map
