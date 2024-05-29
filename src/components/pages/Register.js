import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let login = localStorage.getItem("login");

    if (login) {
      navigate("/");
    }

    let loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus) {
      setError(loginStatus);
      setTimeout(function () {
        localStorage.clear();
      }, 10);
    }
  }, [navigate]);

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => {
        setMsg("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  const registerSubmit = async (e) => {
    e.preventDefault();
    
    if (loading) return;

    if (!username || !password || !confirmPassword) {
      setError('Toate câmpurile sunt obligatorii!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Parolele nu se potrivesc.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://rodia1.000webhostapp.com/register.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password,
        })
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setMsg(data.message);
        localStorage.setItem('login', true);
        localStorage.setItem('user', username);
        localStorage.setItem('typeUser', "user");
        navigate('/');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('A apărut o eroare la înregistrare.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Creațivă contul dvs
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={registerSubmit}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="placeholder:text-gray-400 focus:placeholder:text-gray-300 border sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                    placeholder="Username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Email" className="block mb-2 text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="placeholder:text-gray-400 focus:placeholder:text-gray-300 border sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Parolă</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="placeholder:text-gray-400 focus:placeholder:text-gray-300 border sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">Repetă parola</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="placeholder:text-gray-400 focus:placeholder:text-gray-300 border sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white hover:bg-white hover:text-black hover:transition font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#7D33FF]"
                  disabled={loading}
                >
                  {loading ? "Înregistrare..." : "Înregistreazăte"}
                </button>
                <p className="text-sm font-light text-gray-400 flex justify-between">
                  Aveți deja un cont?
                  <Link className="font-medium hover:underline" to="/login">
                    Conectați-vă
                  </Link>
                </p>
                {error && (
                  <p className="text-center px-2 py-1 rounded-sm text-sm font-light border-b-2 border-[#ff002d]">
                    <span className="text-[#ff002d]">
                      <b>{error}</b>
                    </span>
                  </p>
                )}
                {msg && (
                  <p className="text-center px-2 py-1 rounded-sm text-sm font-light">
                    <span className="text-[#56e8a6]">
                      <b>{msg}</b>
                    </span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
