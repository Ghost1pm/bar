const input = document.querySelector('input');
const cover = document.querySelector('.cover');
const per_value = document.querySelector('.percentage_value span');
const bar = document.querySelector('.cover .bar');
const fill = document.querySelector('.cover .fill');
const alert = document.querySelector('.alert');

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector(".form button").click();
    }
});


function runevent() {

    let value = input.value;

    if (value > -1 && value < 101) {
        per_value.innerHTML = value;

        var find_persent = 360 * ((value / 100) * 1);


        let count = 0;
        setInterval(() => {
            if (count.toFixed(2) == find_persent.toFixed(2)) {
                clearInterval();
            } else {
                count += 0.01;
                if (input.value <= 50 && find_persent.toFixed(2) <= 180.00) {
                    cover.classList.add("cover_50");
                    bar.style.transform = `rotate(${count.toFixed(2)}deg)`;
                    
                } else {
                    if (count.toFixed(2) >= 180.00 ) {
                        cover.classList.remove("cover_50");
                        fill.style.transform = `rotate(${count.toFixed(2)}deg)`;
                        
                    } else {
                    
                    bar.style.transform = `rotate(${count.toFixed(2)}deg)`;
                    }
                }
            }
                

        }, 1)
    
          
        
        alert.innerHTML = "";
    } else {
        alert.innerHTML = "value is wrong";
    }




    input.value = '';
}
