const Url = "https://api-alura-geek.onrender.com"

export const getAllProducts = async (limit, category) => {
  let url = `${Url}/productos`;

  if (limit) {
    url += `?_limit=${limit}`;
  }

  if (category) {
    url += `&categoryId=${category}`;
  }

  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${Url}/productos/${id}`);
    if (!response.ok) {
      throw new Error(
        `Error al obtener el producto. Estado de la respuesta: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw error;
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await fetch(`${Url}/productos/${id}`);
    if (!response.ok) {
      // Si la respuesta no es "ok", lanza un error con el mensaje del estado de la respuesta
      throw new Error(
        `Error al obtener la categoría. Estado de la respuesta: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Si ocurre algún error durante la solicitud, manejarlo adecuadamente aquí
    console.error("Error al obtener la categoría:", error);
    throw error; // Lanza el error para que quien llame a esta función pueda manejarlo
  }
};

export const createProduct = async (product) => {
  return await fetch(`${Url}/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((res) => res.json());
};

export const updateProduct = async (id, updateData) => {
  fetch(`${Url}/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const deleteProduct = async (id) => {
  return await fetch(`${Url}/productos/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
