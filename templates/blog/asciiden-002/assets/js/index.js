const navigation = document.querySelector('.navigation-ownNav');
const menu_toggle = document.querySelector('.menu-toggle-ownNav');

menu_toggle.onclick = function() {
  navigation.classList.toggle('active')
}

function typing_contact() {
    var i = 0;
    var txt = 'Hey, I\'m Dennis!'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typing").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

typing_contact();