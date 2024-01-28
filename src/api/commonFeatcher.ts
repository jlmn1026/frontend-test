const headers = new Headers();
headers.set("x-api-key", import.meta.env.VITE_API_KEY!);
export const commonFeatcher = async (path: string) => {
  return fetch(`https://opendata.resas-portal.go.jp/api/v1/${path}`, {
    headers,
  })
    .then((res) => res.json())
    .then((json) => json.result);
};
