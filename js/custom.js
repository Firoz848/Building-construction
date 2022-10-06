// ======================================================
// ===================== For project ====================
// ======================================================

window.onscroll = function() {
    let count = 0;
    let total1 = setInterval(total, 20);
    function total() {
        count++;
        document.getElementById("project").innerHTML = count;
        if(count == 100) {
            clearInterval(total1);
        };
    };

// ======================================================
// ====================== For Credit ====================
// ======================================================

    let count1 = 0;
    let clear1 = setInterval(clear, 20);
    function clear(){
        let = count1++;
        document.getElementById("credit").innerHTML = count1;
        if(count1 == 150) {
            clearInterval(clear1);
        };
    };

// ========================================================
// ======================== For Awards ====================
// ========================================================

    let count2 = 0;
    let clear2 = setInterval(clear3, 20);
    function clear3(){
        count2++;
        document.getElementById("awards").innerHTML = count2;
        if(count2 == 200) {
            clearInterval(clear2);
        };
    };

// ========================================================
// ==================== For Clients =======================
// ========================================================
let count4 = 0;
let clear4 = setInterval(clear5, 20);
function clear5() {
    count4++;
    document.getElementById("client").innerHTML = count4;
    if(count4 == 250) {
        clearInterval(clear4);
    };
};
};

// Scroll navbar
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.main-menu').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 





