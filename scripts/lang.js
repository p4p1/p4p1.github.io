/* script for the language updator */

function translate_fr_navbar() {
    var l_presentation = document.getElementById('l_presentation');
    var l_mywork = document.getElementById('l_mywork');
    var l_resume = document.getElementById('l_resume');
    var l_contactme = document.getElementById('l_contactme');
    var l_credit = document.getElementById('l_credit');

    l_presentation.innerHTML = "Pr&eacute;sentation";
    l_presentation.href= "index.html?lang=fr";
    l_mywork.innerHTML = "Mes projets";
    l_mywork.href = "my_work.html?lang=fr";
    l_resume.innerHTML = "Curriculum vitae";
    l_resume.href = "resume.html?lang=fr";
    l_contactme.innerHTML = "Contactez moi";
    l_contactme.href = "contact.html?lang=fr";
    l_credit.innerHTML = "Cr&eacute;dits";
    l_credit.href = "credits.html?lang=fr";
}

function translate_fr_project_title() {
    var l_p4p1usbloader = document.getElementsByClassName('l_p4p1usbloader');
    var l_rpiUSBgadget = document.getElementsByClassName('l_rpiUSBgadget');
    var i = 0;

    for( i = 0 ; i < l_p4p1usbloader.length; i++) {
        l_p4p1usbloader[i].innerHTML = "inj&eacute;cteur USB p4p1";
    }
    for(i = 0; i < l_rpiUSBgadget.length; i++){
        l_rpiUSBgadget[i].innerHTML = "Rpi gadget USB";
    }
}

function translate_fr_presentation() {
    var title = document.getElementById('p_title');
    var main_para = document.getElementById('p_text');

    title.innerHTML = "Bonjour, Je m\'appelle Leo Smith";
    main_para.innerHTML = "Je suis un d&eacute;veloppeur de logiciels qui adore apprendre, et utiliser toutes langues de programmation. J\'ai une expertize en C et python. J\'ai aussi de l\'exp&eacute;rience en PHP, HTML/CSS, Javascript et aussi les bases en assembleur ARM. Je suis familier avec les environnements UNIX, OSX et Windows. Je comprends aussi la plupart des protocoles r&eacute;seaux. En parall&egrave;le avec la programmation je suis aussi fascin&eacute; par les microcontr&ocirc;leurs Arduino et Raspberry Pi ce qui me donne une exp&eacute;rience en IoT. J\'ai aussi un int&eacute;ret en s&eacute;curit&eacute; informatique (d&eacuterdement de tampon, XSS, CSRF ...).";
}

function translate_fr_contact() {
    var title = document.getElementById('t_title');

    title.innerHTML = "Contactez moi";
}
