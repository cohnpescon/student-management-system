import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'


export default function Dashboard() {
const [user, setUser] = useState(null)
useEffect(()=>{ supabase.auth.getSession().then(r=>setUser(r.data.session?.user ?? null)) }, [])


return (
<div>
<h2 className="text-2xl font-semibold">Dashboard</h2>
<p className="mt-2 text-gray-600">Welcome {user?.email ?? 'Guest'}. Use navigation to access modules.</p>
</div>
)
}