import useAuthInfo from "../../hooks/useAuthInfo";

const SocialLoginBtn = () => {
  const { signInWithGoogle } = useAuthInfo();

  const handleLogin = (provider) => {
    if (provider === "google") {
      signInWithGoogle()
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="flex gap-5">
      <button
        onClick={() => handleLogin("google")}
        className="btn btn-secondary flex-1"
      >
        Google
      </button>
      <button className="btn bg-gray-600 text-white hover:brightness-95 hover:bg-gray-700 border-none flex-1">
        Github
      </button>
    </div>
  );
};

export default SocialLoginBtn;
