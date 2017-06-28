function disp_p4p1(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img src="https://p4p1.github.io/img/peachx2.png" />';
    document.getElementById('box_title').innerHTML = 'p4p1';
    document.getElementById('box_footer_left_icon').innerHTML = '<img onclick="disp_kb();" src="https://p4p1.github.io/img/flopx2.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/p4p1/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img onclick="disp_larp();" src="https://p4p1.github.io/img/lemonx2.png" />';
    if (lang == "English"){
        document.getElementById('box_description').innerHTML = "<p>This is a remote administration tool that allows you to put a shell on your' machine that controls an or multiple other machines. It has a client and server side. The server side of the application is cross platform, and the client side is only Windows compatible. Each client is manually configured and will connect to an the ip that is hard writen inside of it's binary or from a configuration file that is on the clients computer. This is an example of the hard coded configuration file:</p><img src='img/cfg.png'/><p>green -> port | red->ip address | white -> advanced configuration<br />On the network side of things p4p1 works in a star map, it could be visualised like this:</p><img width='330px' height='207px' src='img/network_map.png' /><p>Because of the network configuration, the server can send commands to individual clients or send to every client that is online. To install the server run</p><pre><code class='python'>pip install -U .</code></pre><p>inside of the server directory.<br />For more information look at the <u><a href='https://github.com/p4p1/p4p1/wiki'>wiki</a></u>.</p>";
    } else {
    }
}

function disp_larp(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img src="https://p4p1.github.io/img/lemonx2.png" />';
    document.getElementById('box_title').innerHTML = 'larp';
    document.getElementById('box_description').innerHTML = '<p>larp, or leo arp is a tool to arp spoof you\'re entire network. I made this for educational purposes  so please do not use this for illegal activites. larp has different sniffers implemented to get data from the current network. you can also add you\'re own sniffers.</p><img src=""width="40%" height="40%" /><iframe width="40%" height="40%" src="" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('box_footer_left_icon').innerHTML = '<img onclick="disp_p4p1();" src="https://p4p1.github.io/img/peachx2.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/larp/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img onclick="disp_kb();" src="https://p4p1.github.io/img/flopx2.png" />';

}

function disp_kb(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img src="https://p4p1.github.io/img/flopx2.png" />';
    document.getElementById('box_title').innerHTML = 'kb_arduino_lib';
    document.getElementById('box_description').innerHTML = '<p>kb_arduino_lib, is a library for arduino. This library allows you to turn you\'re arduino into a keyboard.</p><img src=""width="40%" height="40%" /><iframe width="40%" height="40%" src="https://www.youtube.com/embed/6aWnanQLB-s" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('box_footer_left_icon').innerHTML = '<img onclick="disp_larp();" src="https://p4p1.github.io/img/lemonx2.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/kb_arduino_lib/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img onclick="disp_p4p1();" src="https://p4p1.github.io/img/peachx2.png" />';

}
