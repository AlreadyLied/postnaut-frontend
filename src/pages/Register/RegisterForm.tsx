import { useState } from 'react'
import useNavigation from '@/hooks/useNavigation'

const RegisterForm = () => {
  const { goToLogin } = useNavigation()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      // throw error codes

      const data = await response.json()
      console.log("Register:", data)
    } catch (error) {
      console.log("Error:", error)
    }
    
    goToLogin()
  }

  return (
    <div className="flex justify-center items-center mt-24">
      <form onSubmit={handleSubmit} className="p-6 w-96 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Registration</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="4-16 characters long"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
