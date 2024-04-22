import { useQueryClient, useMutation } from "react-query";
import { useAppContext } from "../context/AppContext";
import * as apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

function Signout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      showToast({ message: "Sign out Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={handleClick}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100 "
    >
      Sign Out
    </button>
  );
}

export default Signout;
