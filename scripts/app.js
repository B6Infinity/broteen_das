const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // entry.target.classList.remove('anim-hidden');
            entry.target.classList.add('anim-show');
        }else{
            entry.target.classList.remove('anim-show');
            // entry.target.classList.add('anim-hidden');
        }
    });
});


const hiddenElements = document.getElementsByClassName('anim-hidden'); // .anim-show
// hiddenElements.forEach((el) => observer.observe(el));
for(let i = 0; i < hiddenElements.length; i++){
    observer.observe(hiddenElements[i]);
}
