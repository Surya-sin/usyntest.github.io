let count = 0;

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('increase')) {
            increase();
        }
        if (styles.contains('reset')) {
            reset();
        }
        if (styles.contains('decrease')) {
            decrease();
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})


function increase() {
    count++;
    value.style.color = "green";
}
function decrease() {
    if (count !== 0) {
        count--;
    }
    value.style.color = "red";
}
function reset() {
    count = 0;
}