import Link from 'next/link'
export default function Home() {
return (
<div className="text-center">
<h1 className="text-3xl font-bold">Welcome to PES Student Management</h1>
<p className="mt-3 text-gray-600">Professional, responsive, simple to use.</p>
<div className="mt-6 flex justify-center gap-3">
<Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
<Link href="/students" className="px-4 py-2 bg-gray-200 rounded">Students</Link>
</div>
</div>
)
}