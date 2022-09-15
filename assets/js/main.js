

 
!(function () {
  "use strict";
  const e = (e, t = !1) => (
    (e = e.trim()),
    t ? [...document.querySelectorAll(e)] : document.querySelector(e)
  ),
    t = (t, s, i, o = !1) => {
      let a = e(s, o);
      a &&
        (o
          ? a.forEach((e) => e.addEventListener(t, i))
          : a.addEventListener(t, i));
    },
    s = (e, t) => {
      e.addEventListener("scroll", t);
    };
  let i = e("#navbar .scrollto", !0);
  const o = () => {
    let t = window.scrollY + 200;
    i.forEach((s) => {
      if (!s.hash) return;
      let i = e(s.hash);
      i &&
        (t >= i.offsetTop && t <= i.offsetTop + i.offsetHeight
          ? s.classList.add("active")
          : s.classList.remove("active"));
    });
  };
  window.addEventListener("load", o), s(document, o);
  const a = (t) => {
    let s = e(t).offsetTop;
    window.scrollTo({ top: s, behavior: "smooth" });
  };
  let n = e(".back-to-top");
  if (n) {
    const e = () => {
      window.scrollY > 100
        ? n.classList.add("active")
        : n.classList.remove("active");
    };
    window.addEventListener("load", e), s(document, e);
  }
  t("click", ".mobile-nav-toggle", function (t) {
    e("body").classList.toggle("mobile-nav-active"),
      this.classList.toggle("bi-list"),
      this.classList.toggle("bi-x");
  }),
    t(
      "click",
      ".scrollto",
      function (t) {
        if (e(this.hash)) {
          t.preventDefault();
          let s = e("body");
          if (s.classList.contains("mobile-nav-active")) {
            s.classList.remove("mobile-nav-active");
            let t = e(".mobile-nav-toggle");
            t.classList.toggle("bi-list"), t.classList.toggle("bi-x");
          }
          a(this.hash);
        }
      },
      !0
    ),
    window.addEventListener("load", () => {
      window.location.hash &&
        e(window.location.hash) &&
        a(window.location.hash);
    });
  const l = e(".typed");
  if (l) {
    let e = l.getAttribute("data-typed-items");
    (e = e.split(",")),
      new Typed(".typed", {
        strings: e,
        loop: !0,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2e3,
      });
  }
  let r = e(".skills-content");
  r &&
    new Waypoint({
      element: r,
      offset: "80%",
      handler: function (t) {
        e(".progress .progress-bar", !0).forEach((e) => {
          e.style.width = e.getAttribute("aria-valuenow") + "%";
        });
      },
    }),
    window.addEventListener("load", () => {
      let s = e(".portfolio-container");
      if (s) {
        let i = new Isotope(s, { itemSelector: ".portfolio-item" }),
          o = e("#portfolio-flters li", !0);
        t(
          "click",
          "#portfolio-flters li",
          function (e) {
            e.preventDefault(),
              o.forEach(function (e) {
                e.classList.remove("filter-active");
              }),
              this.classList.add("filter-active"),
              i.arrange({ filter: this.getAttribute("data-filter") }),
              i.on("arrangeComplete", function () {
                AOS.refresh();
              });
          },
          !0
        );
      }
    });
  GLightbox({ selector: ".portfolio-lightbox" });
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: !0,
    autoplay: { delay: 5e3, disableOnInteraction: !1 },
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
  }),
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: !0,
      autoplay: { delay: 5e3, disableOnInteraction: !1 },
      slidesPerView: "auto",
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 20 },
      },
    }),
    window.addEventListener("load", () => {
      AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });
    });
})();
class TextScramble {
  constructor(e) {
    (this.el = e),
      (this.chars = "!<>-_\\/[]{}—=+*^?#________"),
      (this.update = this.update.bind(this));
  }
  setText(e) {
    const t = this.el.innerText,
      s = Math.max(t.length, e.length),
      i = new Promise((e) => (this.resolve = e));
    this.queue = [];
    for (let i = 0; i < s; i++) {
      const s = t[i] || "",
        o = e[i] || "",
        a = Math.floor(40 * Math.random()),
        n = a + Math.floor(40 * Math.random());
      this.queue.push({ from: s, to: o, start: a, end: n });
    }
    return (
      cancelAnimationFrame(this.frameRequest),
      (this.frame = 0),
      this.update(),
      i
    );
  }
  update() {
    let e = "",
      t = 0;
    for (let s = 0, i = this.queue.length; s < i; s++) {
      let { from: i, to: o, start: a, end: n, char: l } = this.queue[s];
      this.frame >= n
        ? (t++, (e += o))
        : this.frame >= a
          ? ((!l || Math.random() < 0.28) &&
            ((l = this.randomChar()), (this.queue[s].char = l)),
            (e += `<span class="dud">${l}</span>`))
          : (e += i);
    }
    (this.el.innerHTML = e),
      t === this.queue.length
        ? this.resolve()
        : ((this.frameRequest = requestAnimationFrame(this.update)),
          this.frame++);
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
const phrases = [
  "Data Science",
  "Machine Learning",
  "AI",
  "Mathematics",
  "Research",
  "Business",
  "Web Development"
],
  el = document.querySelector(".text"),
  fx = new TextScramble(el);
let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  }),
    (counter = (counter + 1) % phrases.length);
};
next();
//Check if email is filled
let button = document.getElementById("button-send")
let input = document.getElementById("mail")
button.disabled = true
input.addEventListener("input", function () {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    input.style.boxShadow = "0 0 3px #00ff00";
    button.disabled = false
    button.style.backgroundColor = "#00ff00"
    button.style.color = "white"
    button.style.borderColor = "white"
    button.style.boxShadow = "0 0 2px #00ff00"
    button.style.cursor = "pointer"
    button.style.transition = "0.5s"




  }
  else {
    input.style.boxShadow = "0 0 2px #ff0000";
    button.disabled = true
    button.style.backgroundColor = "#ff0000"
    button.style.color = "white"
    button.style.borderColor = "#ff0000"
    button.style.boxShadow = "0 0 2px #ff0000"
    button.style.cursor = "not-allowed"
    button.style.transition = "0.5s"

  }
  if (input.value == "") {
    input.style.boxShadow = "0 0 10px grey";

  }

})
button.addEventListener("click", function () {

  setTimeout(function () {
    button.innerHTML = "Sent!"
    button.style.backgroundColor = "#5867dd"
    button.style.color = "white"
    button.style.borderColor = "white"
    button.style.boxShadow = "0 0 2px #5867dd"
    button.style.cursor = "pointer"
    button.style.transition = "0.5s"
    input.value = ""
    text = document.getElementById("text-area")
    text.value = ""
  })


})


let destroyBox = document.getElementById("header-banner")
let destroyBox2 = document.getElementById("contact-form")
VanillaTilt.init(destroyBox)
VanillaTilt.init(destroyBox2)

window.addEventListener('resize', function (event) {
  if (window.innerWidth < 768) {
    destroyBox.vanillaTilt.destroy()
    destroyBox2.vanillaTilt.destroy()

  }
  else {
    VanillaTilt.init(destroyBox);
    VanillaTilt.init(destroyBox2);
  }
}, true);

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  destroyBox.vanillaTilt.destroy()
  destroyBox2.vanillaTilt.destroy()
}

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('hero', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}
else {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('hero', 'assets/particlesMobile.json', function() {
    console.log('callback - particles.js config loaded');
  });
}



const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "Andrés B. Aldaz",
  "Computing",
  "Business",
  "Statistics",
  "Engineering",
  "Research"

];

const morphTime = 1;
const cooldownTime = 2;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();

// $(document).ready(function(){  

//   var appleDevices = ['iPad', 'iPhone', 'iPod'];
  
//   if (appleDevices.indexOf(navigator.platform) > -1) {
//       $("#facts").hide();
//       alert("This website is not optimized for mobile devices. Please use a desktop computer to view this website.");
//   }

// });