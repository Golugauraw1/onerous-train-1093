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

RenderDataOnSlider(cardsMainContinerOne, crousalData[0]);
RenderDataOnSlider(cardsMainContinerTwo, crousalData[1]);
RenderDataOnSlider(cardsMainContinerThree, crousalData[2]);
RenderDataOnSlider(cardsMainContinerFour, crousalData[3]);

function RenderDataOnSlider(box, data) {
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

setInterval(() => {
    move()
}, 3000)

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
    }, 1)
})

//-------------------------------------Routine Table--------------------------------------------
window.addEventListener("load", () => {
    RenderAll()
});

//======================================Data Catching Function=======================================
async function RenderAll() {
    let resultArray = await fatchAllDataFromApi();
    let [data, count] = resultArray;
    console.log(data);
    RenderTable(data);
    paginationFactory(count)
}
let tableBody = document.querySelector("#Mega_Table_body");
let buttonBox = document.querySelector("#button_box");
let totalCountSpna = document.querySelector("#totalCount");

//======================================Window load Function=======================================
async function fatchAllDataFromApi() {
    let response = await fetch(`https://ill-plum-gorilla-kit.cyclic.app/workoutPlan?_limit=10&_page=`);
    let result = await response.json();
    return await Promise.all([result, response.headers.get("X-Total-Count")])
}

//======================================Pagination Facth Function=======================================

async function limitedData(url,page) {
    let response = await fetch(`${url}_limit=10&_page=${page}`);
    let result = await response.json();
    return RenderTable(result);
}

//======================================Button Creator Function=======================================


function getAsButton(cls, dataId, item) {
    return `<button class="${cls}" ${dataId ? ` data-id = ${dataId}` : ''}  >${item}</button>`
}



//======================================Pagination Intilizer Function=======================================

function paginationFactory(dataCount) {
    let totalbuttons = Math.ceil(dataCount / 15);
    let arr = [];
    for (let i = 1; i <= totalbuttons; i++) {
        arr.push(getAsButton("buttons", i, i))
    }
    buttonBox.innerHTML = `
    ${arr.map((item) => {
        return item;
    }).join(" ")
        }
    `
    let pagiNationbuttons = document.querySelectorAll(".buttons");
    for (let pagiNationbutton of pagiNationbuttons) {
        pagiNationbutton.addEventListener("click", (e) => {
            let id = e.target.dataset.id;
            limitedData("https://ill-plum-gorilla-kit.cyclic.app/workoutPlan?",id);
        })
    }
};


//======================================Data Sorting Function=======================================
async function FilteredData(gender) {
    let rawData = await fetch(`https://ill-plum-gorilla-kit.cyclic.app/workoutPlan?_&type=${gender}&_limit=10&_page=${1}`);
    let data = await rawData.json();
    return Promise.all([data,rawData.headers.get("X-Total-Count")])
}


    document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    let gendersInput = document.querySelectorAll(".gender");
    let searchvalue = document.querySelector("#search_box");
    let value = null;
    gendersInput.forEach(item => {
        if (item.checked) {
            value = item.value;
        }
    });
    
    ;(async() => {
        let response = await FilteredData(value);
    
        console.log(response)
        RenderTable(response[0])
        paginationFactory1(response[1]);
    })();
     
    function paginationFactory1(dataCount) {
        buttonBox.innerHTML = null;
        let totalbuttons = Math.ceil(dataCount / 15);
        let arr = [];
        for (let i = 1; i <= totalbuttons; i++) {
            arr.push(getAsButton("buttons", i, i))
        }
        buttonBox.innerHTML = `
        ${arr.map((item) => {
            return item;
        }).join(" ")
            }
        `
        let pagiNationbuttons = document.querySelectorAll(".buttons");
        for (let pagiNationbutton of pagiNationbuttons) {
            pagiNationbutton.addEventListener("click", (e) => {
                let id = e.target.dataset.id;
                limitedData(`https://ill-plum-gorilla-kit.cyclic.app/workoutPlan?_&type=${value}&`,id);
            })
        }
    };

});

//============================================Sorting By Categorty========================================

let routinebuttons = document.querySelectorAll(".routineButton");

// for(let routinebutton of routinebuttons) {
//     routinebutton.addEventListener("click", () => {
//         let value = 
//     })
// }





//===============================================Table Rendering==========================================
function RenderTable(array) {
    tableBody.innerHTML = null;
    tableBody.innerHTML = array.map((item) => {

        return `
        <tr class="routine_table_body_row">
    <td align="left">
        <a id="routine-banner" href=''>
            <div style="position: relative; height: 50px; overflow: hidden; text-overflow: ellipsis">
                <img style="object-fit:cover"
                    src="${item.image}" width="75"
                    height="50" >
            </div>
        </a>
    </td>

    <td align="left">
        <span class="">
            <a id="routine-title" href='' style="text-decoration : none; color: rgb(58, 184, 230)">
                <div
                    style="position: relative; width: 230px; height: 37px; overflow: hidden; text-overflow: ellipsis; font-weight:bold; align: "center";>
                    ${item.title}</div>
            </a>
        </span>
    </td>

    <td align="center">${item.frequency}</td>
    <td align="center">${item.category}</td>
    <td align="center">${item.exp}</td>
    <td align="center">${item.views}</td>
    <td align="center"></td>
    <td align="center">Free</td>
    </tr>
        `
    }).join(" ");

}


