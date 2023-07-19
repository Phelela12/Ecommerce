const wrapper = document.querySelector(".sliderWrapper")


menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        console.log("you clicked!" + index);
    });
})