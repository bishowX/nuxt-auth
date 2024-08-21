export default defineEventHandler(async (event) => {
  const path = event.path;
  if (!path.startsWith("/api")) {
    console.log("new request ", path);
    const jwt = getCookie(event, "jwt");
    const query = getQuery(event);

    const code = query.code;
    const redirectUrl = (query.redirectUrl as string) || "/";

    if (!jwt && !code) {
      await sendRedirect(
        event,
        "http://localhost:3001/session?redirectUrl=" + path,
        307
      );
    } else if (code && !jwt) {
      try {
        const resp = await $fetch<{ jwt: string }>("/api/jwt", {
          query: {
            code,
          },
        });
        if (resp?.jwt) {
          setCookie(event, "jwt", resp.jwt, {
            httpOnly: true,
            secure: true,
          });
          await sendRedirect(event, redirectUrl, 307);
        }
      } catch (error) {
        console.log("error getting jwt using code ", code);
      }
    }
  }
});
