const faqQuestions1 = document.querySelectorAll(".faq5-1");

faqQuestions1.forEach((question1) => {
    question1.addEventListener('click', () => {
        const answer1 = question1.nextElementSibling;
        const chevron1 = question1.querySelector('i');
        question1.classList.toggle('active');
        if (answer1.style.display === 'block') {
            answer1.style.display = 'none';
            chevron1.classList.remove('fa-chevron-up');
            chevron1.classList.add('fa-chevron-down');
        } else {
            answer1.style.display = 'block';
            chevron1.classList.remove('fa-chevron-down');
            chevron1.classList.add('fa-chevron-up');
        }
    })
})
const faqQuestions2 = document.querySelectorAll(".faq6-1");
faqQuestions2.forEach((question2) => {
    question2.addEventListener('click', () => {
        const answer2 = question2.nextElementSibling;
        const chevron2 = question2.querySelector('i');
        question2.classList.toggle('active');
        if (answer2.style.display === 'block') {
            answer2.style.display = 'none';
            chevron2.classList.remove('fa-chevron-up');
            chevron2.classList.add('fa-chevron-down');
        } else {
            answer2.style.display = 'block';
            chevron2.classList.remove('fa-chevron-down');
            chevron2.classList.add('fa-chevron-up');
        }
    })
})

const faqQuestions3 = document.querySelectorAll(".faq7-1");
faqQuestions3.forEach((question3) => {
    question3.addEventListener('click', () => {
        const answer3 = question3.nextElementSibling;
        const chevron3 = question3.querySelector('i');
        question3.classList.toggle('active');
        if (answer3.style.display === 'block') {
            answer3.style.display = 'none';
            chevron3.classList.remove('fa-chevron-up');
            chevron3.classList.add('fa-chevron-down');
        } else {
            answer3.style.display = 'block';
            chevron3.classList.remove('fa-chevron-down');
            chevron3.classList.add('fa-chevron-up');
        }
    })
})

const faqQuestions4 = document.querySelectorAll(".faq8-1");
faqQuestions4.forEach((question4) => {
    question4.addEventListener('click', () => {
        const answer4 = question4.nextElementSibling;
        const chevron4 = question4.querySelector('i');
        question4.classList.toggle('active');
        if (answer4.style.display === 'block') {
            answer4.style.display = 'none';
            chevron4.classList.remove('fa-chevron-up');
            chevron4.classList.add('fa-chevron-down');
        } else {
            answer4.style.display = 'block';
            chevron4.classList.remove('fa-chevron-down');
            chevron4.classList.add('fa-chevron-up');
        }
    })
})

const faqQuestions5 = document.querySelectorAll(".faq9-1");
faqQuestions5.forEach((question5) => {
    question5.addEventListener('click', () => {
        const answer5 = question5.nextElementSibling;
        const chevron5 = question5.querySelector('i');
        question5.classList.toggle('active');
        if (answer5.style.display === 'block') {
            answer5.style.display = 'none';
            chevron5.classList.remove('fa-chevron-up');
            chevron5.classList.add('fa-chevron-down');
        } else {
            answer5.style.display = 'block';
            chevron5.classList.remove('fa-chevron-down');
            chevron5.classList.add('fa-chevron-up');
        }
    })
})

let boxx1 = document.getElementById("boxx1");
let boxx2 = document.getElementById("boxx2");
let boxx3 = document.getElementById("boxx3");
let boxx4 = document.getElementById("boxx4");
let boxx5 = document.getElementById("boxx5");

let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let boxWidth = 900;
let currentBox = 1;

leftArrow.addEventListener('click', () => {
    if (currentBox > 1) {
        currentBox--;
        updateBoxes();
    }
});

rightArrow.addEventListener('click',
    () => {
        if (currentBox < 5) {
            currentBox++;
            updateBoxes();
        }
    });

