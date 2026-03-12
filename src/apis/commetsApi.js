import { toSafeList, toSafeNextCursor } from '@/utils/responseUitls';

import { requestApi } from './requestApi';

const toCommentListResponse = (payload) => ({
  list: toSafeList(payload),
  nextCursor: toSafeNextCursor(payload),
});
//댓글에는 검증 함가 없는 이유
//아티클의 경우 articles/123 처럼 브라우저에서 접근이 가능하지만,
//댓글같은경우에는 주소로 접근하지는 않는다. api를 보낼 때나 해당 명세에 맞게 보내는거지.

//하지만 좀더 꼼꼼하게하려면 댓글도 검증하면 좋다!

export async function fetchArticleCommentList(
  { articleId, limit = 10, cursor } = {},
  requestOptions = {},
) {
  const payload = await requestApi(`/articles/${articleId}/comments`, {
    query: { limit, cursor },
    ...requestOptions,
  });

  return toCommentListResponse(payload);
}

export async function createArticleComment({ articleId, content }) {
  return requestApi(`/articles/${articleId}/comments`, {
    method: 'POST',
    body: { content },
  });
}

export async function updateComment({ commentId, content }) {
  return requestApi(`/comments/${commentId}`, {
    method: 'PATCH',
    body: { content },
  });
}

export async function deleteComment(commentId) {
  return requestApi(`/comments/${commentId}`, {
    method: 'DELETE',
  });
}
