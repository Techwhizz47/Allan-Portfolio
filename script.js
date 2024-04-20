const callback= (entries) => {
    console.log(entries);
    entries.forEach(
        (entry) => {
            if (entry.isIntersecting){
                console.log("The element is intersecting------->");
                entry.target.style.animation=entry.target.dataset.animate
                observer.unobserve(entry.target)
            }
            else {entry.target.style.animation="none"}
        }
    )
    // const thresholdValue = 0.2;
    
}

let observer = new IntersectionObserver(callback);

const animationItems = document.querySelectorAll(".animate");
    animationItems.forEach(item =>{
        observer.observe(item)
    }
)