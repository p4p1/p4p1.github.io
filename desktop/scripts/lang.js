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

function translate_fr_img_navbar() {
    var dl_btn = document.getElementById('l_dlbtn');
    var mode_btn = document.getElementById('l_mbtn');

    dl_btn.innerHTML = "T&eacute;l&eacute;charger le CV";
    dl_btn.href = "../upload/fr_resume.pdf";
    mode_btn.innerHTML = "Plus..";
}

function change_fr_img() {
    var img = document.getElementById('resume_img');

    img.src="img/fr_resume-1.jpg";
}
