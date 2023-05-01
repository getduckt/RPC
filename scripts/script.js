const dropdownMenu = document.getElementById('dropdown-menu');
const goBtn = document.getElementById('goBtn');
const rpc = ['rock', 'paper', 'scissors'];

const win = document.getElementById('win');
const loss = document.getElementById('loss');
const confirmation = document.getElementById('confirmation');
const tie = document.getElementById('tie');

goBtn.onclick = function () {
  const rpcBot = rpc[Math.floor(Math.random() * 3)];
  let userChoice = dropdownMenu.value.toLowerCase();

  if (userChoice == rpcBot) {
    tie.style.opacity = '1';
    setTimeout(() => {
      tie.style.opacity = '0';
    }, 3000);
  } else if (userChoice == 'rock' && rpcBot == 'paper') {
    loss.style.opacity = '1';
    setTimeout(() => {
      loss.style.opacity = '0';
    }, 3000);
  } else if (userChoice == 'rock' && rpcBot == 'scissors') {
    win.style.opacity = '1';
    setTimeout(() => {
      win.style.opacity = '0';
    }, 3000);
  } else if (userChoice == 'paper' && rpcBot == 'rock') {
    win.style.opacity = '1';
    confirmation.style.opacity = '1';
    setTimeout(() => {
      win.style.opacity = '0';
      confirmation.style.opacity = '0'
    }, 3000);
  } else if (userChoice == 'paper' && rpcBot == 'scissors') {
    loss.style.opacity = '1';
    setTimeout(() => {
      loss.style.opacity = '0';
    }, 3000);
  } else if (userChoice == 'scissors' && rpcBot == 'paper') {
    win.style.opacity = '1';
    setTimeout(() => {
      win.style.opacity = '0';
    }, 3000);
  } else if (userChoice == 'scissors' && rpcBot == 'rock') {
    loss.style.opacity = '1';
    setTimeout(() => {
      loss.style.opacity = '0';
    }, 3000);
  }
};
