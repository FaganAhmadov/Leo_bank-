const btn = document.querySelectorAll(".langBtn");
const menu = document.querySelectorAll(".langMenu");
const arrow = document.querySelectorAll(".arrowIcon");
const navItems = document.querySelectorAll(".navItems");


btn.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.forEach((item) => {
            item.classList.toggle("hidden");
        })
        arrow.forEach((item) => {
            item.classList.remove("rotate-180");
        })
    })

})

// kənara klik edəndə bağlansın|||||||||||
document.addEventListener("click", () => {
    menu.forEach((item) => {
        item.classList.add("hidden");
    })
    arrow.forEach((item) => {
        item.classList.remove("rotate-180");
    })
});


navItems.forEach(item => {
    const nav = item.querySelector(".navPages");
    const drop = item.querySelector(".dropDownMenu");
    const icon = item.querySelector(".arrowIconNav");

    if (!nav || !drop) return; // dropdown yoxdursa keç

    nav.addEventListener("click", (e) => {
        e.stopPropagation();
        // digər dropdownları bağla
        document.querySelectorAll(".dropDownMenu").forEach(m => {
            if (m !== drop) m.classList.add("hidden");
        });

        document.querySelectorAll(".arrowIconNav").forEach(i => {
            if (i !== icon) i.classList.remove("rotate-180");
        });
        // toggle
        drop.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
    });

    // menu içində klik
    drop.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

// kənara klik
document.addEventListener("click", () => {
    document.querySelectorAll(".dropDownMenu").forEach(m => m.classList.add("hidden"));
    document.querySelectorAll(".arrowIconNav").forEach(i => i.classList.remove("rotate-180"));
});



const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const icon = document.getElementById("icon");

menuBtn.onclick = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
};

// accordion
document.querySelectorAll(".navItem").forEach(item => {
    item.onclick = () => {
        const dropdown = item.nextElementSibling;
        const arrow = item.querySelector(".arrow");

        if (dropdown.style.maxHeight) {
            dropdown.style.maxHeight = null;
            arrow.classList.remove("rotate-180");
        } else {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            arrow.classList.add("rotate-180");
        }
    };
});