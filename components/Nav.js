import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'


export default function Nav() {
const [user, setUser] = useState(null)
useEffect(() => {
const s = supabase.auth.onAuthStateChange((_event, session) => {
setUser(session?.user ?? null)
})
// initial
supabase.auth.getSession().then(res => setUser(res.data.session?.user ?? null))
return () => s?.subscription?.unsubscribe()
}, [])


async function signOut() {
await supabase.auth.signOut()
setUser(null)
}


return (
<nav className="bg-white shadow-sm">
<div className="container flex items-center justify-between py-3">
<div className="flex items-center gap-4">
<Link href="/" className="font-semibold">{process.env.NEXT_PUBLIC_APP_NAME || 'StudentMS'}</Link>
<Link href="/dashboard" className="text-sm text-gray-600">Dashboard</Link>
<Link href="/students" className="text-sm text-gray-600">Students</Link>
</div>
<div>
{user ? (
<div className="flex items-center gap-3">
<span className="text-sm">{user.email}</span>
<button onClick={signOut} className="px-3 py-1 bg-red-500 text-white rounded">Sign out</button>
</div>
) : (
<Link href="/login" className="px-3 py-1 bg-blue-600 text-white rounded">Sign in</Link>
)}
</div>
</div>
</nav>
)
}