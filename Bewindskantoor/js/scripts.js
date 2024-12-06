// Sample using dynamic pages with turn.js
var numberOfPages = 50; 
var fontSize = "20px";
var fontAlight = "left";
var fontName = "Crock";
var fontType = "crock";
var fontStyle = 1;
var isSelectedText = "";
var isClickPage = 0;
var isOldClickPage = 0;

var notepadData = {}
var notepadSend = {}
var notepadOpen = false; 

$(window).ready(function(){
    window.addEventListener('message', function(event){
        var item = event.data;

        if (item.menu == "open") {
            notepadOpen = true;
            notepadData = item.data;
            OpenNotepad()
        }

        if (item.menu == "refresh") {
            //$(".container_main").html('<div class="image_book"><div id="controls"></div><div id="book"><div class="cover"><div class="container_box" id="bookbox_1"><textarea class="note_textarea" placeholder="" name="comment" id="1" cols="30" rows="10" onclick="ClickPage(1)">...</textarea></div><div class="header" id="bookheader_1"><div class="header_text">1</div></div></div></div></div>');
            //RefreshPage()
        }
    });

    $('#book').turn({acceleration: true,
        pages: numberOfPages,
        elevation: 50,
        gradients: !$.isTouch,
        when: {
            turning: function(e, page, view) {
            // Získá rozsah stránek, které kniha právě potřebuje.
            var range = $(this).turn('range', page);
            // Zkontrolujte, zda je každá stránka v knize
            for (page = range[0]; page<=range[1]; page++) 
                addPage(page, $(this));
            },
            turned: function(e, page) {
                $('#page-number').html(page);
            }
        }
    });

    $('#number-pages').html(numberOfPages);
    $('#page-number').keydown(function(e){
        if (e.keyCode==13) {
            $('#book').turn('page', $('#page-number').val());
        }
    });

    var noteTextareaElements = document.querySelectorAll(".note_textarea");
    noteTextareaElements.forEach(function(element) {
        element.addEventListener("mouseup", recordSelectedText);
    });
});

