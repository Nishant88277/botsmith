import React, { useEffect, useState } from "react";
import Select from "react-select";

// style
import BotRightStyle from "./style";

function BotRightSidebar(props) {
  const options = [{ value: "localhost", label: "localhost" }];

  const SetOutPut = (result) => {
    props.setOutput(result)
  }

  return (
    <div className="BotRightSidebar position-fixed pt-5">
      <h5 className="theme-text header text-capitalize pt-4 pl-3 pr-3 pb-3">{props.node}</h5>
      <SwitchComponents nodeName={props.node} output={props.output} setOutPut={SetOutPut} options={options} />
      <BotRightStyle />
    </div>
  );
}

export default BotRightSidebar;

function SwitchComponents({ nodeName, options }) {
  switch (nodeName) {
    case "select":
      return < SelectComponent options={options} />



    case "Watch":
      return <Watch options={options} />


    case "Decision":
      return <Decision options={options} />



    case "Save News":
      return <SaveNews />



    case "Publish News to Portal":
      return <PublishNewsToPortal options={options} />



    case "Save Matched News":
      return <SaveMatchedNews options={options} />


    default:
      return (null)
  }
}

function SelectComponent(options) {
  return (
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
  )
}

function Watch(props) {

  const [URL, setURL] = useState('')

  function handleValidate(event) {
    event.preventDefault()
    fetch("http://192.168.5.32:9006/api/v1/m-aa/rss/sample?url=https://ft.com/?format=rss")
      .then(res => res.json())
      .then(
        (result) => {

          var existing = JSON.parse(localStorage.getItem('output'));
          existing = existing ? existing : [];
          existing.push(...result.entries);
          console.log("result entries", result.entries)
          localStorage.setItem('output', JSON.stringify(existing));



          // localStorage.setItem('output', JSON.stringify(result.entries))


        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
    <>
      <form className="pl-3 pr-3">
        <div className="mt-4">
          <label className="theme-text font-weight-normal">URL</label>
          <input
            className="d-block w-100 sideInput theme-text pl-2"
            type="text"
            onChange={(e) => { setURL(e.target.value) }}
            value={URL}
          />
        </div>
        <hr className="mt-4 mb-4" />
        <button className="btn sidebarButton text-white w-50 float-right" onClick={(e) => handleValidate(e)} >
          Validate
            </button>
      </form>
    </>
  )
}

function Decision(options) {
  return (
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
  )
}

function SaveNews(props) {


  const [showOutputOptions, setOutputOptions] = useState(false)
  const [event , setEvent] = useState(null)

  useEffect(() => {
    console.log('SaveNews', JSON.parse(localStorage.getItem('output')))


  }, props.output)


  return (
    <>
      <form className="pl-3 pr-3">
        <div className="mt-4">
          <label className="theme-text font-weight-normal">Title</label>
          <input
            className="d-block w-100 sideInput theme-text pl-2"
            type="text"
            onFocus = {(e)=> {
              setOutputOptions (true)
              setEvent(e)
            }}
          />
        </div>
        <div className="mt-4">
          <label className="theme-text font-weight-normal">Description</label>
          <input
            className="d-block w-100 sideInput theme-text pl-2"
            type="text"
            onFocus = {(e)=> {
              setOutputOptions (true)
              setEvent(e)
            }}
          />
        </div>
        <div className="mt-4">
          <label className="theme-text font-weight-normal">Link</label>
          <input
            className="d-block w-100 sideInput theme-text pl-2"
            type="text"
            onFocus = {(e)=> {
              setOutputOptions (true)
              setEvent(e)
            }}
          />
        </div>
        <div className="mt-4">
          <label className="theme-text font-weight-normal">Published DateTime</label>
          <input
            className="d-block w-100 sideInput theme-text pl-2"
            type="text"
            onFocus = {(e)=> {
              setOutputOptions (true)
              setEvent(e)
            }}
          />
        </div>
        <hr className="mt-4 mb-4" />
        <button className="btn sidebarButton text-white w-50 float-right">
          Validate
        </button>


      </form>

     { showOutputOptions && <OutputOptions event = {event}/>}
    </>
  )

}

function PublishNewsToPortal(options) {
  return (
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
  )
}

function SaveMatchedNews(options) {
  return (
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
  )
}



// modal to show the "output" for save news fields
function OutputOptions(props) {

  return (
    
      <div className="  modal-dialog-centered OutputStyle" >
        <ul className="pl-0 list-unstyled">
          <li className='cursor-pointer'>hello</li> {/* this works for some reason */}
          <button onClick = {()=>{
              props.event.target.value = "hello"
             }}>hello</button>
          {JSON.parse(localStorage.getItem('output')).forEach(function (item) {
            Object.entries(item).forEach(([key, value]) => {
              // console.log(value.displayName , value.value)//This works
             return( <li className='cursor-pointer'>{value.value}</li>) // this doesnt
            })
            return(<li className='cursor-pointer'>hello</li>) // this also doesnt work
          })}
        </ul>
      </div>

  )
}