function updateBoxes() {
    let boxWidth = 330;
    let screenWidth = window.innerWidth;
    let leftPosition = (screenWidth / 2) - (boxWidth / 2);

    switch (currentBox) {
        case 1:
            boxx1.style.left = leftPosition + 'px';
            boxx2.style.left = leftPosition - screenWidth + 'px';
            boxx3.style.left = leftPosition - 2 * screenWidth + 'px';
            boxx4.style.left = leftPosition - 3 * screenWidth + 'px';
            boxx5.style.left = leftPosition - 4 * screenWidth + 'px';
            break;
        case 2:
            boxx1.style.left = leftPosition - screenWidth + 'px';
            boxx2.style.left = leftPosition + 'px';
            boxx3.style.left = leftPosition + screenWidth + 'px';
            boxx4.style.left = leftPosition + 2 * screenWidth + 'px';
            boxx5.style.left = leftPosition + 3 * screenWidth + 'px';





            break;
        case 3:
            boxx1.style.left = leftPosition - 2 * screenWidth + 'px';
            boxx2.style.left = leftPosition - screenWidth + 'px';
            boxx3.style.left = leftPosition + 'px';
            boxx4.style.left = leftPosition + screenWidth + 'px';
            boxx5.style.left = leftPosition + 2 * screenWidth + 'px';
            break;
        case 4:
            boxx1.style.left = leftPosition - 3 * screenWidth + 'px';
            boxx2.style.left = leftPosition - 2 * screenWidth + 'px';
            boxx3.style.left = leftPosition - screenWidth + 'px';
            boxx4.style.left = leftPosition + 'px';
            boxx5.style.left = leftPosition + screenWidth + 'px';
            break;
        case 5:
            boxx1.style.left = leftPosition - 4 * screenWidth + 'px';
            boxx2.style.left = leftPosition - 3 * screenWidth + 'px';
            boxx3.style.left = leftPosition - 2 * screenWidth + 'px';
            boxx4.style.left = leftPosition - screenWidth + 'px';
            boxx5.style.left = leftPosition + 'px';
            break;
    }
}
updateBoxes();

const annualBtn = document.getElementById('annualBtn');
const monthlyBtn = document.getElementById('monthlyBtn');
const annualDiv = document.querySelectorAll('.annualDiv');
const monthlyDiv = document.querySelectorAll('.monthlyDiv');

annualBtn.addEventListener('click', () => {
    annualDiv.forEach(div => div.style.display = 'block');
    monthlyDiv.forEach(div => div.style.display = 'none');

    annualBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
});

