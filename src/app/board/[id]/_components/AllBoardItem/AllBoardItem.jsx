import Image from 'next/image';
import Link from 'next/link';
import * as styles from './AllBoardItem.css';
import Like from '../Like/Like';

export default function AllBoardItem({ article }) {
  return (
    <Link className={styles.card} href={`/board/${article.id}`}>
      {/* 링크 최상단 */}

      <div className={styles.sticker}>
        <Image
          src="/images/icons/ic_medal.svg"
          alt="베스트"
          width={IMAGE_SIZES.MEDAL_ICON}
          height={IMAGE_SIZES.MEDAL_ICON}
        />
        <p>Best</p>
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          <h3 className={styles.title}>{article.title}</h3>
          {article.image ? (
            <Image
              src={article.image}
              alt={`${article.id}번 게시글 이미지`}
              fill={true}
              sizes={`${IMAGE_SIZES.ARTICLE_THUMBNAIL}px`}
              style={{ objectFit: 'contain' }}
            />
          ) : null}
          {/*사진은 있을 수도 있고 없을 수도 있다.*/}
        </div>
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            <div>{article.writer.nickName}</div>
          </div>
          <span className={styles.timestamp}>{article.createdAt}</span>

          <Like count={article.likeCount} />
        </div>
      </div>
    </Link>
  );
}
