'use client';
import React from 'react';

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 p-6">
      <div className="max-w-4xl mx-auto mt-10">
        {/* ปุ่มกลับหน้าหลักแบบใช้คำสั่ง HTML พื้นฐาน (ชัวร์ที่สุด) */}
        <button 
          onClick={() => window.location.href = '/'}
          className="text-[#7A1A2A] hover:text-rose-400 mb-6 flex items-center gap-2 cursor-pointer font-medium"
        >
          ← กลับหน้าหลัก (Back to Home)
        </button>
        
        <div className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-10 border-t-4 border-t-[#7A1A2A]">
          <h1 className="text-3xl font-bold mb-6 text-rose-400">🔧 สร้างรายการแจ้งซ่อม</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">หัวข้อปัญหา</label>
              <input type="text" className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white" placeholder="ระบุปัญหา..." />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">รายละเอียด</label>
              <textarea className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white h-32" placeholder="อธิบายรายละเอียด..."></textarea>
            </div>
            <button type="button" onClick={() => { alert('ส่งข้อมูลสำเร็จ!'); window.location.href = '/'; }} className="bg-[#7A1A2A] w-full py-4 rounded-md font-bold hover:bg-rose-900 transition">
              ส่งรายการแจ้งซ่อม
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
