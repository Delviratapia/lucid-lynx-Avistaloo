import {
    qs
} from './utils.js'

async function prevPage(pagination) {
    if (pagination["cur_page"] >= 1) {
        pagination["cur_page"]--;
        await changePage(pagination);
    }
}

async function nextPage(pagination) {


    if (pagination["cur_page"] <= numPages(pagination)) {
        pagination["cur_page"]++;
        await changePage(pagination);
    }
}

async function changePage(pagination) { // sergio logic
    let btn_next = qs("#btn-next");
    let btn_prev = qs("#btn-prev");

    // Validate page
    qs(".cards").innerHTML = "";
    if ("args" in pagination) {
        await pagination["show_fn"](pagination.args)
    } else {
        await pagination["show_fn"]()

    }
    qs("#page-span").innerHTML = pagination["cur_page"];
    document.querySelector(".total-birds").textContent = `${pagination["birds_seen"]} / ${pagination["total_results"]}`;


    if (pagination["cur_page"] != 1) {
        btn_prev.classList.remove("hidden");
    } else {
        btn_prev.classList.add("hidden");
    }

    if (pagination["cur_page"] == numPages(pagination)) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages(pagination) {
    return Math.ceil(pagination["total_results"] / pagination["records_per_page"]);
}


export {
    nextPage,
    prevPage
};