export const getProducts = async () => {
  const user = JSON.parse(localStorage.getItem("access"));
  const token = user.accessToken;
  let answer = null;
  await fetch("http://localhost:8080/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + token,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      answer = res;
    })
    .catch((error) => {
      console.log(error);
    });
  return answer;
};
