import { AppFooter } from '../AppFooter';
import { AppHeader } from '../AppHeader';
import * as styles from './AppShell.css';

export function AppShell({ children }) {
  return (
    <div className={styles.shell}>
      <AppHeader />
      <main className={styles.main}>{children}</main>
      <AppFooter />
    </div>
  );
}
