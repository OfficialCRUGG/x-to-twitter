if (document.location.hostname === "x.com") {
  const newUrl = document.location.href.replace("x.com", "twitter.com");
  const [mainUrl, queryString] = newUrl.split("?");
  const queryParams = new URLSearchParams(queryString);
  queryParams.set("mx", "1");
  document.location.href = `${mainUrl}?${queryParams.toString()}`;
}
