export async function onRequest(context) {
  const { request } = context;
  return fetch(request);
}
