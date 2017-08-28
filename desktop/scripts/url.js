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

