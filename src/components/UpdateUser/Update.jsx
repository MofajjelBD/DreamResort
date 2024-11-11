import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useContext(AuthContext);

  // Local state for editable fields
  const [userName, setUserName] = useState(user.displayName || "");
  const [userPhotoURL, setUserPhotoURL] = useState(user.photoURL || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Update profile in Firebase
    try {
      await updateProfile(user, {
        displayName: userName,
        photoURL: userPhotoURL,
      });

      // Display success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile updated successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to update profile",
        text: error.message,
        showConfirmButton: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Update profile | Freshy Recipe Restaurant</title>
      </Helmet>
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-lg py-6 px-4">
        <div className="grid lg:grid-cols-6 items-center justify-center">
          <div className="lg:col-start-2 lg:col-span-4 bg-slate-400 rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
            <h2 className="text-3xl text-white text-center font-bold mb-6">
              Update your Profile
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="max-w-md mx-auto space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Name"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                    required
                  />
                  {/* SVG icon */}
                </div>

                <div className="relative">
                  <input
                    type="url"
                    name="url"
                    value={userPhotoURL}
                    onChange={(e) => setUserPhotoURL(e.target.value)}
                    placeholder="Photo URL"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                    required
                  />
                  {/* SVG icon */}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Email"
                    className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                    disabled
                  />
                  {/* SVG icon */}
                </div>

                <button
                  type="submit"
                  className={`bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium w-full ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="currentColor"
                    className="mr-2 inline"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  {isLoading ? "Updating..." : "Update Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