monthlyBtn.addEventListener('click', () => {
    monthlyDiv.forEach(div => div.style.display = 'block');
    annualDiv.forEach(div => div.style.display = 'none');

    monthlyBtn.classList.add('active');
    annualBtn.classList.remove('active');
});
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"
}
window.addEventListener('scroll', () => {
    const elementTen1 = document.querySelector(".nav2 button");
    const rect = elementTen1.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen1.classList.add("animateTen1");
    }
});
window.addEventListener('scroll', () => {
    const elementTen2 = document.querySelector(".nav1 p");
    const rect = elementTen2.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen2.classList.add("animateTen2");
    }
});
window.addEventListener('scroll', () => {
    const elementTen3 = document.querySelector(".nav3 button");
    const rect = elementTen3.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen3.classList.add("animateTen3");
    }
});
window.addEventListener('scroll', () => {
    const elementTen4 = document.querySelector(".icon");
    const rect = elementTen4.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen4.classList.add("animateTen4");
    }
});
window.addEventListener('scroll', () => {
    const elementTen5 = document.querySelector(".star");
    const rect = elementTen5.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen5.classList.add("animateTen5");
    }
});
window.addEventListener('scroll', () => {
    const elementTen6 = document.querySelector(".body1-2");
    const rect = elementTen6.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen6.classList.add("animateTen6");
    }
});
window.addEventListener('scroll', () => {
    const elementTen7 = document.querySelector(".navBar");
    const rect = elementTen7.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen7.classList.add("animateTen7");
    }
});
window.addEventListener('scroll', () => {
    const elementTen8 = document.querySelector("h1");
    const rect = elementTen8.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen8.classList.add("animateTen8");
    }
});
window.addEventListener('scroll', () => {
    const elementTen9 = document.querySelector(".body1-3");
    const rect = elementTen9.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen9.classList.add("animateTen9");
    }
});
window.addEventListener('scroll', () => {
    const elementTen10 = document.querySelector(".btn1");
    const rect = elementTen10.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen10.classList.add("animateTen10");
    }
});
window.addEventListener('scroll', () => {
    const elementTen11 = document.querySelector(".btn2");
    const rect = elementTen11.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen11.classList.add("animateTen11");
    }
});
window.addEventListener('scroll', () => {
    const elementTen12 = document.querySelector(".blue img");
    const rect = elementTen12.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen12.classList.add("animateTen12");
    }
});
window.addEventListener('scroll', () => {
    const elementTen13 = document.querySelector(".bodyp1");
    const rect = elementTen13.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen13.classList.add("animateTen13");
    }
});
window.addEventListener('scroll', () => {
    const elementTen14 = document.querySelector(".bodyp2");
    const rect = elementTen14.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen14.classList.add("animateTen14");
    }
});
window.addEventListener('scroll', () => {
    const elementTen15 = document.querySelector(".bodyp3 button");
    const rect = elementTen15.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen15.classList.add("animateTen15");
    }
});
window.addEventListener('scroll', () => {
    const elementTen16 = document.querySelector(".bodyp4");
    const rect = elementTen16.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen16.classList.add("animateTen16");
    }
});
window.addEventListener('scroll', () => {
    const elementTen17 = document.querySelector(".bodyp5");
    const rect = elementTen17.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen17.classList.add("animateTen17");
    }
});
window.addEventListener('scroll', () => {
    const elementTen18 = document.querySelector(".box2p2");
    const rect = elementTen18.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen18.classList.add("animateTen18");
    }
});
window.addEventListener('scroll', () => {
    const elementTen19 = document.querySelector(".box3p1");
    const rect = elementTen19.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen19.classList.add("animateTen19");
    }
});
window.addEventListener('scroll', () => {
    const elementTen20 = document.querySelector(".box2img img");
    const rect = elementTen20.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen20.classList.add("animateTen20");
    }
});
window.addEventListener('scroll', () => {
    const elementTen21 = document.querySelector(".box3p2");
    const rect = elementTen21.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen21.classList.add("animateTen21");
    }
});
window.addEventListener('scroll', () => {
    const elementTen22 = document.querySelector(".box4p1");
    const rect = elementTen22.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen22.classList.add("animateTen22");
    }
});
window.addEventListener('scroll', () => {
    const elementTen23 = document.querySelector(".box4p2");
    const rect = elementTen23.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen23.classList.add("animateTen23");
    }
});
window.addEventListener('scroll', () => {
    const elementTen24 = document.querySelector(".box4p3");
    const rect = elementTen24.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen24.classList.add("animateTen24");
    }
});
window.addEventListener('scroll', () => {
    const elementTen25 = document.querySelector(".box3img img");
    const rect = elementTen25.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen25.classList.add("animateTen25");
    }
});
window.addEventListener('scroll', () => {
    const elementTen26 = document.querySelector(".boxx3p p");
    const rect = elementTen26.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen26.classList.add("animateTen26");
    }
});
window.addEventListener('scroll', () => {
    const elementTen27 = document.querySelector(".boxx3p2");
    const rect = elementTen27.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen27.classList.add("animateTen27");
    }
});
window.addEventListener('scroll', () => {
    const elementTen28 = document.querySelector(".boxx3p3");
    const rect = elementTen28.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen28.classList.add("animateTen28");
    }
});
window.addEventListener('scroll', () => {
    const elementTen29 = document.querySelector(".box5");
    const rect = elementTen29.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen29.classList.add("animateTen29");
    }
});
window.addEventListener('scroll', () => {
    const elementTen30 = document.querySelector(".faq1 p");
    const rect = elementTen30.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen30.classList.add("animateTen30");
    }
});
window.addEventListener('scroll', () => {
    const elementTen31 = document.querySelector(".faq2");
    const rect = elementTen31.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen31.classList.add("animateTen31");
    }
});
window.addEventListener('scroll', () => {
    const elementTen32 = document.querySelector(".faq3");
    const rect = elementTen32.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen32.classList.add("animateTen32");
    }
});
window.addEventListener('scroll', () => {
    const elementTen33 = document.querySelector(".faq9-1");
    const rect = elementTen33.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen33.classList.add("animateTen33");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34 = document.querySelector(".rate4");
    const rect = elementTen34.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34.classList.add("animateTen34");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34a = document.querySelector(".premium-btn");
    const rect = elementTen34a.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34a.classList.add("animateTen34a");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34b = document.querySelector(".premiumBox1");
    const rect = elementTen34b.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34b.classList.add("animateTen34b");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34c = document.querySelector(".premiumBox2");
    const rect = elementTen34c.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34c.classList.add("animateTen34c");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34d = document.querySelector(".premiumBox3");
    const rect = elementTen34d.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34d.classList.add("animateTen34d");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34e = document.querySelector("#boxx6");
    const rect = elementTen34e.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34e.classList.add("animateTen34e");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34 = document.querySelector("#boxx1");
    const rect = elementTen34.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34.classList.add("animateTen34");
    }
});
window.addEventListener('scroll', () => {
    const elementTen35 = document.querySelector(".footer4");
    const rect = elementTen35.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen35.classList.add("animateTen35");
    }
});
window.addEventListener('scroll', () => {
    const elementTen36 = document.querySelector(".footer3");
    const rect = elementTen36.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen36.classList.add("animateTen36");
    }
});
window.addEventListener('scroll', () => {
    const elementTen37 = document.querySelector(".footer6");
    const rect = elementTen37.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen37.classList.add("animateTen37");
    }
});
window.addEventListener('scroll', () => {
    const elementTen38 = document.querySelector(".footer7");
    const rect = elementTen38.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen38.classList.add("animateTen38");
    }
});
window.addEventListener('scroll', () => {
    const elementTen39 = document.querySelector(".chat1");
    const rect = elementTen39.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen39.classList.add("animateTen39");
    }
});
window.addEventListener('scroll', () => {
    const elementTen40 = document.querySelector(".chat2");
    const rect = elementTen40.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen40.classList.add("animateTen40");
    }
});
window.addEventListener('scroll', () => {
    const elementTen41 = document.querySelector(".chatBox1");
    const rect = elementTen41.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen41.classList.add("animateTen41");
    }
});
window.addEventListener('scroll', () => {
    const elementTen42 = document.querySelector(".every");
    const rect = elementTen42.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen42.classList.add("animateTen42");
    }
});
window.addEventListener('scroll', () => {
    const elementTen43 = document.querySelector(".faq7");
    const rect = elementTen43.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen43.classList.add("animateTen43");
    }
});
window.addEventListener('scroll', () => {
    const elementTen44 = document.querySelector(".faqBtn");
    const rect = elementTen44.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen44.classList.add("animateTen44");
    }
});
window.addEventListener('scroll', () => {
    const elementTen45 = document.querySelector(".connect1");
    const rect = elementTen45.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen45.classList.add("animateTen45");
    }
});
window.addEventListener('scroll', () => {
    const elementTen47 = document.querySelector(".sub1");
    const rect = elementTen47.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen47.classList.add("animateTen47");
    }
});
window.addEventListener('scroll', () => {
    const elementTen48 = document.querySelector(".sub2");
    const rect = elementTen48.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen48.classList.add("animateTen48");
    }
});
window.addEventListener('scroll', () => {
    const elementTen49 = document.querySelector(".sub6");
    const rect = elementTen49.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen49.classList.add("animateTen49");
    }
});
window.addEventListener('scroll', () => {
    const elementTen50 = document.querySelector(".footer1");
    const rect = elementTen50.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen50.classList.add("animateTen50");
    }
});
window.addEventListener('scroll', () => {
    const elementTen51 = document.querySelector(".footer2");
    const rect = elementTen51.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen51.classList.add("animateTen51");
    }
});
window.addEventListener('scroll', () => {
    const elementTen52 = document.querySelector(".text1");
    const rect = elementTen52.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen52.classList.add("animateTen52");
    }
});

