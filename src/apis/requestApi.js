const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://panda-market-api.vercel.app';
const isQueryValueEfined = (queryValue) => {
  queryValue !== undefined && queryValue !== null && queryValue !== '';
};
const toQueryString = (query = {}) => {
  new URLSearchParams(
    Object.entries(query)
      .filter(([, queryValue]) => isQueryValueEfined(queryValue))
      .map(([queryKey, queryValue]) => [queryKey, String(queryValue)]),
  ).toString(); //toString으로 변환하는 이유 -> 여전히 배열인 값들을 문자열로 변환 그래야 url변환이 가능
};
//URLSEarchParams가 키,값사이에 =,각 쌍 사이에 &끼워줌. 인코딩도!

const buildRequestUrl = (path, query = {}) => {
  const requestUrl = new URL(path, API_BASE_URL);
  requestUrl.search = toQueryString(query); //물음표(?)를 포함한 쿼리 스트링 전체
  return requestUrl.toString();
};
const toRequestError = (response, payload) => {
  const message = payload?.message ?? `HTTP${response.status}`; //왜 `??` -> 안정성 확보.서버가 보낸 데이터 그대로를 유지
  const error = new Error(message);
  error.status = response.status;
  return error;
};
  // 그냥 response.status를 return 하지 않는이유
  //ex 404 값이 실제 데이터인지 에러코드인지 구분하기 어려움
  //어디서 에러가 났는지 추적가능(콜스택 - new Error())


async function parseResponsePayload(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}
export async function requestApi(path, options = {}) {
  const {
    method = 'GET',
    body,
    query,
    headers,
    cache = 'no-store',
    next,
  } = options;
  const requestBody = body ? JSON.stringify(body) : undefined;
  const response = await fetch(buildRequestUrl(path, query), {
    method,
    cache,
    headers: {
      Accept: 'application/json',
      ...(requestBody ? { 'content-type': 'application/json' } : {}),
      ...headers,
    },
    ...(requestBody ? { body: requestBody } : {}),
    ...(next ? { next } : {}),
  });

  if (response.status === 204) {
    return null;
  }
  const payload = await parseResponsePayload(response);
  if (!response.ok) {
    throw toRequestError(response, payload);
  }
  return payload;
}
