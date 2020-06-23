
function Animal() {};
Animal.prototype.eat = function() {
    console.log('fsdfsdfs');
}

let rabbir = Object.create(Animal.prototype);
rabbir.eat();
















// const modal = document.querySelector('.modal');
// const overflow = document.createElement('div');
// function openWin() {
//         overflow.className = "overflow";
//         document.body.appendChild(overflow);
//         var height = modal.offsetHeight;
//         modal.style.marginTop = - height / 2 + "px";
//         modal.style.top = "50%";
// }

// if (!Element.prototype.remove) {
//         Element.prototype.remove = function remove() {
//                 if (this.parentNode) {
//                         this.parentNode.removeChild(this);
//                 }
//         };
// }

// overflow.onclick = function () {
//         modal.style.top = "-100%";
//         overflow.remove();
// }



// if (str != null && typeof str !== "undefined") {
//     str = str.trim();
//  }
 
//  if (!str) { 
//     console.log("Пусто");
//  }