export const getProducts = async (accessToken) => {
  let answer = null;
  await fetch("http://localhost:8080/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      "Authorization": "Bearer " + accessToken,
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
