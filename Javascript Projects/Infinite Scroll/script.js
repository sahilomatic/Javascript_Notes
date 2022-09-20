const container = document.querySelector(".container");

let limit = 4;
let page = 1;

const getData = async (page = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  let data = await response.json();
  console.log(data);
  data.map((obj, index) => {
    const htmlData = `<div class="posts">
        <p class="post-id">${obj.id}</p>
        <h2 class="title">${obj.title}</h2>
        <p class="post-info">${obj.body}</p>
      </div>`;

    //container.innerHTML is not used because some text is already present in container, if we make any changes here whole content will be deleted
    container.insertAdjacentHTML("beforeend", htmlData);
    /* insertAdjacentHTML has two three option
    1) afterbegin : add text after beign
    2)"beforebegin"
    3)"beforeend"
    */
  });
};

console.log("running");
getData();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // scrollHeight is height of entire content
  // clientHeight is height of view
  //offsetHeight is height of view + offset like scroll bar etc
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    getNextData();
  }
});

getNextData = () => {
  setTimeout(() => {
    console.log("here");
    getData(2);
  }, 300);
};
