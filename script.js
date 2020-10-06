let veggies = [ 
    "Gurka",
    "Tomat",
    "Majs",
    "Morot",
    "Vitkål"
]


let cHead = document.getElementById("containerHead")
let cMain = document.getElementById("containerMain")

for (i=0; i < veggies.length; i++) {
    
    let veggieText = document.createElement("div")
    veggieText.innerText = veggies[i]
    let veggie = cHead.appendChild(veggieText)

    veggieText.addEventListener("click", function(){

        let newVeggie = document.createElement("div")
     
        newVeggie.innerText = veggie.innerText
        
    
        cMain.append(newVeggie)
        
        
        

    })


}




