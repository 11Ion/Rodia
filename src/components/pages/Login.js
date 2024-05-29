import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

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
        // window.location.reload();
      }, 10);
    }

    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg, navigate]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Numele de utilizator a fost lăsat necompletat");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Parola a fost lăsată necompletată");
        }
        break;
      default:
        break;
    }
  };
  const loginSubmit = () => {
    if (user !== "" && pass !== "") {
      const url = "https://rodia1.000webhostapp.com/login.php";
      const headers = {
        "Accept": "application/json",
        "Content-type": "application/json"
      };
      const data = {
        user: user,
        pass: pass,
      };
  
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.result === "Nume de utilizator invalid!" || response.result === "Parolă Invalidă!") {
          setError(response.result);
        } else {
          setMsg(response.result);
          localStorage.setItem("login", true);
          localStorage.setItem('user', user);
          localStorage.setItem('typeUser', response.typeUser);
          if (response.typeUser === "admin") {
            window.location.href = "https://rodia1.000webhostapp.com/login_admin.php"; 
          } else {
            navigate("/");
          }
        }
      })
      .catch(err => {
        setError(err.message); 
      });
    } else {
      setError("Toate campurile sunt necesare!");
    }
  };
  
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Conectați-vă la contul dvs
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Nume de utilizator</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="placeholder:text-gray-400 focus:placeholder:text-gray-300 border sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                    placeholder="Nume de utilizator"
                    value={user}
                    onChange={(e) => handleInputChange(e, "user")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Parolă</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="placeholder:text-gray-400 focus:placeholder:text-gray-300 border sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff]"
                    value={pass}
                    onChange={(e) => handleInputChange(e, "pass")}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border rounded bg-transparent  border-gray-600  ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-300">Ține-mă minte</label>
                    </div>
                  </div>
                  <span className="text-sm font-medium hover:underline text-gray-300">Aţi uitat parola?</span>
                </div>
                <button
                  type="button"
                  onClick={loginSubmit}
                  className="w-full text-white hover:bg-white hover:text-black hover:transition font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#7D33FF]"
                  >
                  Conectare
                </button>
                <p className="text-sm font-light text-gray-400 flex justify-between">
                  Nu aveți încă un cont?
                  <Link  
                      className="font-medium hover:underline"
                      to="/register"
                  >
                      Inscrie-te
                  </Link>
                </p>
                {error !== "" ? (
                    <p className="text-center px-2 py-1 rounded-sm text-sm font-light border-b-2 border-[#ff002d]">
                      <span className="text-[#ff002d]">
                        <b>{error}</b>
                      </span>
                    </p>
                  ) : (
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
