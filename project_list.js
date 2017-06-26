/*
<table id="box_list" style="width:100%">
    <caption><h3>Click the icon to go on a project:</h3></caption>
    <tbody>
        <tr>
            <th><img width="15px" height="15px" src="img/peach_px.png" onclick="disp_p4p1();" /> | p4p1</th>
            <th><img width="15px" height="15px" src="img/lemon_px.png" onclick="disp_larp();" /> | larp</th>
            <th><img width="15px" height="15px" src="img/flopi.png" onclick="disp_kb();" /> | kb_arduino</th>
        </tr>
    </tbody>
</table>
    */

<<<<<<< HEAD
function disp_list(lang) {
    if (lang == "English") {
        document.getElementById('box_content').innerHTML = '<table id="box_list" style="width:100%"><caption><h3>Click the icon to go on a project:</h3></caption><tbody><tr><th><img width="15px" height="15px" src="img/peach_px.png" onclick="disp_p4p1();" /> | p4p1</th><th><img width="15px" height="15px" src="img/lemon_px.png" onclick="disp_larp();" /> | larp</th><th><img width="15px" height="15px" src="img/flopi.png" onclick="disp_kb();" /> | kb_arduino</th></tr></tbody></table>';
    } else {
    document.getElementById('box_content').innerHTML = '<table id="box_list" style="width:100%"><caption><h3>Clicke sur l\'icone correspondant au projet:</h3></caption><tbody><tr><th><img width="15px" height="15px" src="img/peach_px.png" onclick="disp_p4p1();" /> | p4p1</th><th><img width="15px" height="15px" src="img/lemon_px.png" onclick="disp_larp();" /> | larp</th><th><img width="15px" height="15px" src="img/flopi.png" onclick="disp_kb();" /> | kb_arduino</th></tr></tbody></table>';

    }
=======
function disp_list() {
    document.getElementById('box_content').innerHTML = '<table id="box_list" style="width:100%"><caption><h3>Click the icon to go on a project:</h3></caption><tbody><tr><th><img src="img/peachx2.png" onclick="disp_p4p1();" /> | p4p1</th><th><img src="img/lemonx2.png" onclick="disp_larp();" /> | larp</th><th><img src="img/flopx2.png" onclick="disp_kb();" /> | kb_arduino</th></tr></tbody></table>';
>>>>>>> 3a3f17e83ea89e6e00dc3b820b275ac5746c16c8
}
