import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fbfcfd]">
      <Header />
      <main className="flex-1 w-full bg-white flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
