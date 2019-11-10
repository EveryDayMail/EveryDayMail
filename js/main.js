$(document).ready(function() {

    $('#btn_template').click(function () {
        location.href="template.html";
    });
    
    $("#write_new_link").mouseover(function () {
        $('#write_new').animate({opacity: "0.5"}, 1000);
        var tip = $(this).attr('title');

        $(this).attr('title','');
        $(this).append('<div id="tooltip"><div class="tipBody">' + tip + '</div></div>');
    }).mousemove(function(e){
    
        $('#tooltip').css('top', e.pageY + 10);
        $('#tooltip').css('left', e.pageX + 10);
    }).mouseout(function(){
    
        $(this).attr('title', $('.tipBody').html());
        $(this).children('div#tooltip').remove();
        $('#write_new').animate({opacity: "1"}, 1000);
    });

    $('#btn_template').mouseover(function(){
        $('#dropbtn_img_template').prop('src', 'icons/list_black_icon_32.png');
        var tip = $(this).attr('title');

        $(this).attr('title','');
        $(this).append('<div id="tooltip"><div class="tipBody">' + tip + '</div></div>');
    }).mousemove(function(e)
    {
    
        $('#tooltip').css('top', e.pageY + 10);
        $('#tooltip').css('left', e.pageX + 10);
    }).mouseout(function()
    {
    
        $(this).attr('title', $('.tipBody').html());
        $(this).children('div#tooltip').remove();
        $('#dropbtn_img_template').prop('src', 'icons/list_icon_32.png');
    });

    $("#dropbtn_img").mouseover(function () {
        $('#dropbtn_img').prop('src', 'icons/settings_black_icon_32.png');
    });
    $("#dropbtn_img").mouseout(function () {
        $('#dropbtn_img').prop('src', 'icons/settings_icon_32.png');
    });

    $("select#category").change(function () {
        var select_name = $(this).children("option:selected").text();
        $(this).siblings("label").text(select_name);
    });
});


var move = function (list, num) {
    location.href = "edit.html?list="+list+"&template_id=" + num;
};

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

window.addEventListener(`dragover`, (evt = event) => {
    evt.preventDefault();
    evt.dataTransfer.effectAllowed = `none`;
    evt.dataTransfer.dropEffect = `none`;
}, false);

window.addEventListener(`drop`, (evt = event) => {
    evt.preventDefault();
    evt.dataTransfer.effectAllowed = `none`;
    evt.dataTransfer.dropEffect = `none`;
}, false);