// Sample using dynamic pages with turn.js
var numberOfPages = 50; 
var fontSize = "20px";
var fontAlight = "left";
var fontName = "Crock";
var fontType = "crock";
var fontStyle = 1;
var oldClickPage = 0;

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
            $(".container_main").html('<div class="image_book"><div id="controls"></div><div id="book"><div class="cover"><div class="contrainer_box" id="bookbox_1"><textarea class="note_textarea" placeholder="" name="comment" id="1" cols="30" rows="10" onclick="OldClickPage(1)">...</textarea></div><div class="header" id="bookheader_1"><div class="header_text">1</div></div></div></div></div>');
            RefreshPage()
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
});

function OpenNotepad() {
    for (const key in notepadData) {
        if (notepadData.hasOwnProperty(key)) {
            if (key == 1) {
                const textArea = document.getElementById("1");
                let fontik = notepadData[key].text_font;
                textArea.value = notepadData[key].text;
                textArea.style.fontSize = notepadData[key].text_size;
                textArea.style.textAlign = notepadData[key].text_align;
                textArea.style.fontFamily = '"'+fontik+'", '+fontik+', serif';
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

function OldClickPage(oldPage) {
    oldClickPage = oldPage;

    const textArea = document.getElementById(""+oldClickPage+"");
    const textSize = document.getElementById('quantity');
    let fontSize = textArea.style.fontSize;
    let fontFamily = textArea.style.fontFamily;
    textSize.value = fontSize.slice(0, 2);

    if (fontFamily.indexOf("crock") > -1) {
        $('.fontfamily_text').html("Crock")
    } else if (fontFamily.indexOf("erika_ormig") > -1) {
        $('.fontfamily_text').html("Erika Ormig")
    } else if (fontFamily.indexOf("dancing") > -1) {
        $('.fontfamily_text').html("Dancing")
    } else if (fontFamily.indexOf("stampwriter") > -1) {
        $('.fontfamily_text').html("Stamp Writer")
    }
}

function ChangeTestSize(params) {
    if (oldClickPage != 0) {
        const textSize = document.getElementById('quantity');
        const textArea = document.getElementById(""+oldClickPage+"");
        textArea.style.fontSize = textSize.value+"px";
    }
}

function ClickAlignLeft() {
    if (oldClickPage != 0) {
        const textArea = document.getElementById(""+oldClickPage+"");
        textArea.style.textAlign = "left";
    }
}
function ClickAlignCenter() {
    if (oldClickPage != 0) {
        const textArea = document.getElementById(""+oldClickPage+"");
        textArea.style.textAlign = "center";
    }
}
function ClickAlignRight() {
    if (oldClickPage != 0) {
        const textArea = document.getElementById(""+oldClickPage+"");
        textArea.style.textAlign = "right";
    }
}
function ClickFontStyle() {
    if (oldClickPage != 0) {
        fontStyle = fontStyle + 1;
        if (fontStyle == 5) {
            fontStyle = 1
        }
        if (fontStyle == 1) {
            fontName = "Crock";
            fontType = "crock";
        } else if (fontStyle == 2) {
            fontName = "Erika Ormig";
            fontType = "erika_ormig";
        } else if (fontStyle == 3) {    
            fontName = "Dancing";
            fontType = "dancing";
        } else if (fontStyle == 4) {
            fontName = "Stamp Writer";
            fontType = "stampwriter";
        }

        const textArea = document.getElementById(""+oldClickPage+"");
        textArea.style.fontFamily = "'"+fontType+"', "+fontType+", serif"
        $('.fontfamily_text').html(fontName)
    }
}


function ClickSaveButton() {

}

function addPage(page, book) {
    // console.log('ENABLE PAGE '+page+': ', book.turn('hasPage', page))
    if (!book.turn('hasPage', page) || notepadOpen) {
        var element = $('<div />', {'class': 'page '+((page%2==0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');
        book.turn('addPage', element, page);
        var getOdd = false;
        setTimeout(function(){
            if (notepadData != undefined) {
                if (page != 1 && page % 2 != 0) {
                    getOdd = true;
                }

                if (notepadData[page]) {
                    element.html('<div class="contrainer_box" id="bookbox_'+page+'"><textarea class="note_textarea" placeholder="" name="comment" id="'+page+'" cols="30" rows="10" onclick="OldClickPage('+page+')">...</textarea></div><div class="header" id="bookheader_'+page+'"><div class="header_text">'+page+'</div></div>');
                    const textArea = document.getElementById("" + page);
                    if (textArea) {
                        textArea.value = notepadData[page].text;
                        textArea.style.fontSize = notepadData[page].text_size;
                        textArea.style.textAlign = notepadData[page].text_align;
                        textArea.style.fontFamily = '"'+notepadData[page].text_font+'", '+notepadData[page].text_font+', serif';
                    }
                } else {
                    element.html('<div class="contrainer_box" id="bookbox_'+page+'"><textarea class="note_textarea" placeholder="" name="comment" id="'+page+'" cols="30" rows="10" onclick="OldClickPage('+page+')">...</textarea></div><div class="header" id="bookheader_'+page+'"><div class="header_text">'+page+'</div></div>');
                }
            }

            if (getOdd) {
                const boxArea = document.getElementById("bookbox_" + page);
                const headerArea = document.getElementById("bookheader_" + page);
                if (boxArea) {
                    boxArea.style.transform = 'rotate(180deg)';
                    headerArea.style.transform = 'rotate(180deg)';
                }
            }
        }, 1000);
    }

    const pageElements = document.querySelectorAll('.turn-page');
    pageElements.forEach((pagess, index) => {
        if (index === 1) {
            console.log(index)
            pagess.style.transform = 'rotate(0deg)';
        } else {
            if (index % 2 === 0) { // Odd pages have an index of 1, 3, 5, etc.
                pagess.style.transform = 'rotate(180deg)';
            }
        }
    });
}

$(document).bind('keydown', function(e){
    // if (e.target && e.target.tagName.toLowerCase()!='input')
    if (e.keyCode==37) {
        $('#book').turn('previous');
    } else if (e.keyCode==39) {
        $('#book').turn('next');
    } else if (e.keyCode==27) { //27-8
        $(".container_main").css("display", "none");
        $(".container_settings").css("display", "none");
        for (let index = 0; index < 50; index++) {
            const textArea = document.getElementById(""+index+"");
            if (textArea != null ) {
                let fontTyp = ""
                if (textArea.style.fontFamily.indexOf("crock") > -1) {
                    fontTyp = "crock"
                } else if (textArea.style.fontFamily.indexOf("erika_ormig") > -1) {
                    fontTyp = "erika_ormig"
                } else if (textArea.style.fontFamily.indexOf("dancing") > -1) {
                    fontTyp = "dancing"
                } else if (textArea.style.fontFamily.indexOf("stampwriter") > -1) {
                    fontTyp = "stampwriter"
                }
                if (textArea.value != "...") {
                    notepadSend[index] = {id_page: index, font_family: fontTyp, text_align: textArea.style.textAlign, font_size: textArea.style.fontSize, text: textArea.value };
                }
            }
        }

        $(".container_main").html("")
        $.post("https://realplay_notepad/ClosedSaveNotepad", JSON.stringify({data: notepadSend}));
    }
});