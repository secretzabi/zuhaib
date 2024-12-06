const sidebar = document.querySelector("aside")
const menuToggle = document.querySelector("header h2 img")
const overlay = document.querySelector(".overlay")

const headerProDet = document.querySelectorAll(".headerProDet")
const headerProDrop = document.querySelectorAll(".headerProDrop")


const headerNotiLang = document.querySelectorAll(".headerNotiLang img")
const headerNotiLangDrop = document.querySelectorAll(".headerNotiLangDrop")




menuToggle.addEventListener("click", () => {
    sidebar.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active")
    overlay.classList.remove("active")
})




headerProDet.forEach((item, i) => {
    item.addEventListener("click", () => {
        headerProDrop[i].classList.toggle("active")
        headerNotiLangDrop.forEach(inItem => {
            inItem.classList.remove("active")
        })
    })
})


headerNotiLang.forEach((item, i) => {
    item.addEventListener("click", () => {
        headerNotiLangDrop[i].classList.toggle("active")
        headerProDrop.forEach(inItem => {
            inItem.classList.remove("active")
        })
    })
})

tinymce.init({
    api_key:'2ajq41h0kapxqv98zqthmv3awu50pgjm99n2qlmr323s53yg',
  selector: 'textarea#default',
  plugins: [
    // Core editing features
    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
    'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
  ],
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name',
  mergetags_list: [
    { value: 'First.Name', title: 'First Name' },
    { value: 'Email', title: 'Email' },
  ],
  ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
});
///////Accordion
document.querySelectorAll('.seo-accordion').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.seo-accordion-answer');

        // Close all other answers
        document.querySelectorAll('.seo-accordion-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.style.maxHeight = null;
                otherAnswer.classList.remove('open');
                otherAnswer.parentElement.querySelector('.seo-accordion').classList.remove('active');
            }
        });

        // Toggle current answer
        if (answer.classList.contains('open')) {
            answer.style.maxHeight = null;
            answer.classList.remove('open');
            button.classList.remove('active');
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px"; // Adjust height to fit the content
            answer.classList.add('open');
            button.classList.add('active');
        }
    });
});