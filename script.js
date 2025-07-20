const meetingDate = new Date("2025-07-25T18:00:00+07:00");
const countdown = document.getElementById("countdown");
const messageBox = document.getElementById("message");

const dailyMessages = [
  "Only 5 days left until I finally see you for the very first time 💖",
  "Four more days until our hearts meet in real life 💞",
  "Three days and I'm already floating thinking of you 💫",
  "Just two days left… Can you feel the magic coming closer? ✨",
  "Tomorrow… My heart is racing. I can barely wait 💓",
  "Today is the day! I'll finally see you, and I can’t stop smiling 😍"
];

function updateCountdown() {
  const now = new Date();
  const distance = meetingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  if (distance > 0) {
    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    messageBox.textContent = dailyMessages[Math.min(5 - days, dailyMessages.length - 1)];
  } else {
    countdown.textContent = "We're together now 💕";
    messageBox.textContent = "You’re here, and my world is complete ❤️";
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(updateCountdown, 1000);
setInterval(createHeart, 300);
updateCountdown();
