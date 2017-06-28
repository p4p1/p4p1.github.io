function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    vars;
}

function move_list(){
    if (document.URL.indexOf("?") > 0) {
        if (document.URL.indexOf("pos") > 0) {
            document.location.href = document.URL.replace("pos=pres", "pos=list")
        } else {
            document.location.href = document.URL+"&pos=list";
        }
    } else {
        document.location.href = document.URL+"?pos=list";
    }
}
function change_lang(l) {
    if (document.URL.indexOf("?") > 0) {
        if (document.URL.indexOf("lang") > 0) {
            if (document.URL.indexOf("fr") > 0) {
                document.location.href = document.URL.replace("lang=fr", "lang=en")
            } else {
                document.location.href = document.URL.replace("lang=en", "lang=fr")
            }
        } else {
            document.location.href = document.URL+"&lang="+l;
        }
    } else {
        document.location.href = document.URL+"?lang="+l;
    }

}
function move_presentation(){
    if (document.URL.indexOf("?") > 0) {
        if (document.URL.indexOf("pos") > 0) {
            document.location.href = document.URL.replace("pos=list", "pos=pres")
        } else {
            document.location.href = document.URL+"&pos=pres";
        }
    } else {
        document.location.href = document.URL+"?pos=pres";
    }
}
var lang="English";
if ( $_GET("lang") == "fr" ) {
    lang = "French";
    document.getElementById('presentation_link').innerHTML = "Pr&eacute;sentation";
    document.getElementById('project_list_link').innerHTML = "Projets";
    document.getElementById('email_link').innerHTML = "Email";
} else {
    lang = "English";
}
if ($_GET("pos") == "list") {
    disp_list(lang);
} else {
    disp_presentation(lang);
}
