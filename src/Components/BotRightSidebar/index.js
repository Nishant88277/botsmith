import React, { useState } from "react";
import Select from "react-select";

// style
import BotRightStyle from "./style";

// Image
import Close from '../../Assets/images/close-icon.svg'

function BotRightSidebar(props) {
    const options = [{ value: "localhost", label: "localhost" }];
    const [URL, setURL] = useState('')
    const [error, setError] = useState('')
    const [showOutputOptions, setOutputOptions] = useState(false)
    const [event , setEvent] = useState(null)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [published, setPublished] = useState('')

    window.onbeforeunload = (e) => {
        sessionStorage.clear()
    }


    function handleValidate(event) {
        event.preventDefault();
        fetch(`http://192.168.5.32:9006/api/v1/m-aa/rss/sample?url=${URL}`)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.entries){
                        var existing = JSON.parse(sessionStorage.getItem('output'));
                        existing = existing ? existing : [];
                        existing.push(...result.entries);
                        sessionStorage.setItem('output', JSON.stringify(existing));
                        props.closeSidebar();
                    }else{
                        setError(result.detail);
                    }
                }
            )
    }

    const map = (e, type) => {
        setOutputOptions (true)
        setEvent(type)
    }

    const AddInput = (type) => {
        if(event === 'title'){
            setTitle(type)
        }
        if(event === 'description'){
            setDescription(type)
        }
        if(event === 'link'){
            setLink(type)
        }
        if(event === 'published'){
            setPublished(type)
        }
    }

  return (
    <div className="BotRightSidebar position-fixed pt-5">
      <h5 className="theme-text header text-capitalize pt-4 pl-3 pr-3 pb-3">{props.node}</h5>
        {
            props.node === "select" &&
            <form className="pl-3 pr-3">
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Connection</label>
                    <div className="row m-0">
                        <div className="col-9 pl-0">
                            <Select options={options} />
                        </div>
                        <div className="col-3 pl-0 pr-0 w-100">
                            <button className="btn btn-outline-primary w-100">Add</button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Table</label>
                    <Select options={options} />
                </div>
                <div className="mt-4">
                    <div className="d-flex justify-content-between">
                        <label className="theme-text font-weight-normal">ID</label>
                        <span className="charColor">Varchar(40)</span>
                    </div>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">
                        Choose List of Text
                    </label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <hr className="mt-4 mb-4" />
                <button className="btn sidebarButton text-white w-50 float-right" >
                    Validate
                </button>
            </form>
        }
        {
            props.node === "Watch" &&
            <form
                onSubmit={(e) => handleValidate(e)}
                className="pl-3 pr-3"
            >
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">URL</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                        onChange={(e) => { setURL(e.target.value) }}
                        value={URL}
                    />
                    <p className='mb-0 mt-2 text-danger'>{error}</p>
                </div>
                <hr className="mt-4 mb-4" />
                <button disabled={!URL} className="btn sidebarButton text-white w-50 float-right" onClick={(e) => handleValidate(e)} >
                    Validate
                </button>
            </form>
        }
        {
            props.node === "Decision" &&
            <form className="pl-3 pr-3">
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">
                        Choose List of Text
                    </label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className='mt-4'>
                    <label className="theme-text font-weight-normal">
                        Choose Data
                    </label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <hr className="mt-4 mb-4" />
                <button className="btn sidebarButton text-white w-50 float-right" >
                    Validate
                </button>
            </form>
        }
        {
            props.node === "Save News" &&
            <form className="pl-3 pr-3 position-relative">
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Title</label>
                    <div
                        className="d-block w-100 sideInput sideInputDiv theme-text"
                        onClick={(e) =>map(e, 'title')}
                    >
                        {title && <button className='btn-warning pointer-event btn pt-0 pb-0'>{title}</button>}
                    </div>
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Description</label>
                    <div
                        className="d-block w-100 sideInput sideInputDiv theme-text"
                        onClick={(e) =>map(e, 'description')}
                    >
                        {description && <button className='btn-warning btn pt-0 pb-0'>{description}</button>}
                    </div>
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Link</label>
                    <div
                        className="d-block w-100 sideInput sideInputDiv theme-text"
                        onClick={(e) =>map(e, 'link')}
                    >
                        {link && <button className='btn-warning btn pt-0 pb-0'>{link}</button>}
                    </div>
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Published DateTime</label>
                    <div
                        className="d-block w-100 sideInput sideInputDiv theme-text"
                        onClick={(e) =>map(e, 'published')}
                    >
                        {published && <button className='btn-warning btn pt-0 pb-0'>{published}</button>}
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
                <button className="btn sidebarButton text-white w-50 float-right">
                    Validate
                </button>

                { showOutputOptions && <OutputOptions AddInput={(type) => AddInput(type)} close={() => setOutputOptions(false)}/>}

            </form>
        }
        {
            props.node === "Publish News to Portal" &&
            <form className="pl-3 pr-3">
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Title</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Description</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Link</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Published DateTime</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <hr className="mt-4 mb-4" />
                <button className="btn sidebarButton text-white w-50 float-right" >
                    Validate
                </button>
            </form>
        }
        {
            props.node === "Save Matched News" &&
            <form className="pl-3 pr-3">
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">Published DateTime</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">List of Matched Watchwords</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">List of Matched Assets</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label className="theme-text font-weight-normal">source</label>
                    <input
                        className="d-block w-100 sideInput theme-text pl-2"
                        type="text"
                    />
                </div>
                <hr className="mt-4 mb-4" />
                <button className="btn sidebarButton text-white w-50 float-right" >
                    Validate
                </button>
            </form>
        }
      <BotRightStyle />
    </div>
  );
}

export default BotRightSidebar;

// modal to show the "output" for save news fields
function OutputOptions(props) {
    const AddInput = (e, key, props) => {
        e.preventDefault();
        props.AddInput(key);
    }

    const closeModal = (props) => {
        props.close()
    }

    const objs = sessionStorage.getItem('output') ? JSON.parse(sessionStorage.getItem('output')) : [] ;
    const responses = [];
    objs.map((item, index) => {
        const subitems = [];
        for (const key in item) {
            subitems.push(
                {
                    key: item[key]['displayName'],
                    value: item[key]['value']
                },
            )
        }
        responses.push({
            position: index,
            data: subitems
        });
    })

    return (
        <div className="modal-dialog-centered OutputStyle d-block">
            <div className='modalHead'>
                Select Data
                <img className='cursor-pointer m-2' onClick={() => closeModal(props)} src={Close} alt='Close' />
            </div>
            <div className='list-wrap'>
                {
                    responses.map((topItem, topIndex) => {
                        return <div key={topIndex} className='d-flex listStyle'>
                            <ul className='list-unstyled p-0 m-0 w-100'>
                                <button className='mb-3 modalHeadButton'>
                                    {topIndex + 1} - RSS Feeds - Watch
                                </button>
                                {
                                    topItem.data.map((item, index) => {
                                        return <li className='d-flex align-items-center mb-2' key={index}>
                                            <button onClick={(e) => AddInput(e, item.key, props)} className='mb-0 modalButton'>{item.key}</button>
                                            <p className='mb-0 pl-2 col-7 text-truncate'>{item.value}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    })
                }
            </div>
        </div>
    )
}