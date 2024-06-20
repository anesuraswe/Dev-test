import { Link } from "react-router-dom";


function AuthLogin() {
  

  return (
    <section className="relative py-10 h-screen bg-gray-900 sm:py-16 lg:py-24 font-mainFont">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://img.freepik.com/free-vector/flat-graduate-students-mantle-cap-holding-university-diploma-paper-scroll-happy-young-people-academic-gown-with-bachelor-degree-celebrating-graduation-from-college-university-high-school_88138-929.jpg?t=st=1718276414~exp=1718280014~hmac=c4efa23d179e9996f7357a3e80836b8f6f165a68bec61ad57609606ddb2f3242&w=1380"
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
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter username"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <Link
                    type="submit"
                    to='/table'
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-950 border border-transparent rounded-md focus:outline-none hover:bg-blue-900"
                  >
                    Log in
                  </Link>
                </div>
                <div>
                  
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