const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  'https://panda-market-api.vercel.app';

  

// 4. 포스트 업로드 함수를 만듭니다.
export async function uploadArticle(newArticle) {
  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });

  if (!response.ok) {
    throw new Error("Failed to upload the article.");
  }

  return await response.json();
}

// 5. 유저와 댓글 조회 함수를 준비합니다.
export async function getUserInfo(username) {
  const response = await fetch(
    `${BASE_URL}/users/${username}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user info.");
  }

  return await response.json();
}

// 6. 포스트별 댓글 개수 조회 함수를 만듭니다.
export async function getCommentCountByArticleId(articleId) {
  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/comments`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comment count.");
  }

  const body = await response.json();
  return body.count;
}

// 7. 포스트별 댓글 목록 조회 함수를 만듭니다.
export async function getCommentsByArticleId(
  articleId,
  page = 0,
  limit,
) {
  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/comments?page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comments.");
  }

  return await response.json();
}

// 8. 댓글 작성 함수를 만듭니다.
export async function addComment(articleId, newComment) {
  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to add the comment.");
  }
  return await response.json();
}

// 9. 좋아요 관련 함수를 준비합니다.
export async function getLikeCountByArticleId(articleId) {
  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/likes`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch like count.");
  }

  const body = await response.json();
  return body.count;
}

// 10. 좋아요 여부 조회 함수를 만듭니다.
// 이 API는 좋아요 여부를 200(존재)과 404(미존재)로 구분하는 설계이므로,
// 404가 에러가 아니라 정상 응답의 일부입니다.
// 그 외 상태 코드만 에러로 처리합니다.
export async function getLikeStatusByUsername(
  articleId,
  username,
) {
  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/likes/${username}`,
  );
  if (response.status === 200) {
    return true;
  }
  if (response.status === 404) {
    return false;
  }
  throw new Error("Failed to get like status of the post.");
}

// 11. 좋아요 추가 함수를 만듭니다.
export async function likePost(articleId, username) {
  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/likes/${username}`,
    {
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to like the post.");
  }
}

// 12. 좋아요 취소 함수를 만듭니다.
export async function unlikePost(articleId, username) {
  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/likes/${username}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to unlike the article.");
  }
}