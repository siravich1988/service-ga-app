import Link from 'next/link';

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto mt-10">
        
        <Link href="/" className="text-[#7A1A2A] hover:text-rose-400 mb-6 inline-block transition">
          ← กลับหน้าหลัก (Back to Home)
        </Link>
        
        <div className="bg-[#1E1E1E] border border-gray-800 rounded-xl p-8 shadow-xl border-t-4 border-t-[#7A1A2A]">
          <h1 className="text-2xl font-bold mb-6 text-rose-400 flex items-center gap-3">
            <span className="text-3xl">🔧</span> ฟอร์มแจ้งซ่อม / บริการ (Service Request)
          </h1>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">หัวข้อปัญหา (Title)</label>
              <input type="text" className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#7A1A2A] transition" placeholder="เช่น แอร์น้ำหยด, หลอดไฟขาด, ท่อประปารั่ว" />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-1">รายละเอียดเพิ่มเติม (Description)</label>
              <textarea className="w-full bg-[#121212] border border-gray-700 rounded-md p-3 text-white h-32 focus:outline-none focus:border-[#7A1A2A] transition" placeholder="อธิบายจุดที่เกิดเหตุ หรือรายละเอียดของปัญหาให้ชัดเจน..."></textarea>
            </div>

            <div className="pt-4">
              <button type="button" className="bg-[#7A1A2A] hover:bg-rose-900 text-white px-6 py-3 rounded-md font-medium transition w-full shadow-lg shadow-rose-900/20">
                ส่งรายการแจ้งซ่อม (Submit Request)
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
