function detectmob() {if( navigator.userAgent.match(/Android/i)|| navigator.userAgent.match(/webOS/i)|| navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPod/i)|| navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/Windows Phone/i) ){return true;} else {return false;}}


function myFunction(x) {
        x.classList.toggle("change");
        $(document).ready(function(){
            $(".content").toggleClass("move_content");
            $(".navbar").toggleClass("move_nav");
            $(".separator").toggleClass("hide_sep");
        });
}

function disp_homme() {
    document.getElementById("navbar_container").innerHTML = '<h1 style="color:white;font-size: 100%; margin:10px 10px 10px 10px"><a href="homme.html"># Homme</a></h1><table class="n_table"><tr><th class="nt_th"><a href="homme.html#Tshirt">T-Shirt</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="homme.html#Tshirt-Baseball">T-Shirt Baseball</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="homme.html#sweat">Sweat</a></th></tr><tr class="separator hide_sep"><th></th></tr></table><h1 class="back_icon"><a onclick="disp_ind()"><img width="50px" src="img/back.png"></a></h1>';
}

function disp_femme() {
    document.getElementById("navbar_container").innerHTML = '<h1 style="color:white;font-size: 100%; margin:10px 10px 10px 10px"># Homme</h1><table class="n_table"><tr><th class="nt_th"><a href="femme.html#debardeur">D&eacute;bardeur</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="femme.html#Tshirt">T-Shirt</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="femme.html#short">Shorts</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="femme.html#brassieres">Brassi&egrave;res</th></tr><tr class="separator hide_sep"><th></th></tr></table><h1 class="back_icon"><a onclick="disp_ind()"><img width="50px" src="img/back.png"></a></h1>';
}

function disp_ind() {
    document.getElementById("navbar_container").innerHTML = '<h1 style="color:white;font-size: 100%; margin:10px 10px 10px 10px"># Navigation</h1><table class="n_table"><tr><th class="nt_th"><a href="index.html">Accueil</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="presentation.html">Information</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="nouvelle_collection.html">Nouvelle Collection</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a onclick="disp_homme()">Homme &gt;</th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a onclick="disp_femme()">Femme &gt;</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><a href="nos_ath.html">Nos athl&egrave;tes</a></th></tr><tr class="separator hide_sep"><th></th></tr><tr><th class="nt_th"><h4>&copy; Copyright AOC - 2017</h4></th></tr></table>';
}
