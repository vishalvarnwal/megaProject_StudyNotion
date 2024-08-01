import toast from "react-hot-toast";
import { apiConnector } from "../apiConnectors";
import { endpoints } from "../apis";
import { setLoading, setToken } from "../../slices/authSlice";
import { resetCart } from "../../slices/cartSlice";
import { setUser } from "../../slices/profileSlice";

const {
  RESETPASSWORD_API,
  RESETPASSTOKEN_API,
  SIGNUP_API,
  SENDOTP_API,
  LOGIN_API,
} = endpoints;

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data);

      if (!response.data?.success) {
        toast.error(response.data.message);
        // throw new Error(response.data.message);
        dispatch(setLoading(false));
        toast.dismiss(toastId);
        return;
      }

      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login({ email, password }, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      if (!response.data.success) {
        throw new Error("unable to login");
      }
      if (response.data?.newUser) {
        toast.dismiss(toastId);
        toast.error("User is not registered, Please create an account.");
        navigate("/signup");
        dispatch(setLoading(false));
        return;
      }
      dispatch(setToken(response.data?.token));
      toast.success("Login successful!");
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
      dispatch(setUser({ ...response.data.user, image: userImage }));
      localStorage.setItem("token", JSON.stringify(response.data?.token));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...response.data.user, image: userImage })
      );
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("login api error", error);
      toast.error("Please enter correct credentials");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}
export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });
      console.log("reset password log", response);
      if (!response.data?.success) {
        throw new Error(response.data?.message);
      }
      toast.success("Reset email sent");
      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD TOKEN ERROR");
      toast.error("Please enter correct details");
    }
    dispatch(setLoading(false));
  };
}

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      if (!response.data?.success) {
        throw new Error("Unable to reset password");
      }
      toast.success("password has been reset successfully.");
      navigate("/login");
    } catch (error) {
      toast.error("unable to reset password", error);
    }
    dispatch(setLoading(false));
  };
}

export function logout(navigate) {
  return async (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("user logged out successfully!");
    navigate("/");
  };
}
