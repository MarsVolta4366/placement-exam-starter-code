// First, tell us your name
let yourName = "Derek Slauson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    gb++
    document.getElementById("qty-gb").textContent = gb
    document.getElementById("qty-total").textContent = (gb + cc + sugar)
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById("add-cc").addEventListener("click", () => {
    cc++
    document.getElementById("qty-cc").textContent = cc
    document.getElementById("qty-total").textContent = (gb + cc + sugar)
})

document.getElementById("add-sugar").addEventListener("click", () => {
    sugar++
    document.getElementById("qty-sugar").textContent = sugar
    document.getElementById("qty-total").textContent = (gb + cc + sugar)
})

//Subtract buttons
document.getElementById("minus-gb").addEventListener("click", () => {
    if(gb > 0) {
        gb--
        document.getElementById("qty-gb").textContent = gb
        document.getElementById("qty-total").textContent = (gb + cc + sugar)
    }
})

document.getElementById("minus-cc").addEventListener("click", () => {
    if(cc > 0) {
        cc--
        document.getElementById("qty-cc").textContent = cc
        document.getElementById("qty-total").textContent = (gb + cc + sugar)
    }
})

document.getElementById("minus-sugar").addEventListener("click", () => {
    if(sugar > 0) {
        sugar--
        document.getElementById("qty-sugar").textContent = sugar
        document.getElementById("qty-total").textContent = (gb + cc + sugar)
    }
})