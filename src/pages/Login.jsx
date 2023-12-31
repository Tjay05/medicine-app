// Picture Imports
import medCare from "../assets/images/undraw_medical_care_movn.png";
import logo from "../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { RingLoader } from "react-spinners";

const Login = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://nvmri.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });
      const data = await response.json();
      setData(data);
      if (response.ok) {
        setData(data);
        tokenValidation();
        setIsLoading(false);
      } else if (response.status === 401) {
        setData(data);
        setIsLoading(false);
      } else if (response.status === 404) {
        setData(data);
        setIsLoading(false);
      } else {
        setData("Could not login user");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Topins' Error:", error);
      setIsLoading(false);
    }
  };

  const { decodedToken } = useJwt(data);

  useEffect(() => {
    if (decodedToken) {
      tokenValidation();
    }
  }, [decodedToken]);

  const tokenValidation = () => {
    console.log(decodedToken);
    if (decodedToken.role === "admin") {
      history("/Home");
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: data,
        })
      );
    } else {
      history("/Sales");
      localStorage.setItem(
        "cashier",
        JSON.stringify({
          token: data,
        })
      );
    }
  };

  return (
    <>
      <main className="loginMain">
        <aside>
          <img src={medCare} alt="Effortless" />
          <p>
            Effortlessly manage medicine inventory - track, organize, and stay
            informed
          </p>
        </aside>
        <section>
          <nav>
            <img src={logo} alt="Logo" />
            <p>Medicine App</p>
          </nav>
          <div className="loginBody">
            <h1>Log in</h1>
            <p>Please input your credentials to continue using this app</p>
            <form>
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID No."
                type="text"
              />
              <p
                style={
                  data === decodedToken
                    ? { display: "none" }
                    : { display: "inline-block" }
                }
                className="err-mssg"
              >
                {data}
              </p>
              {!isLoading && (
                <button onClick={handleLogin} type="submit">
                  Continue
                </button>
              )}
              {isLoading && (
                <button style={{ cursor: "not-allowed" }} disabled>
                  <RingLoader color="white" size={27} loading={isLoading} />
                </button>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
