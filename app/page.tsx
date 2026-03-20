'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RepairPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    request_type: '',
    title: '',
    description: '',
    location: '',
    priority: 'Normal', // ค่าเริ่มต้น
    requester_name: 'พนักงาน A (Default)', // สมมติว่าดึงมาจากระบบ Login
    requester_email: 'employee.a@email.com', // สมมติว่าดึงมาจากระบบ Login
    requester_phone: '081-234-5678', // สมมติว่าดึงมาจากระบบ Login
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ส่วนนี้คือการเดินสายไฟ (Connect) ไปที่ฐานข้อมูล (Supabase)
    // สำหรับตอนนี้ เราจะทำแค่ Mockup ว่ามีการส่งข้อมูลสำเร็จ
    console.log('Submitting Data:', formData, 'File:', file);
    alert('ส่งรายการแจ้งซ่อมสำเร็จ! (Mockup Data)');
    // หลังจากส่งสำเร็จ จะเด้งกลับหน้าหลัก
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto mt-10">
        
        <Link href="/" className="text-[#7A1A2A] hover:text-rose-400 mb-6 inline-block transition">
          ← กลับหน้าหลัก (Back to Home)
        </Link>
        
        <div className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-10 shadow-xl border-t-4 border-t-[#7A1A2A]">
          <h1 className="text-3xl font-bold mb-1 text-rose-400 flex items-center gap-3">
            <span className="text-3xl">🔧</span> สร้างรายการแจ้งซ่อม / บริการ
          </h1>
          <p className="text-sm text-gray-400 mb-8 border-b border-gray-800 pb-4">กรุณากรอกรายละเอียดปัญหาให้ครบถ้วน ทีมงาน GA จะเร่งดำเนินการให้เร็วที่สุดครับ</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* --- ส่วนที่ 1: ข้อมูลผู้แจ้ง (ดึงอัตโนมัติ) --- */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <h2 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="text-xl">👤</span> ข้อมูลผู้แจ้ง (Requester Information)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">ชื่อ-นามสกุล (Name-Surname)</label>
                  <input type="text" name="requester_name" value={formData.requester_name} readOnly className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">อีเมล (Email)</label>
                  <input type="email" name="requester_email" value={formData.requester_email} readOnly className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">เบอร์โทรศัพท์ (Phone)</label>
                  <input type="tel" name="requester_phone" value={formData.requester_phone} onChange={handleInputChange} className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition" />
                </div>
              </div>
            </div>

            {/* --- ส่วนที่ 2: รายละเอียดปัญหา --- */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <h2 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="text-xl">📝</span> รายละเอียดปัญหา (Problem Details)
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">ประเภทงาน (Request Type)</label>
                  <select name="request_type" value={formData.request_type} onChange={handleInputChange} required className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition">
                    <option value="" disabled>-- เลือกประเภทงาน --</option>
                    <option value="Electrical">งานไฟฟ้า (Electrical)</option>
                    <option value="Plumbing">งานประปา (Plumbing)</option>
                    <option value="HVAC">งานแอร์/ระบบระบายอากาศ (HVAC)</option>
                    <option value="Building">งานอาคารสถานที่ (Building Maintenance)</option>
                    <option value="Cleaning">งานทำความสะอาด (Cleaning)</option>
                    <option value="Other">อื่นๆ (Other)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">หัวข้อปัญหา (Title)</label>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition" placeholder="เช่น แอร์น้ำหยด, หลอดไฟขาด, ท่อประปารั่ว" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">รายละเอียดเพิ่มเติม (Description)</label>
                  <textarea name="description" value={formData.description} onChange={handleInputChange} required className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white h-32 focus:outline-none focus:border-[#7A1A2A] transition" placeholder="อธิบายจุดที่เกิดเหตุ หรือรายละเอียดของปัญหาให้ชัดเจน..."></textarea>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">สถานที่เกิดเหตุ (Location/Area)</label>
                  <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition" placeholder="เช่น ห้องประชุม 1 ชั้น 3, โถงทางเดิน ฝั่งตะวันออก" />
                </div>
              </div>
            </div>

            {/* --- ส่วนที่ 3: ความเร่งด่วนและไฟล์แนบ --- */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <h2 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <span className="text-xl">⚠️</span> ความเร่งด่วนและไฟล์แนบ (Priority & Attachment)
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">ระดับความเร่งด่วน (Priority)</label>
                  <select name="priority" value={formData.priority} onChange={handleInputChange} className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition">
                    <option value="Low">Low - ไม่เร่งด่วน</option>
                    <option value="Normal">Normal - ปกติ (3 วันทำการ)</option>
                    <option value="High">High - เร่งด่วน (1 วันทำการ)</option>
                    <option value="Emergency">Emergency - ฉุกเฉินทันที</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">แนบไฟล์ภาพ (Attach Image/File)</label>
                  <input type="file" onChange={handleFileChange} accept="image/*" className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition" />
                  <p className="text-xs text-gray-500 mt-1">ขนาดไฟล์ไม่เกิน 5MB</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <button type="submit" className="bg-[#7A1A2A] hover:bg-rose-900 text-white px-8 py-4 rounded-md font-semibold transition w-full shadow-lg shadow-rose-900/20 text-lg">
                ส่งรายการแจ้งซ่อม (Submit Request)
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
