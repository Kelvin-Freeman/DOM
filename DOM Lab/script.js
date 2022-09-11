// var menyLinks = [
//     {text: "about", href: "/about"},
//     {text: "catalog", href: "/about"},
//     {text: "orders", href: "/about"},
//     {text: "account", href: "/about"},
// ];

// menuLinks.forEach((obj)) => {
//     const a = document.createElement("a");
//     a.setAttribute("href", obj.href);
//     a.textContent = obj.text;
//     a. MenuEl. appendChild(a);
// }

// const mainEl = document.query

const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr')
console.log(mainEl)