import './globals.css';

export const metadata = {
  title: 'GA Pro System',
  description: 'ระบบแจ้งซ่อมและจองส่วนกลาง',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-[#121212]">{children}</body>
    </html>
  );
}
