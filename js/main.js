const upload = document.querySelector(".upload");

const input = document.querySelector("input");

const p = document.querySelector(".p");

upload.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = `
    <div class="task">
      <span class="icon-star icon"></span>

      <p> ${input.value} </p>

      <div>
        <span class="icon-trash-o icon"></span>
        <span class="icon-angry2 icon"></span>
      </div>
      <!-- <span class="icon-heart"></span> -->
    </div>
    `;
  p.innerHTML += task;
});
