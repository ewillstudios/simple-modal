var modal = document.getElementById('modal');
var button = document.getElementById('modalButton');
var close = document.getElementsByClassName('close')[0];

button.onclick = function () {
    'use strict';
    modal.style.display = "block";
};
close.onclick = function () {
    'use strict';
    modal.style.display = "none";
};
window.onclick = function (event) {
    'use strict';
    if (event.target === modal) {
        modal.style.display = "none";
    }
};