var list = document.querySelector('.carousel-list')
var prevbtt = document.querySelector('.carousel-prev')
var nextbtt = document.querySelector('.carousel-next')
var currentIndex = 0

prevbtt.addEventListener('click', function(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = 2
    }
    updateListPosition()
})
nextbtt.addEventListener('click', function(){
    currentIndex++
    if(currentIndex > 2){
        currentIndex = 0
    }
    updateListPosition()
})
function updateListPosition(){
    var position = -currentIndex * 600
    list.style.transform = 'translateX(' + position + 'px)'
}



// var ModalWindow = document.getElementById("ModalWindow")
// var openWindow = document.getElementById("open-window")
// var closeWindow = document.getElementById("close-window")

// // openWindow.onclick = function() {
// //     ModalWindow.style.display = "block"
// // }
// closeWindow.onclick = function() {
//     ModalWindow.style.display = "none"
// }
// window.onclick = function(event) {
//     if (event.target == ModalWindow) {
//         ModalWindow.style.display = "none"
//     }
// }

// var links = document.querySelectorAll('a[data-book-id]')
// links.forEach(link => {
//     link.addEventListener('click', event => {
//         var bookID = event.target.getAttribute('data-book-id')
//         fetch('source.json').then(Response => Response.json()).then(source => {
//             var book = source.books.find(book => book.id === bookID)
//             var title = document.querySelector('.container-book-info-notes-title')
//             title.textContent = 'Título: ' + book.title
//             var author = document.querySelector('.container-book-info-notes-author')
//             author.textContent = 'Autor: ' + book.author
//             var company = document.querySelector('.container-book-info-notes-company')
//             company.textContent = 'Editora: ' + book.company
//             var pubdate = document.querySelector('.container-book-info-notes-pubdate')
//             pubdate.textContent = 'Data de publicação: ' + book.pubdate
//         })
//     })
// })