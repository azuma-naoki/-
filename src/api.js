// async function request(path, options = {}) {
//   const url = `${import.meta.env.VITE_API_ORIGIN}${path}`;
//   const response = await fetch(url, options);
//   return response.json();
// }

async function request(path, options = {}) {
  // const url = `https://pri-server.vercel.app/${path}`;
  const url = `http://localhost:5000/${path}`;
  const response = await fetch(url, options);
  return response.json();
}

export async function getGraph(data) {
  const options = {
    headers : {"Content-Type": "application/json"},
    method : "POST",
    // body : JSON.stringify({"x": x, "y": y})
    body : JSON.stringify(data)
  }
  return request(`graph`, options);
}


// export async function getRestaurants(arg = {}) {
//   const params = new URLSearchParams(arg);
//   return request(`/restaurants?${params.toString()}`);
// }

// export async function getRestaurant(restaurantId) {
//   return request(`/restaurants/${restaurantId}`);
// }

// export async function getRestaurantReviews(restaurantId, arg = {}) {
//   const params = new URLSearchParams(arg);
//   return request(`/restaurants/${restaurantId}/reviews?${params.toString()}`);
// }