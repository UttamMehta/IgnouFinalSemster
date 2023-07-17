/** @format */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    father_name: "",
    mother_name: "",
    dob: "",
    blood_group: "",
    address: { state: "", pin: "", city: "", nation: "" },
    gender: "",
    image: "",
    signature: "",
    addhaar_no: 0,
    file: [],
  });

  const [tick, setTick] = useState(false);

  const [data, setData] = useState([]);
  // console.log(inpval);

  const getdata = async (e) => {
    const { value, name } = e.target;

    // console.log(value,name);
    console.log(e);
    console.log(e.target.files[0]);

    if (name === "file") {
      let z = await convertBase64(e.target.files[0]);
      console.log(z);
      // setInpval((prev) => {
      //   let file = [];
      //   file = prev.file;
      //   file.push(z);
      //   return { ...prev, file };
      // });
    } else if (
      name === "state" ||
      name === "pin" ||
      name === "city" ||
      name === "nation"
    ) {
      setInpval((prev) => {
        let address = {};
        address = prev.address;
        address = { ...address, [name]: value };
        return { ...inpval, address };
      });
    } else
      setInpval(() => {
        return {
          ...inpval,
          [name]: value,
        };
      });
  };

  console.log(inpval);
  const addData = async (e) => {
    e.preventDefault();

    const {
      first_name,
      middle_name,
      last_name,
      email,
      password,
      father_name,
      mother_name,
      dob,
      blood_group,
      address = {},
      gender,
      image,
      signature,
      addhaar_no,
      file = [],
    } = inpval;
    await addUser({
      first_name,
      middle_name,
      last_name,
      email,
      password,
      father_name,
      mother_name,
      dob,
      blood_group,
      address,
      gender,
      image,
      signature,
      addhaar_no,
      file,
    });
  };

  function convertBase64(convert) {
    let reader = new FileReader();
    var z1 = "";
    reader.readAsDataURL(convert);
    reader.onload = () => {
      z1 = reader.result;
    };
    return z1;
  }

  console.log();

  async function addUser(data = {}) {
    try {
      let req = await axios.post(process.env.SIGNUP_SEVER, {
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(req);
      // let res = await req.json();
      // console.log(res);
      // if (res.error)
      //   toast.error(res.error, {
      //     position: "top-center",
      //   });
      // else if (res.message) {
      //   // toast.success(res.message, {
      //   //   position: "top-center",
      //   // });
      //   toast.success(res.message, {
      //     position: "top-center",
      //   });
      //   alert("Signup Successfull");
      //   history("/login");
      //   // setLocation(true);
      // }
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
          <Form id="forms">
            <Form.Group>
              <h2 id="joinn">Registration Form</h2>

              <hr />
            </Form.Group>

            <Form.Group>
              <label id="labelss" for="name">
                First Name
              </label>
              <br></br>
              <input
                id="first_name"
                type="text"
                name="first_name"
                onChange={getdata}
                placeholder="Enter First Name"
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <label id="labelss" for="name">
                Middle Name
              </label>
              <br></br>
              <input
                id="middle_name"
                type="text"
                name="middle_name"
                onChange={getdata}
                placeholder="Enter Middle Name"
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <label id="labelss" for="name">
                Last Name
              </label>
              <br></br>
              <input
                id="last_name"
                type="text"
                name="last_name"
                onChange={getdata}
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <label id="labelss" for="mobile">
                Email
              </label>
              {/* <br></br>
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
              </select> */}
              <input
                id="mobiles"
                type="email"
                name="email"
                onChange={getdata}
                placeholder="Enter Your Email"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <br></br>

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
                placeholder="Enter Password"
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <label id="labelss" for="father">
                Father Name
              </label>
              <br></br>
              <input
                id="passcode"
                type="text"
                name="father_name"
                onChange={getdata}
                placeholder="Enter Father Name"
              />
            </Form.Group>

            <br></br>
            <Form.Group>
              <label id="labelss" for="father">
                Mother Name
              </label>
              <br></br>
              <input
                id="passcode"
                type="text"
                name="mother_name"
                onChange={getdata}
                placeholder="Enter Mother Name"
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <label id="labelss" for="dob">
                Date Of Birth
              </label>
              <br></br>
              <input id="passcode" type="date" name="dob" onChange={getdata} />
            </Form.Group>
            <br></br>
            <Form.Group>
              <label id="labelss" for="passcode">
                Enter Blood Group
              </label>
              <br></br>
              <input
                id="bloodgroup"
                type="text"
                name="blood_group"
                onChange={getdata}
                placeholder="Enter Blood Group"
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <label id="labelss" for="passcode">
                Enter City
              </label>
              <br></br>
              <input
                id="bloodgroup"
                type="text"
                name="city"
                onChange={getdata}
                placeholder="Enter City"
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <label id="labelss" for="passcode">
                Enter Pin
              </label>
              <br></br>
              <input
                id="bloodgroup"
                type="number"
                name="pin"
                onChange={getdata}
                placeholder="Enter Six Digit Pin Code"
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <label id="labelss" for="passcode">
                Select state
              </label>
              <br></br>
              <select onChange={getdata} name="state">
                <option value=""> state</option>
                <option value="Odisha">Odisha</option>
                <option value="Bihar">Bihar</option>
              </select>
            </Form.Group>
            <br></br>

            <Form.Group>
              <label id="labelss" for="passcode">
                Select Country
              </label>
              <br></br>
              <select onChange={getdata} name="nation">
                <option value=""> state</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
              </select>
            </Form.Group>
            <br></br>

            <Form.Group>
              <label id="labelss" for="passcode">
                Enter Addhaar Number
              </label>
              <br></br>
              <input
                id="bloodgroup"
                type="number"
                name="addhaar_no"
                onChange={getdata}
                placeholder="Enter Addhaar Number"
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <label id="labelss" for="passcode">
                Select Gender
              </label>
              <br></br>
              <select onChange={getdata} name="nation">
                <option value=""> state</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </Form.Group>
            <br></br>

            <Form.Group>
              <lable>Attach Your Image</lable>
              <br></br>
              <input
                accept="image/"
                type="file"
                name="image"
                onChange={getdata}
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <lable>Attach Your Signature</lable>
              <br></br>
              <input
                accept="image/"
                type="file"
                name="signature"
                onChange={getdata}
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <lable>Supportive Documents Images</lable>
              <br></br>
              <input
                accept="image/"
                type="file"
                name="file"
                onChange={getdata}
              />
              <input
                accept="image/"
                type="file"
                name="file"
                onChange={getdata}
              />
              <input
                accept="image/"
                type="file"
                name="file"
                onChange={getdata}
              />
            </Form.Group>
            <br></br>

            <Form.Group>
              <div id="checking">
                <input id="checkboxx" type="checkbox" onChange={check} />
                <label id="paras">
                  Above details are correct of my knowledge
                </label>
              </div>
            </Form.Group>
            <br></br>

            <div>
              {inpval.file.length !== 0
                ? inpval.file.map((el, i) => {
                    <img alt="support_Documents" src={el} />;
                  })
                : ""}
            </div>

            <Button
              disabled={
                tick &&
                inpval.name &&
                inpval.email &&
                inpval.password &&
                inpval.addhaar_no &&
                inpval.file.length !== 0 &&
                inpval.signature
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
              Already Register?{" "}
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
