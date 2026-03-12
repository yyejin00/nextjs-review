import { AppShell } from '@/components/layouts/layouts/AppShell';
import '@/styles/globals.css';

export const metadata = {
  title: '판다마켓',
  description: '판다마켓 게시판',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
