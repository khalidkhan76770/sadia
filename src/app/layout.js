import './globals.css';

export const metadata = {
  title: "My Love's Portfolio",
  description: 'An elegant showcase.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
