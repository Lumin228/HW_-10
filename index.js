import"./assets/styles-Du1tBAGb.js";import{a as o,S as s}from"./assets/vendor-C-3xrRrD.js";const t=document.querySelector(".gallery"),l=document.querySelector("form"),c="41243216-d0c3aacbdbd6d0005d29ac5a4";l.addEventListener("submit",i=>{i.preventDefault(),console.log(),o.get(`https://pixabay.com/api/?key=${c}&q=${i.currentTarget.search.value}&image_type=photo`).then(function(e){console.log(e.data.hits),e.data.hits.map(a=>{t.insertAdjacentHTML("afterbegin",`<a href="${a.largeImageURL}" class="smallIMG">
            <img src="${a.previewURL}" class="bigIMG" height="100" width="150">
            <div class='info'>
            <div class='elem'>
            <p>Likes</p>
            <p>${a.likes}</p>
            </div>
            <div class='elem'>
            <p>Views</p>
            <p>${a.views}</p>
            </div>
            <div class='elem'>
            <p>Comments</p>
            <p>${a.comments}</p>
            </div>
            <div class='elem'>
            <p>Downloads</p>
            <p>${a.downloads}</p>
            </div>
            </div>
            </a>`)}),new s(".gallery a").on("show.simplelightbox",function(){})}).catch(function(e){console.log(e)})});
//# sourceMappingURL=index.js.map
