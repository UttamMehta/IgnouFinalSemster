export default function reduxThunkActionCreator(url) {
    return function reduxThunkAction(dispatch, getState) {
      if (getState().thumbnails.length === 0) {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            dispatch({
              type: "thumbnails",
              data,
            });
          });
      }
    };
  }