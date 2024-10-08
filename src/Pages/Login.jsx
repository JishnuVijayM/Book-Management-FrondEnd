import LoginImage from "../assets/auth/Login.svg";

const Login = () => {
    return (
        <div
            style={{ backgroundImage: `url(${LoginImage})` }}
            className="flex justify-end items-center min-h-screen bg-cover bg-center w-auto"
        >
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                <form className="space-y-6" action="#">
                    <h5 className="text-center font-serif text-2xl font-bold text-gray-900">
                        Sign in
                    </h5>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                        Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500">
                        Not registered?{" "}
                        <a href="#" className="text-blue-700 hover:underline">
                            Create account
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
