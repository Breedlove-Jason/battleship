let view = {
  displayMessage: function (msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

const model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
    { location: [10, 20, 30], hits: ["", "", ""] },
    { location: [32, 33, 34], hits: ["", "", ""] },
    { location: [63, 64, 65], hits: ["", "", ""] },
  ],
};
