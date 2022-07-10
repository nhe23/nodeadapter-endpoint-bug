export const get = async ({ locals }) => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  console.log("GETTING DOGGO");
  if (response.status === 404) {
    return {
      status: 404,
      body: {},
    };
  }

  if (response.status === 200) {
    return {
      status: 200,
      headers: {},
      body: { dog: await response.json() },
    };
  }

  return {
    status: response.status,
  };
};
