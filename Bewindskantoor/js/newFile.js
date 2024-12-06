$(document).bind('keydown', function (e) {
    // if (e.target && e.target.tagName.toLowerCase()!='input')
    if (e.keyCode == 37) {
        $('#book').turn('previous');
    } else if (e.keyCode == 39) {
        $('#book').turn('next');
    } else if (e.keyCode == 27) { //27-8
        $(".container_main").css("display", "none");
        $(".container_settings").css("display", "none");
        for (let index = 0; index < 50; index++) {
            const textArea = document.getElementById("" + index + "");
            if (textArea != null) {
                let fontTyp = "";
                if (textArea.style.fontFamily.indexOf("crock") > -1) {
                    fontTyp = "crock";
                } else if (textArea.style.fontFamily.indexOf("erika_ormig") > -1) {
                    fontTyp = "erika_ormig";
                } else if (textArea.style.fontFamily.indexOf("dancing") > -1) {
                    fontTyp = "dancing";
                } else if (textArea.style.fontFamily.indexOf("stampwriter") > -1) {
                    fontTyp = "stampwriter";
                }
                if (textArea.innerHTML != "...") {
                    notepadSend[index] = { id_page: index, font_family: fontTyp, text_align: textArea.style.textAlign, font_size: textArea.style.fontSize, text: textArea.textContent };
                }
            }
        }



        // $(".container_main").html("")
        $.post("https://realplay_notepad/ClosedSaveNotepad", JSON.stringify({ data: notepadSend }));
    }
});
