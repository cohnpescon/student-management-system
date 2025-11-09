import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/router'


export default function Login() {
const [email, setEmail] = useState('')
const [loading, setLoading] = useState(false)
const router = useRouter()


async function handleLogin(e) {
e.preventDefault()
setLoading(true)
const { error } = await supabase.auth.signInWithOtp({ email })
setLoading(false)
if (error) alert(error.message)
else alert('Magic link sent to ' + email)
}


return (
<div className="max-w-md mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-semibold mb-4">Sign in</h2>
<form onSubmit={handleLogin} className="flex flex-col gap-3">
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="your email" className="border p-2 rounded" />
<button className="px-4 py-2 bg-blue-600 text-white rounded" disabled={loading}>{loading ? 'Sending...' : 'Send magic link'}</button>
</form>
<p className="text-sm text-gray-500 mt-3">(The first time you sign in it will create an account.)</p>
</div>
)
}