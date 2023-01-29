/*
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img') //Step 2just copy and paste line 1-6 except change the images and names
pineTree.src = 'assets/pine-tree.png' //Don't use pine-tree use cammel method 
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom ='200px'
document.body.append(pineTree)
*/


//Steps 3-7 is basically making a funtion that compresses all the code from above
//so we dont waste away copying and pasting it.
//Things we know:
//we know the name of the funtion is gonna be newImage
//It gave us the source's address
//location of where it should be placed so it will be a fixed location.
//Lastly there is a sword, shield and a staff that need to be picked up by clicking on it(later on we need to change it ti double so save the hassle)
//one more thing, to keep in mind ins one is newImages and the others are newItems so lets start with those.

/*
newImage('assets/green-character.gif', 100, 100) //code did not run with these up here so copied and pasted these after the funtion
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300 )
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png ', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
*/

//now that we have the sources from which to pull from we can try to make a function, it will be easier to type it up atleast.

function newImage(url, left, bottom){//dont forget curly braces lol
    var object = document.createElement('img') //line 1 of OG
    object.src = url //we are addressing the 3 variables we have at the beginning of our funtion
    object.style.position = 'fixed' // we tell it that the picture will go on a specific spot
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
function newItem(url, left, bottom){ 
    var object = newImage(url, left, bottom) //All the work is already done so we can just recycle the methodology from up top

    object.addEventListener('dblclick', () => { //This is just an event listener since we chose objects as the name every object under new item will dissapear after a double click.
        object.remove()
    })
}
//The solution uses let but everywhere I look for references in youtube videos use var and its easier 
//to remember var then let, so far code has not broken but I will need to figure out where and where
//it can not be used. In the mean time and for the sake of time I'll continue to use var.
//Please advice if I am mistaken or using the wrong equation and getting the right answer lol.

    newImage('assets/green-character.gif', 100, 100)
    newImage('assets/pine-tree.png', 450, 200)
    newImage('assets/tree.png', 200, 300 )
    newImage('assets/pillar.png', 350, 100)
    newImage('assets/crate.png', 150, 200)
    newImage('assets/well.png ', 500, 425)
    
    newItem('assets/sword.png', 500, 405)
    newItem('assets/sheild.png', 165, 185) //there was a typo here lol for the sake of the code I kept the typo in the assets
    newItem('assets/staff.png', 600, 100)