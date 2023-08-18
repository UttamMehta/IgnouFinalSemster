/** @format */
const initialState = {
  user: {},
  logindetail: {},
  isAuth: true,
  token:"",
  thumbnails:"",
  youtube:"",
};

//complete the reducer function
const reducer = (state = initialState, action) => {
 
  if(action.type==="thumbnails"){
    state.thumbnails=action.data;
  }
  if(action.type==="Adduser"){
    state.token=action.token;
    state.user=action.user;
  }
  if(action.type==="logout"){
    state.token="";
    state.user="";
  }
  if (action.type === 'logout') {
    state.isAuth = action.isAuth;
  }
  if(action.type==="")
  return { ...state };
};

export { reducer };
