const clockCtn = document.querySelector('.clock-container');

setInterval(() =>
{
    const present = new Date();

    let hours = (present.getHours() < 10) ? `0${present.getHours()}` : `${present.getHours()}`;
    let minutes = (present.getMinutes() < 10) ? `0${present.getMinutes()}` : `${present.getMinutes()}`;
    let seconds = (present.getSeconds() < 10) ? `0${present.getSeconds()}` : `${present.getSeconds()}`;

    clockCtn.innerHTML = `
        <span class=digit>${hours}</span>
        <span class="separator">:</span>
        <span class=digit>${minutes}</span>
        <span class="separator">:</span>
        <span class=digit>${seconds}</span>
        `;
}, 1000)