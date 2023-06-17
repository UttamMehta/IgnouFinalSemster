import React from 'react';

function Kyboard({arr,i}) {
    return (
        <div className="keybord">
              <div className="row row2" >
             { arr.map((el, ind) => {
                let colors=i===ind?"red":"";
            return <button style={{backgroundColor:colors}}> 
                {el}
            </button>
             })}
        </div>

        </div>
    );
}

export default Kyboard;