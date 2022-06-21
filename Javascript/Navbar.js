
document.querySelector('#searchBtn').addEventListener('click', () => {

    const screenWidth = screen.width;

    if(screenWidth <= 640){
        document.querySelector('#searchBar').classList.toggle('showDiv');
        document.querySelector('#Home').classList.toggle('hideDiv');
        document.querySelector('#MagicNotes').classList.toggle('hideDiv');
        document.querySelector('#divForMagicNote').classList.toggle('center');
        
    }

    else {
        document.querySelector('#searchBar').classList.toggle('showDiv');
        document.querySelector('#MagicNotes').classList.toggle('showDiv');
        document.querySelector('#Home').classList.toggle('hideDiv');
        document.querySelector('#divForMagicNote').classList.toggle('center');

        
    }

    
    
   
}); 


console.log("heheheheh it is working");
console.log(screenWidth);