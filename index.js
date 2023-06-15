//set initial count

let count = 0;

//select the value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",function(e) {
        const styles = e.currentTarget.classList;
        console.log(styles);

        if(styles.contains(("increase"))) {
            count++;
        }
        else if(styles.contains(("decrease"))) {
            count--;
        }
        else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        }
        else if(count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "black";
        }
        value.textContent = count;
    });
};