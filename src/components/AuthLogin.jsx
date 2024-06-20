import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import useAuthStore from '../services/authStore';

function AuthLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signIn = useAuthStore(state => state.signIn);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signIn(username, password);
      navigate('/table');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <section className="relative py-10 h-screen bg-gray-900 sm:py-16 lg:py-24 font-mainFont">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://img.freepik.com/free-vector/job-search-composition-with-indoor-scenery-character-female-applicant-sitting-front-employers-illustration_1284-65483.jpg?t=st=1718875880~exp=1718879480~hmac=24b5e4887065f8d7a23f8f8b65baa004a77dd6f56d48d0d23f516454418718bc&w=996"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gray-900/20" />
      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div className="overflow-hidden bg-white bg-opacity-80 rounded-md shadow-md">
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">TalentVerify Login</h2>
            </div>
            <form onSubmit={handleLogin} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="username" className="text-base font-medium text-gray-900">Username</label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="text-base font-medium text-gray-900">Password</label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-950 border border-transparent rounded-md focus:outline-none hover:bg-blue-900"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthLogin;