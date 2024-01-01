const fetchTodos = async (): Promise<[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/todo/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`http error is coming : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`error is coming ${error}`);
    throw error;
  }
};
export default fetchTodos;
