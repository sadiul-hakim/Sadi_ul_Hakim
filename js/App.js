const nav_link = document.getElementsByClassName("nav-link");
const experience = document.getElementById("experienceYear");

let arr = [...nav_link];

for (let i = 0; i < arr.length; i++) {

    arr[i].addEventListener("click", (e) => {

        for (let l of arr) {
            l.classList.remove("active")
        }

        if (!arr[i].classList.contains("active")) {
            arr[i].classList.add("active");
        }
    })

}

setExperience();

function setExperience() {
    let startDate = new Date("2023-03-08");
    let today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    // Adjust if the current month is before the start month
    if (months < 0) {
        years--;
        months += 12;
    }

    // Optional: adjust if today's day is before start day
    if (today.getDate() < startDate.getDate()) {
        months--;
        if (months < 0) {
            years--;
            months += 12;
        }
    }

    experience.innerText = `Experience: ${years} ${years === 1 ? "Year" : "Years"} ${months} ${months === 1 ? "Month" : "Months"}`;
}
