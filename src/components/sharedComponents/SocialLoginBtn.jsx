import { useLocation, useNavigate } from "react-router-dom";
import useAuthInfo from "../../hooks/useAuthInfo";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
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
    <div className="flex  gap-2">
      <button onClick={() => handleLogin("google")} className="custom-btn">
        <FcGoogle />
        Google
      </button>
      <button onClick={() => handleLogin("github")} className="custom-btn">
        <AiFillGithub />
        Github
      </button>
    </div>
  );
};

export default SocialLoginBtn;
