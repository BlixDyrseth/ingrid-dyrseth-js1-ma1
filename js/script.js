const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function() {
    console.log("Meow!")
    }
}

cat.complain();


// Question 2,3 & 4

const heading = document.querySelector("h3");

heading.innerHTML = `<h3 class="subheading" style="font-size: 2em">Updated Heading</h3>`;


// Question 5 

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'red';
} 


// Question 6 

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`; 


// Question 7

function nameOfCats(list) {

    for(let i = 0; i <list.length; i++) {
        console.log(list[i].name);
    }
}

nameOfCats(cats);


// Question 8

function createCats(cats) {

    let listOfCats = "";

    for(let i = 0; i < cats.length; i++) {

        let age = "Age unknown";

        if(cats[i].age) {
            age = cats[i].age;
        }

        listOfCats += `<div>
    <h5>${cats[i].name}</h5>
    <p>Age: ${age}</p>
    </div>`

    }

    return listOfCats;
}

const html = createCats(cats);

const container = document.querySelector(".cat-container");

container.innerHTML = html;











