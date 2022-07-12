const button = document.querySelector("button");
button.addEventListener("click", () => {
  // console.log("checkout");
  fetch("http://localhost:3000/create-checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
      // console.log(url);
    })
    .catch((err) => {
      console.error(err.error);
    });
});
