export async function mockFetch<T>(data: T, delayMs: number = 250): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delayMs);
  });
}
