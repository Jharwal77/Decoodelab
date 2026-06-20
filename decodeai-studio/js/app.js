const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(count < target){

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target;

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const message=document.getElementById("message").value.trim();

    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name===""){

        alert("Enter your name");

        return;

    }

    if(!email.match(emailPattern)){

        alert("Enter valid email");

        return;

    }

    if(message===""){

        alert("Enter your message");

        return;

    }

    alert("Message Sent Successfully!");

    contactForm.reset();

});
const newsletterForm=document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email=document
    .getElementById("newsletterEmail")
    .value
    .trim();

    const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(pattern)){

        alert("Enter valid email");

        return;

    }

    alert("Subscribed Successfully!");

    newsletterForm.reset();

});

const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

    themeToggle.innerText="☀️";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.innerText="☀️";

    }else{

        localStorage.setItem("theme","light");

        themeToggle.innerText="🌙";

    }

});
const reveals=document.querySelectorAll(".reveal");

const revealObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

reveals.forEach(item=>{

    revealObserver.observe(item);

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});