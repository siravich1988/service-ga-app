import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 font-sans">
      
      {/* Navbar: แถบเมนูด้านบน */}
      <nav className="bg-[#1A1A1A] border-b border-[#7A1A2A]/30 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider cursor-pointer">
          <span className="text-[#7A1A2A]">GA</span> <span className="text-white">PRO</span>
        </div>
        <div className="flex gap-4">
          <button className="text-sm text-gray-300 hover:text-white transition">เข้าสู่ระบบ (Login)</button>
          <button className="bg-[#7A1A2A] hover:bg-rose-900 text-white px-5 py-2 rounded-md text-sm font-medium transition shadow-lg shadow-rose-900/20">
            ลงทะเบียน (Register)
          </button>
        </div>
      </nav>

      {/* Main Content: พื้นที่เนื้อหาหลัก */}
      <main className="max-w-6xl mx-auto p-6 mt-8">
        
        {/* Section 1: ประกาศจาก GA (Announcements) */}
        <div className="bg-gradient-to-r from-[#7A1A2A]/20 to-transparent border-l-4 border-[#7A1A2A] p-5 rounded-r-md mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">📢</span>
            <h2 className="text-lg font-semibold text-rose-400">ประกาศจากแผนก GA (Announcements)</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            ยินดีต้อนรับสู่ระบบ GA Pro รูปแบบใหม่! เริ่มตั้งแต่วันนี้ พนักงานทุกท่านสามารถใช้ระบบนี้ในการแจ้งซ่อมแซมอาคารสถานที่, จองห้องประชุม และจองรถยนต์ส่วนกลางได้ด้วยตัวเองผ่านมือถือและคอมพิวเตอร์ครับ
          </p>
        </div>

        {/* Section 2: เมนูบริการหลัก (Main Services) */}
        <h3 className="text-xl font-medium mb-6 border-b border-gray-800 pb-2">เลือกบริการที่ต้องการ (Services)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: ระบบแจ้งซ่อม */}
          <div className="bg-[#1E1E1E] border border-gray-800 hover:border-[#7A1A2A] rounded-xl p-6 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A1A2A]/10">
            <div className="w-14 h-14 bg-[#121212] border border-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:border-[#7A1A2A] transition">
              <span className="text-2xl">🔧</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">ระบบแจ้งซ่อม</h4>
            <p className="text-sm text-gray-400 mb-6 min-h-[40px]">แจ้งปัญหาแอร์ น้ำ ไฟฟ้า และอาคารสถานที่ พร้อมติดตามสถานะงานแบบ Real-time</p>
            <div className="flex items-center text-[#7A1A2A] font-medium text-sm group-hover:text-rose-400 transition">
              สร้างรายการแจ้งซ่อม <span className="ml-2 group-hover:translate-x-1 transition">→</span>
            </div>
          </div>

          {/* Card 2: จองห้องประชุม */}
          <div className="bg-[#1E1E1E] border border-gray-800 hover:border-[#7A1A2A] rounded-xl p-6 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A1A2A]/10">
            <div className="w-14 h-14 bg-[#121212] border border-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:border-[#7A1A2A] transition">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">จองห้องประชุม</h4>
            <p className="text-sm text-gray-400 mb-6 min-h-[40px]">ตรวจสอบตารางห้องว่าง และทำการจองห้องประชุมล่วงหน้าได้ทันที</p>
            <div className="flex items-center text-[#7A1A2A] font-medium text-sm group-hover:text-rose-400 transition">
              ดูห้องว่างและจอง <span className="ml-2 group-hover:translate-x-1 transition">→</span>
            </div>
          </div>

          {/* Card 3: จองรถยนต์ส่วนกลาง */}
          <div className="bg-[#1E1E1E] border border-gray-800 hover:border-[#7A1A2A] rounded-xl p-6 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A1A2A]/10">
            <div className="w-14 h-14 bg-[#121212] border border-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:border-[#7A1A2A] transition">
              <span className="text-2xl">🚗</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">จองรถยนต์ส่วนกลาง</h4>
            <p className="text-sm text-gray-400 mb-6 min-h-[40px]">เช็คตารางรถยนต์ว่าง และจองรถสำหรับออกไปปฏิบัติงานภายนอก</p>
            <div className="flex items-center text-[#7A1A2A] font-medium text-sm group-hover:text-rose-400 transition">
              เลือกรถยนต์ <span className="ml-2 group-hover:translate-x-1 transition">→</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
