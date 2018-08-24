// make internal link smooth

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { 
    item.addEventListener('click', (e)=> {
        let val = item.getAttribute('href')
        let target = document.querySelector(val)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, val)
        e.preventDefault()
    })
}