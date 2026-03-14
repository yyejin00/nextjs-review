import AllBoard from '../AllBoard/AllBoard';
import BestBoard from '../BestBoard/BestBoard';

export default function BoardContainer({bestArticles, AllAricles,page,pageSize,orderBy,}) {
  return (
    <div>
      <BestBoard />
      <AllBoard />
    </div>
  );
}
