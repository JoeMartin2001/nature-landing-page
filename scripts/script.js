const select = (selector, Boolean) =>
  Boolean
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);

/* RENDER CONTENT START */

renderContentCards();

function renderContentCards() {
  data.forEach((item, index) => {
    const direction = index == 1 ? true : false;

    select(".content-section").innerHTML += `
            <div class="${
              direction
                ? "content-section-item"
                : "content-section-item-reversed"
            }">
                <div class="content-section-item-left">
                <div>
                    <hr />
                    <p>${item.title}</p>
                </div>
                <h1>${item.subTitle}</h1>
                <p class="content-section-item-left-p">${item.more}</p>
                <button>
                    <p>read more</p>
                    <i class="fas fa-arrow-right"></i>
                </button>
                </div>
                <div class="content-section-item-right">
                <img src="${item.img}" alt="" />
                </div>
            </div>
        `;
  });
}

/* RENDER CONTENT END */

/* HANDLE MENU BUTTON START */

handleMenuModal();

function handleMenuModal() {
  select(".menu-btn").onclick = () => {
    select(".menu-modal").classList.add("menu-modal-visible");
  };

  select(".menu-modal-close").onclick = () => {
    select(".menu-modal").classList.remove("menu-modal-visible");
  };
}

/* HANDLE MENU BUTTON END */