window.addEventListener('scroll', () => {
    const elementTen53 = document.querySelector(".text2");
    const rect = elementTen53.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen53.classList.add("animateTen53");
    }
});

window.addEventListener('scroll', () => {
    const elementTen54 = document.querySelector(".text3");
    const rect = elementTen54.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen54.classList.add("animateTen54");
    }
});

window.addEventListener('scroll', () => {
    const elementTen55 = document.querySelector(".ratte");
    const rect = elementTen55.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen55.classList.add("animateTen55");
    }
});
window.addEventListener('scroll', () => {
    const elementTen56 = document.querySelector(".rate3");
    const rect = elementTen56.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen56.classList.add("animateTen56");
    }
});
window.addEventListener('scroll', () => {
    const elementTen57 = document.querySelector(".faq4 button");
    const rect = elementTen57.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen57.classList.add("animateTen57");
    }
});
window.addEventListener('scroll', () => {
    const elementTen58 = document.querySelector(".faq5-1");
    const rect = elementTen58.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen58.classList.add("animateTen58");
    }
});
window.addEventListener('scroll', () => {
    const elementTen59 = document.querySelector(".faq6-1");
    const rect = elementTen59.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen59.classList.add("animateTen59");
    }
});
window.addEventListener('scroll', () => {
    const elementTen60 = document.querySelector(".faq7-1");
    const rect = elementTen60.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen60.classList.add("animateTen60");
    }
});
window.addEventListener('scroll', () => {
    const elementTen61 = document.querySelector(".faq8-1");
    const rect = elementTen61.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen61.classList.add("animateTen61");
    }
});
window.addEventListener('scroll', () => {
    const elementTen62 = document.querySelector(".bodyp12");
    const rect = elementTen62.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen62.classList.add("animateTen62");
    }
});
window.addEventListener('scroll', () => {
    const elementTen63 = document.querySelector(".box2p1");
    const rect = elementTen63.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen63.classList.add("animateTen63");
    }
});

