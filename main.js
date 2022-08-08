function toggleDropdown() {
  let navbarToggle = document.getElementById("navbar-toggle");
  if (navbarToggle.className === "topnav") {
    navbarToggle.className += " responsive";
  } else {
    navbarToggle.className = "topnav";
  }
}

// document.getElementById("navbar-toggle").addEventListener(
//   "click",
//   (e) => {
//     if (e.target.id) {
//       window.location.href = e.target.id + ".html";
//     }
//     e.stopPropagation();
//   },
//   true
// );
function project1() {
  window.open("https://saloniasrani.github.io/memory-flashcards/", "_blank");
}
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "&#*+%?£@§$";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
const el = document.querySelector(".letter");
const fx = new TextScramble(el);
const next = () => {
  fx.setText("Saloni Asrani.").then(() => {
    setTimeout(next, 10000);
  });
};
next();
