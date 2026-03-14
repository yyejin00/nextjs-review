import AllBoardItem from '../../[id]/_components/AllBoardItem/AllBoardItem';

export default function AllBoard({ articles }) {
  return (
    <div>
      게시글
      <div>
        {articles.map((article) => (
          <AllBoardItem key={article.key} article={article} />
        ))}
      </div>
      <div>페이지네이션 자리</div>
    </div>
  );
}
