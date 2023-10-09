import { useLocation, useNavigate } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const SocialLoginBtn = () => {
  const { signInWithGoogle, signInWithGithub } = useAuthInfo();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (provider) => {
    if (provider === "google") {
      signInWithGoogle()
        .then(() => {
          navigate(location.state ? location.state : "/");
          toast.success("Login successfully");
        })
        .catch((err) => {
          const errorCode = err.code;
          const errMessage = errorCode.replace("auth/", "");
          toast.error(errMessage);
        });
    }

    if (provider === "github") {
      signInWithGithub()
        .then(() => {
          navigate(location.state ? location.state : "/");
          toast.success("Login successfully");
        })
        .catch((err) => {
          const errorCode = err.code;
          const errMessage = errorCode.replace("auth/", "");
          toast.error(errMessage);
        });
    }
  };

  return (
    <div className="flex gap-5">
      <button
        onClick={() => handleLogin("google")}
        className="btn btn-secondary flex-1"
      >
        <AiFillGoogleCircle />
        Google
      </button>
      <button
        onClick={() => handleLogin("github")}
        className="btn bg-gray-600 text-white hover:brightness-95 hover:bg-gray-700 border-none flex-1"
      >
        <AiFillGithub />
        Github
      </button>
    </div>
  );
};

export default SocialLoginBtn;
