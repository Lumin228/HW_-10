import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const divPhoto = document.querySelector('.gallery')
const form = document.querySelector('form')
const KEY = "41243216-d0c3aacbdbd6d0005d29ac5a4";
const loadMore = document.querySelector('.load_MORE')
let result = ''
let i = 1
console.log(loadMore);

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    result = evt.currentTarget.search.value
    console.log();
    axios.get(`https://pixabay.com/api/?key=${KEY}&q=${evt.currentTarget.search.value}&image_type=photo&page=1`)
  .then(function (response) {
    // handle success   
    console.log(response.data.hits.length);
     if(response.data.hits.length === 0){
      throw error
     }
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
    loadMore.classList.remove("is-hidden");
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {});
  })
  .catch(function (error) {
    iziToast.warning({
      title: 'Caution',
      message: `We don't have a photos of ${result}`,
  });
  })
});

loadMore.addEventListener('click', () => {
  i += 1
  console.log();
  
  axios.get(`https://pixabay.com/api/?key=${KEY}&q=${result}&image_type=photo&page=${i}`)
  .then(function (response) {
    // handle success   
    console.log(response.data.hits.length);
     if(response.data.hits.length === 0){
      throw error
     }
   response.data.hits.map(element => {
         divPhoto.insertAdjacentHTML(
            "beforeend", `<a href="${element.largeImageURL}" class="smallIMG">
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
    scrollBy({top: 600,
      behavior: "smooth",})
  })
  .catch(function (error) {
    iziToast.warning({
      title: 'Caution',
      message: `We don't have a photos of ${result}`,
  });
  })
})
