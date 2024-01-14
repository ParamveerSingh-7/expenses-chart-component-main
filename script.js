const jsonData = {
  data: [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ],
};
const barGraphContainer = document.querySelector(".graph");
barGraphContainer.style.display = "flex";

jsonData.data.forEach((dayData) => {
  const mainContainer = document.createElement("div");
  const spent = document.createElement("div");
  const bars = document.createElement("div");
  const day = document.createElement("p");
  mainContainer.style.display = "flex";
  mainContainer.style.flexDirection = "column";
  mainContainer.style.justifyContent = "space-around";
  mainContainer.style.alignItems = "center";
  mainContainer.style.gap = ".5rem";
  spent.className = "spent";
  spent.textContent = `$${dayData.amount}`;
  spent.style.color = "white";
  spent.style.backgroundColor = "hsl(25, 47%, 15%)";
  spent.style.paddingTop = ".4rem";
  spent.style.paddingBottom = ".4rem";
  spent.style.paddingLeft = ".3rem";
  spent.style.paddingRight = ".3rem";
  spent.style.borderRadius = ".2rem";
  spent.style.visibility = "hidden";
  barGraphContainer.appendChild(mainContainer);
  mainContainer.appendChild(spent);
  bars.className = "bars";
  bars.style.height = `${2.5 * dayData.amount}px`;
  bars.style.width = `2.5rem`;
  bars.style.borderRadius = ".2rem";
  mainContainer.appendChild(bars);
  day.className = "day";
  day.textContent = `${dayData.day}`;
  day.style.color = "hsl(28, 10%, 53%)";
  mainContainer.appendChild(day);
  bars.addEventListener("mouseover", function () {
    spent.style.visibility = "visible";
    bars.style.cursor = "pointer";
  });
  bars.addEventListener("mouseout", function () {
    spent.style.visibility = "hidden";
  });
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const now = new Date();
  let da = weekday[now.getDay()];
  if (da == dayData.day) {
    bars.style.backgroundColor = "hsl(186, 34%, 60%)";
  } else {
    bars.style.backgroundColor = "hsl(10, 79%, 65%)";
  }
});
