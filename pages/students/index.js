import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'


export default function StudentsPage() {
const [students, setStudents] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{ fetchStudents() }, [])
async function fetchStudents() {
setLoading(true)
const { data, error } = await supabase.from('students').select('*').order('name')
if (error) alert(error.message)
else setStudents(data || [])
setLoading(false)
}


async function handleDelete(id) {
if(!confirm('Delete this student?')) return
const { error } = await supabase.from('students').delete().eq('id', id)
if (error) alert(error.message)
else fetchStudents()
}


return (
<div>
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold">Students</h2>
<Link href="/students/create" className="px-3 py-1 bg-green-600 text-white rounded">+ Add Student</Link>
</div>
{loading ? <p>Loading...</p> : (
<div className="bg-white rounded shadow overflow-hidden">
<table className="min-w-full">
<thead className="bg-gray-100 text-left">
<tr>
<th className="px-4 py-2">Name</th>
<th className="px-4 py-2">Roll No</th>
<th className="px-4 py-2">Semester</th>
<th className="px-4 py-2">Parent Email</th>
<th className="px-4 py-2">Actions</th>
</tr>
</thead>
<tbody>
{students.map(s=> (
<tr key={s.id} className="border-t">
<td className="px-4 py-2">{s.name}</td>
<td className="px-4 py-2">{s.roll_no}</td>
<td className="px-4 py-2">{s.semester}</td>
<td className="px-4 py-2">{s.parent_email}</td>
<td className="px-4 py-2">
<Link href={`/students/${s.id}`} className="text-blue-600 mr-3">View</Link>
<button onClick={()=>handleDelete(s.id)} className="text-red-600">Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
)}
</div>
)
}