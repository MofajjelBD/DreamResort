import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterFood from "../../assets/registration.jpg";
import { useContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, db, auth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoadingRegister, setIsLoadingRegister] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleImageLoad = () => {
    setIsLoadingRegister(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("url");
    const email = form.get("email");
    const password = form.get("password");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    setError("");
    setSuccess("");
    if (!passwordRegex.test(password)) {
      const pError = (
        <p className="text-sm text-red-700">
          Password must contain at least one uppercase letter, one lowercase
          letter, and be at least 6 characters long.
        </p>
      );
      setError(pError);
      return;
    }

    // Create user with email and password
    createUser(auth, email, password)
      .then((result) => {
        const user = result.user;

        // Update profile with name and photoURL
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          // Save additional user info to Firestore
          return setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            photoURL: photoURL,
            createdAt: new Date(),
          });
        });
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration successful",
          showConfirmButton: false,
          timer: 2500,
        });
        // navigate after Registration
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          const pAlready = (
            <p className="text-sm text-red-900">Already this email exit.</p>
          );
          setError(pAlready);
          return;
        } else {
          setError("Registration error: " + error.message);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Registration | Freshy Recipe Restaurant</title>
      </Helmet>
      <div className="p-4">
        <section className="min-h-screen-minus-244 flex box-border justify-center items-center">
          <div className="bg-slate-400 rounded-2xl flex max-w-3xl lg:w-[768px] p-5 items-center">
            <div className="md:w-1/2 px-6">
              <h2 className="font-bold text-3xl text-[#002D74]">
                Registration
              </h2>
              <p className="text-sm mt-4 text-[#002D74]">
                Welcome to easy registration here.
              </p>
              <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div className="relative mt-6">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="url"
                    name="url"
                    placeholder="Url"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-link-45deg absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    className="p-2 rounded-xl border w-full"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                      </svg>
                    )}
                  </span>
                </div>
                {error}
                {success}
                <button
                  className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                  type="submit"
                >
                  Registration
                </button>
              </form>
              <div className="border-t border-gray-500 mt-6 pt-4 h-10 text-sm flex justify-between items-center container-mr">
                <p className="md:mr-0 ">If you have an account..</p>
                <Link
                  to="/login"
                  className="hover:border register text-white bg-blue-900 hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-blue-950 font-semibold duration-300"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="md:block hidden w-1/2">
              {isLoadingRegister && (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-900"></div>
                </div>
              )}
              <img
                className={`rounded-2xl max-h-[1600px] ${
                  isLoadingRegister ? "hidden" : "block"
                }`}
                src={RegisterFood}
                onLoad={handleImageLoad} // Set loading to false when the image is loaded
                alt="Login Food" // Add alt attribute for accessibility
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
