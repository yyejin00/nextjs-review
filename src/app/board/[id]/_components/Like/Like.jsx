import Image from 'next/image';
import * as styles from './Like.css';
import { IMAGE_SIZES } from '@/components/layouts/constants/uiDimensions';

export default function Like({
  count = 0,
  fontSize = 16,
  gap = 4,
  iconSize = IMAGE_SIZES.LIKE_ICON,
}) {
  const overCount = count > 10000 ? '9999+' : String(count);
  return (
    <div className={styles.wrapper} style={{ fontSize, gap }}>
      <Image
        src="/images/icons/ic_heart.svg"
        alt="좋아요"
        width={iconSize}
        height={iconSize}
      />
      {overCount}
    </div>
  );
}
