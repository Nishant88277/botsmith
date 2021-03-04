import React, { useEffect, useState } from "react";
import Select from "react-select";

// style
import BotRightStyle from "./style";

function BotRightSidebar(props) {
  const options = [{ value: "localhost", label: "localhost" }];



  const SetOutPut = (result) => {
    props.setOutput(result)
    console.log("data added")
  }

  useEffect(() => {

    console.log("BotRightSideBar Props")
    console.log(props)

    return () => {
      console.log("BotRightSideBar unmounts")
    }
  })

  return (
    <div className="BotRightSidebar position-fixed pt-5">
      <h5 className="theme-text header text-capitalize pt-4 pl-3 pr-3 pb-3">{props.node}</h5>
      {/* {SwitchComponents(props.node, options, props.setOuputData)} */}
      <SwitchComponents nodeName={props.node} output={props.output} setOutPut={SetOutPut} options={options} />
      <BotRightStyle />
    </div>
  );
}

export default BotRightSidebar;




function SwitchComponents({ nodeName, output, setOutPut, options }) {

  useEffect(() => {
    console.log("Switch component mounts")
    console.log(nodeName)
    console.log(output)
    console.log(setOutPut)
    console.log(JSON.parse(localStorage.getItem("output")))
  })

  const handleOutPut = (result) => {
    setOutPut([...output, ...result])
    // console.log("data added")
  }


  const logOutput = () => {
    console.log("output when save news is rendered")
    console.log(output)
  }

  switch (nodeName) {
    case "select":
      return < SelectComponent options={options} />



    case "Watch":
      return (
        <>
          <Watch options={options} handleOutPut={handleOutPut} />
         
        </>)


    case "Decision":
      return <Decision options={options} />



    case "Save News":
      return <SaveNews output={output} {...output} logOutput={logOutput} />



    case "Publish News to Portal":
      return <PublishNewsToPortal options={options} />



    case "Save Matched News":
      return <SaveMatchedNews options={options} />


    default:
      return (null)


  }





  return (null)
}



// function SwitchComponents(nodeName, options, output, setOutPut) {



//   const [output, setOutPut] = useState(["abc",])
//   const [returnComponent, setReturnComponent] = useState(null)

//   const handleOutPut = (result) => {
//     setOutPut([...output, ...result])
//   }

//   const logOutput = () => {
//     console.log("output when save news is rendered")
//     console.log(output)
//   }

//   useEffect(() => {
//     console.log("switchcomponents mounted")
//     console.log(nodeName)
//     console.log(options)
//     console.log(output)
//     console.log(setOutPut)

//     return () => {
//       console.log("SwitchComponents will unmoount")
//       console.log(output)
//     }
//   })

//   // const returnComponent = null

//   switch (nodeName) {
//     case "select":
//       setReturnComponent(< SelectComponent options={options} />)
//       return (returnComponent)


//     case "Watch":
//       setReturnComponent(<Watch options={options} handleOutPut={handleOutPut} />)
//       return (returnComponent)

//     case "Decision":
//       setReturnComponent(<Decision options={options} />)
//       return (returnComponent)


//     case "Save News":
//       setReturnComponent(<SaveNews output={output} {...output} logOutput={logOutput} />)
//       return (returnComponent)


//     case "Publish News to Portal":
//       setReturnComponent(<PublishNewsToPortal options={options} />)
//       return (returnComponent)


//     case "Save Matched News":
//       setReturnComponent(<SaveMatchedNews options={options} />)
//       return (returnComponent)

//     default:
//       return (returnComponent)


//   }


// }




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

  const [URL, setURL] = useState()



  function handleValidate(event) {
    event.preventDefault()
    console.log("handleValidate")

    fetch("http://192.168.5.32:9006/api/v1/m-aa/rss/sample?url=https://ft.com/?format=rss")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.entries)
          props.handleOutPut(result.entries)
          // localStorage.setItem('output', JSON.stringify(result.entries))
          localStorage.setItem('output', JSON.stringify(["abcd"]))
          
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

  useEffect(() => {
    console.log("Save news rendered")
    console.log(props.output)
    props.logOutput()
    console.log(JSON.parse(localStorage.getItem('output')))
  }, props.output)


  return (
    <>
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


function ActionSheet() {
  return (
    <div className="p-3 pt-4 ActionStyle">
      <img
        src={""}
        className="cursor-pointer"
        alt="CloseIcon"
        onClick={() => {}}
      />
      <h6>
        <span>ACTIONS</span>
      </h6>
      <input
        type="text"
        className="SearchBar w-100 mb-3 theme-text pt-2 pb-2"
        placeholder="Search"
        style={{ backgroundImage: `url()` }}
      />
      {/* <ul className="pl-0 list-unstyled">
                                                        {subcategory.actions.map((action, index) => {
                                                            return <li key={index} className='cursor-pointer' onClick={() => {
                                                                //pass the selected category , subcategory and action data in props
                                                                let passData = {
                                                                    id: Math.floor(Math.random() * 40),
                                                                    category: category.name,
                                                                    component: subcategory.name,
                                                                    action: action.name,
                                                                    description: "Add decription to the array first"
                                                                }
                                                                PassData(passData);
                                                            }
                                                            }>{action.name}</li>;
                                                        })}
                                                    </ul> */}
    </div>
  )
}