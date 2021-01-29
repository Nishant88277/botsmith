import React from 'react';
import Select from 'react-select'

// style
import BotRightStyle from "./style"

function BotRightSidebar(props) {
    const options = [
        { value: 'localhost', label: 'localhost' },
    ]
    return (
        <div className="BotRightSidebar position-fixed pt-5">
            <h5 className="theme-text header pt-4 pl-3 pr-3 pb-3">{props.node}</h5>
            <form className="pl-3 pr-3">
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Connection</label>
                    <div className="row m-0">
                        <div className="col-9 pl-0">
                            <Select
                                options={options}
                            />
                        </div>
                        <div className="col-3 pl-0 pr-0 w-100">
                            <button className="btn btn-outline-primary w-100">Add</button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Table</label>
                    <Select
                        options={options}
                    />
                </div>
                <div className="mt-4">
                    <div className="d-flex justify-content-between">
                        <label className="theme-text font-weight-normal">ID</label>
                        <span className="charColor">Varchar(40)</span>
                    </div>
                    <input className="d-block w-100 sideInput theme-text pl-2" type='text'/>
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Choose List of Text</label>
                    <input className="d-block w-100 sideInput theme-text pl-2" type='text'/>
                </div>
                <hr className="mt-4 mb-4"/>
                <button className="btn sidebarButton text-white w-50 float-right">Validate</button>
            </form>
            <BotRightStyle/>
        </div>
    );
}

export default BotRightSidebar;