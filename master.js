let classClicked =""

listItem = Array.from(document.querySelectorAll('.container ul li'));

for (let index = 0; index < listItem.length; index++) {
   listItem[index].onclick = function () {
       for (let index = 0; index < listItem.length; index++) {
           if (listItem[index].classList.contains('clicked')) {
            listItem[index].classList.remove('clicked')
           }  
       }
      
       this.classList.add('clicked')

       classClicked = this.textContent;
   }
    
}


let submitBtn =document.querySelector('.container button');

let spanRate = document.querySelector('.container-2 p span');

let container =document.querySelector('.container');

let container2 =document.querySelector('.container-2');

console.log(container)


submitBtn.onclick = function () {
    spanRate.textContent = classClicked;

    container.classList.add('none')

    container2.classList.remove('none')
}