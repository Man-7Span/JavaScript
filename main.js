const plainText = document.querySelector("#plainText");
const boldText = document.querySelector("#boldText");
const semiText1 = document.querySelector("#semiBoldText");
const italicText = document.querySelector("#italicText");
const Medieval = document.querySelector("#Medieval");
const ItalicBold = document.querySelector("#ItalicBold");
const btn = document.querySelector(".btn");
const toster = document.querySelector(".toster");
const copyBtn = document.querySelectorAll(".copy-btn");

console.log(toster);

btn.addEventListener("click", () => {



    //for Bold Text
    // boldText.innerHTML = `<strong>${plainText.innerHTML}</strong>`
    boldText.insertAdjacentHTML("afterend", `<strong>${plainText.innerHTML}</strong>`);
    //for underline
    semiText1.innerHTML = `<u>${plainText.innerHTML}</u>`;


    //for italic Text
    italicText.innerHTML = `<i>${plainText.innerHTML}</i>`


    //for Medival Text
    Medieval.innerHTML = plainText.innerHTML;
    Medieval.style.fontFamily = "Old English Text MT, fantasy";
    Medieval.style.fontWeight = "bold";


    //for Italic Text
    ItalicBold.value = plainText.value;
    ItalicBold.innerHTML = `<b><i>${plainText.innerHTML}</i></b>`;

});


copyBtn.forEach((e, i) => {
    e.addEventListener("click", function () {
        e.innerHTML = "Copied";
    });
});

