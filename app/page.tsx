'use client';

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Plus, Clock, CheckCircle2, AlertCircle, Car, Wrench, Home } from 'lucide-react';

// จำลองข้อมูลกราฟ (ในอนาคตจะดึงจาก Supabase)
const data = [
  { name: 'จ.', jobs: 12 },
  { name: 'อ.', jobs: 19 },
  { name: 'พ.', jobs: 15 },
  { name: 'พฤ.', jobs: 22 },
  { name: 'ศ.', jobs: 30 },
];

export default function Dashboard() {
  return (
    <div className="relative pb-20">
      {/* ส่วนสถิติ (KPI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          label="งานรออนุมัติ" 
          value="08" 
          sub="ต้องตอบรับใน 2 ชม." 
          icon={<Clock className="text-orange-500" />} 
          borderColor="border-orange-100"
        />
        <StatCard 
          label="งานดำเนินการอยู่" 
          value="14" 
          sub="กำลังเร่งจัดการ" 
          icon={<AlertCircle className="text-blue-500" />} 
          borderColor="border-blue-100"
        />
        <StatCard 
          label="เสร็จสิ้นวันนี้" 
          value="25" 
          sub="ทำได้เยี่ยมมาก!" 
          icon={<CheckCircle2 className="text-green-500" />} 
          borderColor="border-green-100"
        />
      </div>

      {/* ส่วนกราฟ (Charts) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <h3 className="text-lg font-bold mb-6 text-[#0F1923]">ปริมาณงานในสัปดาห์นี้</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E8A020" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#E8A020" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip />
              <Area type="monotone" dataKey="jobs" stroke="#E8A020" strokeWidth={3} fillOpacity={1} fill="url(#colorJobs)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* รายการงานล่าสุด */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-bold text-[#0F1923]">รายการรอดำเนินการ</h3>
        </div>
        <div className="divide-y text-sm">
          <JobRow title="จองรถ Almera (กข-1234)" user="สมชาย มั่นคง" time="14:00 - 16:00" branch="นนทบุรี" icon={<Car size={16} className="text-slate-400" />} />
          <JobRow title="ซ่อมก๊อกน้ำอ่างล้างมือ" user="วิภา ใจดี" time="แจ้งเมื่อ 10:30" branch="บางพลับ" icon={<Wrench size={16} className="text-slate-400" />} />
          <JobRow title="จองห้องประชุม Boardroom" user="ฝ่ายบุคคล" time="09:00 - 10:30" branch="จตุจักร" icon={<Home size={16} className="text-slate-400" />} />
        </div>
      </div>

      {/* 🟡 Floating Action Button (FAB) */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-[#E8A020] text-[#0F1923] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <Plus size={32} strokeWidth={3} />
        <span className="absolute right-20 bg-[#0F1923] text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          สร้างงานใหม่
        </span>
      </button>
    </div>
  );
}

// UI Components
function StatCard({ label, value, sub, icon, borderColor }: any) {
  return (
    <div className={`bg-white p-6 rounded-2xl border-2 ${borderColor} shadow-sm`}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h4 className="text-3xl font-bold text-[#0F1923] my-1">{value}</h4>
      <p className="text-[10px] text-slate-400 font-bold uppercase">{sub}</p>
    </div>
  );
}

function JobRow({ title, user, time, branch, icon }: any) {
  return (
    <div className="p-4 flex justify-between items-center hover:bg-slate-50 transition cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
        <div>
          <p className="font-bold text-[#0F1923]">{title}</p>
          <p className="text-xs text-slate-500">{user} • {branch}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs font-mono text-slate-400">{time}</p>
        <button className="text-[10px] font-bold text-[#0066CC] hover:underline mt-1">ดูรายละเอียด</button>
      </div>
    </div>
  );
}
