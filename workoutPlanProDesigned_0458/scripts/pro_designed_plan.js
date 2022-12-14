// -----------------------------------------------Crousal--------------------------------------------------
let crousalData = [
    [
        {
            'image': "https://cdn.jefit.com/uc/file/e0e9c842c7fbaa69/1.jpg",
            "title": "Increase Vertical Jump"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/909a691beea2300f/1.jpg",
            "title": "30 Minute Dubbell Circuit"
        },
        {
            'image': "https://cdn.jefit.com/uc/file/a137a9c419c6625b/1.jpg",
            "title": "7 Weeks To Bicepes Growth"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/32cb632ce4899151/1.jpg",
            "title": "Beginer Bulking Plan(PPL)"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/d05c822443e859c6/1.jpg",
            "title": "5x6 Leg Program"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/0b7e54c2041766ba/1.jpg",
            "title": "3-Day DB/Kettlebell Plan"
        }

    ],
    [
        {
            "image": "https://cdn.jefit.com/uc/file/87776aa7ba1d06db/1.jpg",
            "title": "Leg Workout: Glute Focused"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/ee7f448b64967fa6/1.jpg",
            "title": "Elite - Be Your Own Hero"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/d802347b89c9b658/1.jpg",
            "title": "3 Day Split Muscle Building Plan"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/a9bbc582182c9ba8/1.jpg",
            "title": "Strength & Power"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/d15d87fd6f171a40/1.jpg",
            "title": "Barble Only Program"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/c61bf8c716a8cde0/1.jpg",
            "title": "2 Day Push Pull"
        },
    ],
    [
        {
            "image": "https://cdn.jefit.com/uc/file/d7f769f78791dda7/1.jpg",
            "title": "3 Month Traning For Swiming"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/aa9337c434bdc9bd/1.jpg",
            "title": "Strength Traning Plan For Women"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/2cc35ec18e87de63/1.jpg",
            "title": "3 Day Strength Training"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/c06f7a6f0b468797/1.jpg",
            "title": "FitBody Plan"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/2d9a1fc648d514f2/1.jpg",
            "title": "Smith Machine Circuit Traning"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/2bd29320b5764f92/1.jpg",
            "title": "Intermideate Routine"
        },
    ],
    [
        {
            "image": "https://cdn.jefit.com/uc/file/c2f58ad6f17797a3/1.jpg",
            "title": "6-Weeks To Six-Pack Abs"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/b05d013ae6897371/1.jpg",
            "title": "Cycling Strength Training: 12-Weeks"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/2941b8be6592b6fd/1.jpg",
            "title": "Building Bodyweight Strength"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/148f7f4c1e36c3e7/1.jpg",
            "title": "Sculpting Your Abs - Beginer Level"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/c0a160f81331cffd/1.jpg",
            "title": "4 Weeks Beach Ready Summer Program"
        },
        {
            "image": "https://cdn.jefit.com/uc/file/75604fc334c11f1f/1.jpg",
            "title": "Back & Bicep Day"
        },
    ]

]

//-------------------------------------------Crousal Data Render------------------------------------------ 

let cardsMainContinerOne = document.querySelector(".cards_Wrapper_First");
let cardsMainContinerTwo = document.querySelector(".cards_Wrapper_Second");
let cardsMainContinerThree = document.querySelector(".cards_Wrapper_Third");
let cardsMainContinerFour = document.querySelector(".cards_Wrapper_Fourth");

RenderDataOnSlider(cardsMainContinerOne,crousalData[0]);
RenderDataOnSlider(cardsMainContinerTwo,crousalData[1]);
RenderDataOnSlider(cardsMainContinerThree,crousalData[2]);
RenderDataOnSlider(cardsMainContinerFour,crousalData[3]);

function RenderDataOnSlider(box,data) {
    box.innerHTML = data.map(itme => {
        return `
        
            <div class="card_Parent">
                <a href="">
                    <div class="card_image">
                        <img src="${itme.image}" alt="">
                    </div>
                    <div class="card_text">
                        <h3>${itme.title}</h3>
                    </div>
                </a>
            </div>
        
        `
    }).join(" ");
}

//---------------------------------------------Crousal Function----------------------------------------------

// setInterval(() => {
//     move()
// }, 3000)

let direction;
let arr = Array.from(document.getElementsByClassName("elements"));
let slider = document.querySelector(".slider")
let containter = document.querySelector(".cousel_wrapper");

function move2() {
    if (direction == -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }

    containter.style.justifyContent = "flex-end";
    slider.style.transform = "translate(25%)"
}
function move() {
    containter.style.justifyContent = "flex-start"
    direction = -1;
    slider.style.transform = "translate(-25%)"
}
slider.addEventListener("transitionend", () => {
    if (direction == -1) {
        slider.appendChild(slider.firstElementChild);
    }
    else {
        slider.prepend(slider.lastElementChild)
    }
    slider.style.transition = "none"
    slider.style.transform = "translate(0%)"
    setTimeout(() => {
        slider.style.transition = ".7s"
    },1)
})

//----------------------------------------------------------------------------------------------------------







