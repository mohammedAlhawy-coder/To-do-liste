const upload = document.querySelector(".upload");

const input = document.querySelector("input");

const container = document.querySelector(".container");

upload.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = `
    <div class="task">
      <span class="icon-star icon"></span>

      <p class="task-text"> ${input.value} </p>

      <div>
        <span class="icon-trash-o icon"></span>
        <span class="icon-angry2 icon"></span>
      </div>
      <!-- <span class="icon-heart"></span> -->
    </div>
    `;
  container.innerHTML += task;

  input.value=""


});


container.addEventListener("click", (eo) => {

  if (eo.target.className == "icon-trash-o icon")
    eo.target.parentElement.parentElement.remove()


  else if (eo.target.className == "icon-angry2 icon") {

    eo.target.style.display = "none"

    const heart = `<span class="icon-heart icon "></span>`


    eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finsh")

    eo.target.parentElement.innerHTML += heart

  }


  else if (eo.target.className == "icon-heart icon "){
    eo.target.style.display = "none"
    const angry = ` <span class="icon-angry2 icon"></span>`
    eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finsh")

    eo.target.parentElement.innerHTML += angry


  }







  else if (eo.target.className == "icon-star icon") {
    container.prepend(eo.target.parentElement)
    eo.target.classList.add("orange")
  }  


  else if (eo.target.className == "icon-star icon orange") {
    eo.target.classList.remove("orange")

  }



})


