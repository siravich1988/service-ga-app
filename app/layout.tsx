import React from 'react';
import './globals.css';
import { LayoutDashboard, Tool, Car, Settings, Bell, User } from 'lucide-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar - สี Ink (#0F1923) ตามสไตล์ที่คุณกิ๊กชอบ */}
          <aside className="w-64 bg-[#0F1923] text-white hidden md:flex flex-col sticky top-0 h-screen">
            <div className="p-6">
              <h2 className="text-xl font-bold tracking-wider text-[#E8A020]">GA PRO</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Siam Pharma Service</p>
            </div>
            
            <nav className="flex-1 px-4 space-y-2 mt-4">
              <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
              <NavItem icon={<Tool size={20} />} label="แจ้งซ่อม/บริการ" />
              <NavItem icon={<Car size={20} />} label="จองรถ & ห้อง" />
              <NavItem icon={<Settings size={20} />} label="ตั้งค่า SLA" />
            </nav>

            <div className="p-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8A020] flex items-center justify-center text-[#0F1923] font-bold">
                  K
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white">คุณกิ๊ก</p>
                  <p className="text-xs text-slate-400">Supervisor</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Header / Topbar */}
            <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <select className="bg-slate-100 border-none text-sm rounded-lg px-3 py-1.5 font-medium outline-none">
                  <option>สาขานนทบุรี</option>
                  <option>สาขาบางพลับ</option>
                  <option>สาขาจตุจักร</option>
                </select>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                <button className="relative p-2 hover:bg-slate-100 rounded-full transition">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-full transition">
                  <User size={20} />
                </button>
              </div>
            </header>

            {/* หน้าเนื้อหา (จะเปลี่ยนไปตามหน้าที่เลือก) */}
            <main className="p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

// ส่วนประกอบย่อยของปุ่มเมนู
function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
      ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-900/20' 
      : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
