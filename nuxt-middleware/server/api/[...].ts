export default defineEventHandler(async (event) => {
  const api = "http://localhost:3001";
  const path = event.path;
  const url = api + path.replace("/api", "");

  const headers = getHeaders(event) as Record<string, string>;

  console.log("headers in proxy: ", headers);

  try {
    const resp = await $fetch(url, {
      headers: headers,
    });
    return resp;
  } catch (e) {
    console.log("error in proxy: ", e);
    throw e;
  }
});
