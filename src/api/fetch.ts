
export async function getCoins<T>(url : string): Promise<T>{
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json() as Promise<T>;
}