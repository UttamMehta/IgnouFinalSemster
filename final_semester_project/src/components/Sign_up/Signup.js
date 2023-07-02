/** @format */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    bloodgroup: "",
  });

  const [tick, setTick] = useState(false);

  const [data, setData] = useState([]);
  // console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();

    const { name, email, password, country, bloodgroup } = inpval;
    await addUser({ name, email, password });
  };

  async function addUser(data) {
    try {
      let req = await fetch(``, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      let res = await req.json();
      // console.log(res);
      if (res.error)
        toast.error(res.error, {
          position: "top-center",
        });
      else if (res.message) {
        // toast.success(res.message, {
        //   position: "top-center",
        // });
        toast.success(res.message, {
          position: "top-center",
        });
        alert("Signup Successfull");
        history("/login");
        // setLocation(true);
      }
      // alert("Signup Successfull");
    } catch (e) {
      toast.error(e, {
        position: "top-center",
      });
    }
  }

  function check(e) {
    let { value, checked } = e.target;
    checked ? setTick(true) : setTick(false);
  }

  return (
    <>
      <section>
        <div className="infos">
          <Form id="formms">
            <Form.Group>
              <h2 id="joinn">Registration Form</h2>

              <hr />
            </Form.Group>

            <Form.Group>
              <label id="labelss" for="name">
                Full Name
              </label>
              <br></br>
              <input
                id="name"
                type="text"
                name="name"
                onChange={getdata}
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group>
              <label id="labelss" for="mobile">
                Email
              </label>
              <br></br>
              <select id="sel" onChange={getdata}>
                <option>+91(IND)</option>
                <option>+65(SGP)</option>
                <option>+63(PHL)</option>
                <option>+60(MYS)</option>
                <option>+62(IDN)</option>
                <option>+55(BRA)</option>
                <option>+52(MEX)</option>
                <option>+54(ARG)</option>
                <option>+56(CHL)</option>
                <option>+84(VNM)</option>
                <option>+971(UAE)</option>
              </select>
              <input
                id="mobiles"
                type="email"
                name="email"
                onChange={getdata}
                placeholder="Email"
                style={{ width: "100%" }}
              />
            </Form.Group>

            <Form.Group>
              <label id="labelss" for="passcode">
                Create Password
              </label>
              <br></br>
              <input
                id="passcode"
                type="password"
                name="password"
                onChange={getdata}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group>
              <label id="labelss" for="passcode">
                Enter BloodGroup
              </label>
              <br></br>
              <input
                id="bloodgroup"
                type="text"
                name="bloodgroup"
                onChange={getdata}
                placeholder="Enter BloodGroup"
              />
            </Form.Group>

            <Form.Group>
              <div id="checking">
                <input id="checkboxx" type="checkbox" onChange={check} />
                <label id="paras">
                  Receive relevant offers and promotional communication from
                  Practo
                </label>
              </div>
            </Form.Group>

            <Button
              disabled={
                tick && inpval.name && inpval.email && inpval.password
                  ? false
                  : true
              }
              variant="primary"
              id="submit"
              onClick={addData}
              type="submit"
            >
              Register
            </Button>
            <p id="parags">
              Already Have an Account?{" "}
              <span>
                <NavLink id="linkss" to="/Login">
                  Login
                </NavLink>
              </span>{" "}
            </p>
          </Form>

          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Signup;
