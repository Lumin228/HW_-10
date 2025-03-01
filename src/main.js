import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const divPhoto = document.querySelector('.gallery')
const form = document.querySelector('form')
const KEY = "41243216-d0c3aacbdbd6d0005d29ac5a4";

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log();
    axios.get(`https://pixabay.com/api/?key=${KEY}&q=${evt.currentTarget.search.value}&image_type=photo`)
  .then(function (response) {
    // handle success   
    console.log(response.data.hits);
     
   response.data.hits.map(element => {
         divPhoto.insertAdjacentHTML(
            "afterbegin", `<a href="${element.largeImageURL}" class="smallIMG">
            <img src="${element.previewURL}" class="bigIMG" height="100" width="150">
            <div class='info'>
            <div class='elem'>
            <p>Likes</p>
            <p>${element.likes}</p>
            </div>
            <div class='elem'>
            <p>Views</p>
            <p>${element.views}</p>
            </div>
            <div class='elem'>
            <p>Comments</p>
            <p>${element.comments}</p>
            </div>
            <div class='elem'>
            <p>Downloads</p>
            <p>${element.downloads}</p>
            </div>
            </div>
            </a>`
        )

    });
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {});
    document.addEventListener
// response.data.hits.forEach(element => {
//     divPhoto.insertAdjacentHTML("afterbegin", `<p>${element.id}</p>`)

// });

    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  //  let getPhotos = axios.get(`https://pixabay.com/api/?key=${KEY}&q=${evt.currentTarget.email.value}&image_type=photo`);
  //  getPhotos.forEach(element => {
  //      `<li><a href='getPhotos.data.hits'></a></li>`
  //  });
})
