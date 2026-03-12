import { parseArticleId } from '@/utils/articleId';

import { toSafeList, toSafeTotalCount } from '@/utils/responseUitls';

import { requestApi } from './requestApi';

//payload 정제 함수
const toArticleListResponse = (payload) => ({
  list: toSafeList(payload),
  totalcount: toSafeTotalCount(payload),
});

//거지같은 id를 서버까지가게해서 비용을 내게하지말고 프런트단에서 차단
const toValidArticleId = (articleId) => {
  const parseArticleId = parseArticleId(articleId);
  if (parseArticleId === null) {
    throw new Error('invalid article id');
  }
  return parseArticleId;
};
//이미지가 없거나 빈문자열은 undefined로 정리
const toOptionalImage = (img) => img?.trim?.() || undefined;

export async function fetchArticleList(
  { page = 1, pageSize = 10, orderBy = 'recent', keyword = '' } = {},
  requestOptions = {},
) {
  const payload = await requestApi('/articles', {
    query: {
      page,
      pageSize,
      orderBy,
      keyword: keyword.trim(),
    },
    ...requestOptions,
  });
  return toArticleListResponse(payload);
}
export async function fetchArticleDetail(articleId, requestOptions = {}) {
  const validArticleId = toValidArticleId(articleId);
  return requestApi(`/articles/${validArticleId}`, requestOptions);
}
export async function createArticle({ title, content, image = '' }) {
  return requestApi('/articles', {
    method: 'POST',
    body: { title, content, image: toOptionalImage(image) },
  });
}

export async function updateArticle({ articleId, title, content, image = '' }) {
  const validArticleId = toValidArticleId(articleId);

  return requestApi(`/articles/${validArticleId}`, {
    method: 'PATCH',
    body: { title, content, image: toOptionalImage(image) },
  });
}

export async function deleteArticle(articleId) {
  const validArticleId = toValidArticleId(articleId);

  return requestApi(`/articles/${validArticleId}`, {
    method: 'DELETE',
  });
}
