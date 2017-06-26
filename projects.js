function disp_Projects(lang) {

    var i = Math.floor((Math.random() * 3));

    if (i == 0) {
        disp_p4p1(lang);
    } else if(i == 1){
        disp_larp(lang);
    } else {
        disp_kb(lang);
    }

}

function disp_p4p1(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img height="25px" width="25px" src="https://p4p1.github.io/img/peach_px.png" />';
    document.getElementById('box_title').innerHTML = 'p4p1';
    document.getElementById('box_description').innerHTML = '<p>p4p1, is a reverse shell for remote use of the windows dommand prompt. This reverse shell allows you to use the dos shell that is provided with cmd.exe as a remote tool.</p><img width="280px" height="156px" src="https://raw.githubusercontent.com/p4p1/p4p1/master/testing/Documentation/Screen%20Shot%202016-10-14%20at%2001.02.24.png" /><iframe width="280px" height="156px" src="https://www.youtube.com/embed/RpRrMuGo_y4" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('box_footer_left_icon').innerHTML = '<img height="25px" onclick="disp_kb();" width="25px" src="https://p4p1.github.io/img/flopi.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/p4p1/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img height="25px" width="25px" onclick="disp_larp();" src="https://p4p1.github.io/img/lemon_px.png" />';

}

function disp_larp(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img height="25px" width="25px" src="https://p4p1.github.io/img/lemon_px.png" />';
    document.getElementById('box_title').innerHTML = 'larp';
    document.getElementById('box_description').innerHTML = '<p>larp, or leo arp is a tool to arp spoof you\'re entire network. I made this for educational purposes  so please do not use this for illegal activites. larp has different sniffers implemented to get data from the current network. you can also add you\'re own sniffers.</p><img src=""width="40%" height="40%" /><iframe width="40%" height="40%" src="" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('box_footer_left_icon').innerHTML = '<img height="25px" width="25px" onclick="disp_p4p1();" src="https://p4p1.github.io/img/peach_px.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/larp/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img height="25px" width="25px" onclick="disp_kb();" src="https://p4p1.github.io/img/flopi.png" />';

}

function disp_kb(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img height="25px" width="25px" src="https://p4p1.github.io/img/flopi.png" />';
    document.getElementById('box_title').innerHTML = 'kb_arduino_lib';
    document.getElementById('box_description').innerHTML = '<p>kb_arduino_lib, is a library for arduino. This library allows you to turn you\'re arduino into a keyboard.</p><img src=""width="40%" height="40%" /><iframe width="40%" height="40%" src="https://www.youtube.com/embed/6aWnanQLB-s" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('box_footer_left_icon').innerHTML = '<img height="25px" width="25px" onclick="disp_larp();" src="https://p4p1.github.io/img/lemon_px.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/kb_arduino_lib/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img height="25px" width="25px" onclick="disp_p4p1();" src="https://p4p1.github.io/img/peach_px.png" />';

}
