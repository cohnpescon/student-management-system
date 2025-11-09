import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/router'


export default function CreateStudent() {
const [form, setForm] = useState({ name:'', roll_no:'', semester:'', student_email:'', parent_email:'' })
const router = useRouter()


async function handleSubmit(e) {
e.preventDefault()
const { data, error } = await supabase.from('students').insert([form])
if (error) alert(error.message)
else router.push('/students')
}


return (
<div className="max-w-lg bg-white p-6 rounded shadow">
<h2 className="text-lg font-semibold mb-4">Add Student</h2>
<form onSubmit={handleSubmit} className="flex flex-col gap-3">
<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="border p-2 rounded" />
<input value={form.roll_no} onChange={e=>setForm({...form, roll_no:e.target.value})} placeholder="Roll No" className="border p-2 rounded" />
<input value={form.semester} onChange={e=>setForm({...form, semester:e.target.value})} placeholder="Semester" className="border p-2 rounded" />
<input value={form.student_email} onChange={e=>setForm({...form, student_email:e.target.value})} placeholder="Student email" className="border p-2 rounded" />
<input value={form.parent_email} onChange={e=>setForm({...form, parent_email:e.target.value})} placeholder="Parent email" className="border p-2 rounded" />
<div className="flex gap-2">
<button className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
</div>
</form>
</div>
)
}