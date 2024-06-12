let loadingDiv = document.querySelector('.loading')
let count = 0;
let loaded = false;

function interval (){
    setInterval(() => {
    
    if (count < 101) {
        loadingCount.textContent = count++
        progress.style.width = count + '%'
    } else if (loaded){
        loadingDiv.style.opacity = '0'
        clearInterval()
    }
        setTimeout(() => {
        loadingDiv.style.display = 'none'
    }, 300);
}, 10);
} 
interval()

window.addEventListener('load', () => {

    loaded = true;

    clearInterval()
    loadingCount.textContent = 100
    progress.style.width = 100 + '%'
    loadingDiv.style.opacity = '0'
    setTimeout(() => {
        loadingDiv.style.display = 'none'
    }, 300);
})