window.addEventListener('scroll', () => {
    const elementTen64 = document.querySelector(".connect2");
    const rect = elementTen64.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen64.classList.add("animateTen64");
    }
});

window.addEventListener('scroll', () => {
    const elementTen65 = document.querySelector(".connect3");
    const rect = elementTen65.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen65.classList.add("animateTen65");
    }
});

window.addEventListener('scroll', () => {
    const elementTen66 = document.querySelector(".connect7");
    const rect = elementTen66.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen66.classList.add("animateTen66");
    }
});

window.addEventListener('scroll', () => {
    const elementTen67 = document.querySelector(".connect5");
    const rect = elementTen67.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen67.classList.add("animateTen67");
    }
});

window.addEventListener('scroll', () => {
    const elementTen68 = document.querySelector(".line");
    const rect = elementTen68.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen68.classList.add("animateTen68");
    }
});

window.addEventListener('scroll', () => {
    const elementTen69 = document.querySelector(".footer2");
    const rect = elementTen69.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen69.classList.add("animateTen69");
    }
});

window.addEventListener('scroll', () => {
    const elementTen70 = document.querySelector(".connect8");
    const rect = elementTen70.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen70.classList.add("animateTen70");
    }
});
window.addEventListener('scroll', () => {
    const elementTen71 = document.querySelector(".connect9");
    const rect = elementTen71.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen71.classList.add("animateTen71");
    }
});
window.addEventListener('scroll', () => {
    const elementTen72 = document.querySelector(".connect10 p");
    const rect = elementTen72.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen72.classList.add("animateTen72");
    }
});
window.addEventListener('scroll', () => {
    const elementTen73 = document.querySelector(".line2 hr");
    const rect = elementTen73.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen73.classList.add("animateTen73");
    }
});
window.addEventListener('scroLl', () => {
    const elementTen74 = document.querySelector(".footer5");
    const rect = elementTen74.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen74.classList.add("animateTen74");
    }
});


