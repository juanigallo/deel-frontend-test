export async function fetcher(url, options = {}) {
  if (!url) return { err: true, message: "URL is required" };
  if (typeof url != "string")
    return { err: true, message: "URL must be a string" };

  try {
    const data = await fetch(url, options);
    const json = await data.json();

    return json;
  } catch (err) {
    return err;
  }
}
