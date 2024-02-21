import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
  import { useState } from "react";
  import { Link , useNavigate} from "react-router-dom";
  import { useDispatch, useSelector} from 'react-redux';
  import { signInStart, signInSucess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
  
  export default function Signin() {
    const [formData, setFormData] = useState({});
  const{loading, error: errorMessage} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const handleChange = (e) => {
      console.log(e.target.value);
      setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!formData.email || !formData.password) {
        return dispatch(signInFailure('please fill all fields'))
      }
      try {
        dispatch(signInStart());
        const res = await fetch("/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.sucess === false) {
         dispatch(signInFailure(data.message));
        }
      
        if(res.ok) {
          dispatch(signInSucess(data));
          navigate('/');
        }
      } catch (error) {
        setErrorMessage(error.message);
        setloading(false);
      }
    };
    return (
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <Link
              to="/"
              className=" text-sm sm:text-xl font-bold dark:text-white"
            >
              <span className="px-2 py-1 text-4xl bg-gradient-to-r from-indigo-500 via-purple-700  to-pink-500 rounded-lg text-white">
                Balaj's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5">
              this is a demo project. you can signin with your email and password
              or with google
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
             
              <div>
                <Label value="Your Email" />
                <TextInput
                  type="email"
                  placeholder="name@email.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Your Password" />
                <TextInput
                  type="password"
                  placeholder=" Enter password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">loading...</span>
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span> Dont have an account?</span>
              <Link to="/sign-up" className="text-blue-500">
                Sign In
              </Link>
            </div>
  
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  
  
  
  
  
  
  
 