const time = document.querySelector(".dada__time");

const updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  let minutes = now.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  time.innerHTML = hours + ":" + minutes;
};

updateClock();
setInterval(updateClock, 1000);