function addPage(page, book) {
    // console.log('ENABLE PAGE '+page+': ', book.turn('hasPage', page))
    if (!book.turn('hasPage', page) || notepadOpen) {
        var element = $('<div />', {'class': 'page '+((page%2==0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');
        book.turn('addPage', element, page);
        setTimeout(function(){
            if (notepadData != undefined) {
                if (notepadData[page]) {
                    element.html('<div class="container_box" id="bookbox_'+page+'"><div class="note_textarea" id="'+page+'" contenteditable="true" onclick="ClickPage('+page+')">Zde umístěte svůj text.</div></div><div class="header" id="bookheader_'+page+'"><div class="header_text">'+page+'</div></div>');
                    //element.html('<div class="container_box" id="bookbox_'+page+'"><textarea class="note_textarea" placeholder="" name="comment" id="'+page+'" form="usrform" maxlength="1650" cols="30" rows="10" oninput="CheckRowsNumber()" onclick="ClickPage('+page+')">...</textarea></div><div class="header" id="bookheader_'+page+'"><div class="header_text">'+page+'</div></div>');
                    const textArea = document.getElementById("" + page);
                    if (textArea) {
                        textArea.innerHTML = notepadData[page].text;
                    }
                } else {
                    element.html('<div class="container_box" id="bookbox_'+page+'"><div class="note_textarea" id="'+page+'" contenteditable="true" onclick="ClickPage('+page+')">Zde umístěte svůj text.</div></div><div class="header" id="bookheader_'+page+'"><div class="header_text">'+page+'</div></div>');
                    //element.html('<div class="container_box" id="bookbox_'+page+'"><textarea class="note_textarea" placeholder="" name="comment" id="'+page+'" form="usrform" maxlength="1650" cols="30" rows="10" oninput="CheckRowsNumber()" onclick="ClickPage('+page+')">...</textarea></div><div class="header" id="bookheader_'+page+'"><div class="header_text">'+page+'</div></div>');
                }
            }
        }, 250);
    }
}

// Funkce pro získání označeného textu
function getSelectedText() {
    var selectedText = "";
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        selectedText = document.selection.createRange().text;
    }
    return selectedText;
}

// Funkce pro zaznamenání označeného textu
function recordSelectedText() {
    var selectedText = getSelectedText();
    if (selectedText !== "") {
        isSelectedText = selectedText;
        // console.log("Označený text: ", isSelectedText)
        // document.execCommand('bold', false, null)
    }
}

function OpenNotepad() {
    for (const key in notepadData) {
        if (notepadData.hasOwnProperty(key)) {
            if (key == 1) {
                const textArea = document.getElementById("1");
                if (textArea != null ) {
                    textArea.innerHTML = notepadData[key].text;
                }
            }
        }
    }
    $(".container_main").css("display", "block");
    $(".container_settings").css("display", "block");
}
 
function RefreshPage() {
    setTimeout(function(){
        $('#book').turn({acceleration: true,
            pages: numberOfPages,
            elevation: 50,
            gradients: !$.isTouch,
            when: {
                turning: function(e, page, view) {
                // Získá rozsah stránek, které kniha právě potřebuje.
                var range = $(this).turn('range', page);
                // Zkontrolujte, zda je každá stránka v knize
                for (page = range[0]; page<=range[1]; page++) 
                    addPage(page, $(this));
                },
                turned: function(e, page) {
                    $('#page-number').html(page);
                }
            }
        });
        $('#number-pages').html(numberOfPages);
        $('#page-number').keydown(function(e){
            if (e.keyCode==13) {
                $('#book').turn('page', $('#page-number').val());
            }
        }); 
    }, 100);
    // }, 1000);
}

function CheckRowsNumber() {
    if (isClickPage != 0) {
        var maxRows = 15;
        const textarea = document.getElementById(""+isClickPage+"");
        const charCount = textarea.textContent.length;
        if (charCount > 1400) {
            maxRows = 2;
        } else if (charCount > 1100) {
            maxRows = 5;
        } else if (charCount > 800) {
            maxRows = 8;
        } else if (charCount > 500) {
            maxRows = 12;
        } else {
            maxRows = 15;
        }
        var currentRows = textarea.textContent.split("\n").length;
        if (currentRows > maxRows) {
            textarea.textContent = textarea.textContent.split("\n").slice(0, maxRows).join("\n");
        }
    }
}

function ClickPage(newPage) {
    if (isClickPage != 0) {
        const textArea = document.getElementById(""+isClickPage+"");
        if (textArea != null ) {
            if (textArea.innerHTML != "Zde umístěte svůj text.") {
                notepadData[isClickPage].text = textArea.innerHTML;
            }
        }
    }
    isClickPage = newPage;
}

$(document).bind('keydown', function(e){
    // if (e.target && e.target.tagName.toLowerCase()!='input')
    if (e.keyCode==37) {
        if (isClickPage != 0) {
            const textArea = document.getElementById(""+isClickPage+"");
            if (textArea != null ) {
                if (textArea.innerHTML != "Zde umístěte svůj text.") {
                    notepadData[isClickPage].text = textArea.innerHTML;
                }
            }
        }
        $('#book').turn('previous');
    } else if (e.keyCode==39) {
        if (isClickPage != 0) {
            const textArea = document.getElementById(""+isClickPage+"");
            if (textArea != null ) {
                if (textArea.innerHTML != "Zde umístěte svůj text.") {
                    notepadData[isClickPage].text = textArea.innerHTML;
                }
            }
        }
        $('#book').turn('next');
    } else if (e.keyCode==27) { //27-8
        $(".container_main").css("display", "none");
        $(".container_settings").css("display", "none");
        if (isClickPage != 0) {
            const textArea = document.getElementById(""+isClickPage+"");
            if (textArea != null ) {
                if (textArea.innerHTML != "Zde umístěte svůj text.") {
                    notepadData[isClickPage].text = textArea.innerHTML;
                }
            }
        }
        //$(".container_main").html("")
        $.post("https://realplay_notepad/ClosedSaveNotepad", JSON.stringify({data: notepadData}));
    }
});