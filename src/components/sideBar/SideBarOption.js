import React from 'react';
import 'tachyons';

const SideBarOption=({option, onContentChange})=>{
    return(
        <div className='' onClick={onContentChange}>
            <p className="option" id={option}>{option.toUpperCase()}</p>
        </div>
    )
}

export default SideBarOption;