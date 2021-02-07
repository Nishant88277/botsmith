import React, {useState, useEffect} from "react";

// --image--
import SearchIcon from "../../Assets/images/search-icon.svg";
import DatabaseIcon from "../../Assets/images/database-icon.svg";
import DropdownIcon from "../../Assets/images/dropdown-icon.svg";
import BackGreyIcon from "../../Assets/images/backgrey-icon.svg";
import CloseIcon from "../../Assets/images/close-icon.svg";

// --style--
import BotSidebarStyle from "./style";

const DATABASE = "database";
const FEEDS = "feeds";
const CUSTOMGUI = "customgui";
const SCRIPT = "script";
const COMMUNICATE = "communicate";
const DESCISION = "decision";

let categoryArr = [
    {
        type: DATABASE,
        name: "Database",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "My-Sql",
                showActions: false,
                actions: [
                    {
                        name: "select",
                    },
                    {
                        name: "save",
                    },
                ],
            },
        ],
    },
    {
        type: FEEDS,
        name: "Feeds",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "RSS",
                showActions: false,
                actions: [
                    {
                        name: "Watch",
                    }
                ],
            },
        ],
    },
    {
        type: CUSTOMGUI,
        name: "Custom GUI",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "News Action Intel",
                showActions: false,
                actions: [],
            },
        ],
    },
    {
        type: SCRIPT,
        name: "Script",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "Python",
                showActions: false,
                actions: [
                    {
                        name: "Execute",
                    }
                ],
            },
        ],
    },
    {
        type: COMMUNICATE,
        name: "Communicate",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "Email",
                showActions: false,
                actions: [
                    {
                        name: "Send",
                    }
                ],
            },
        ],
    },
    {
        type: DESCISION,
        name: "Decision",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "Match",
                showActions: false,
                actions: [
                    {
                        name: "Text",
                    }
                ],
            },
        ],
    },
]

function BotSidebar(props) {
    const [Type, setType] = useState("");
    const [Search, setSearch] = useState("");
    const [Actions, setActions] = useState(false);
    const [Categories, setCategories] = useState(categoryArr);


    const handleList = (Type) => {
        setType(Type);
    };

    const handleBack = () => {
        if (Type !== "") {
            setType("");
            setActions(false);
            setCategories(categoryArr)
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Call after setSearch
    useEffect(() => {
        if (Search !== "") {
            setCategories(
                Categories.filter((category) => {
                    return (category.subCategories.some((subcategory) => {
                        return subcategory.name
                            .toLocaleLowerCase()
                            .trim()
                            .includes(Search.toLocaleLowerCase().trim());
                    })) || (category.name.toLocaleLowerCase().trim().includes(Search.toLocaleLowerCase().trim()));
                })
            );
        } else {
            setCategories(categoryArr);
        }
    }, [Search]);

    return (
        <div className="BotSidebar position-fixed">
            {(Type === "") && <div className="pl-3 pr-3">
                <h6 className="mb-3">All Components</h6>
                <input
                    type="text"
                    className="SearchBar w-100 theme-text"
                    placeholder="Search"
                    style={{backgroundImage: `url(${SearchIcon})`}}
                    onChange={handleSearch}
                />
                <hr className="mb-0"/>
                {(Search === '') && <h6 className="mb-3 mt-3">Categories</h6>}
            </div>}
            {Categories.map(function (category, index) {
                return (
                    <div key={index}>
                        <div className="pl-3 pr-3">
                            <div className="mb-0" onClick={handleBack}>
                                <div
                                    className="d-flex cursor-pointer"
                                    onClick={() => {
                                        setType(category.type);
                                        setCategories(categoryArr.filter((Category) => {
                                                return (category.type === Category.type)
                                            }
                                        ))
                                    }}
                                >
                                    {(Type !== "") && <img src={BackGreyIcon} alt="BackGreyIcon"/>}
                                    {(Type === "") && (Search === '') && <img src={DatabaseIcon} alt="DatabaseIcon"/>}
                                    {(Search === '') ? <span
                                        className="ml-3"
                                    >
                                      {category.name}
                                    </span> : <h6 className='mt-3'>{category.name}</h6>}
                                    {(Type === "") && (Search === '') &&
                                    <img className="ml-auto" src={DropdownIcon} alt="DropdownIcon"/>}
                                    {/* add variables instead of hard coded values */}
                                </div>
                            </div>
                            {(Type !== "") &&
                            <input
                                type="text"
                                className="SearchBar w-100 mt-3 theme-text"
                                placeholder="Search"
                                style={{backgroundImage: `url(${SearchIcon})`}}
                            />
                            }
                            <ul
                                className={
                                    (Search === '') ? "pl-0 mb-0 mt-4 position-relative" : "pl-0 mb-0"
                                }
                            >
                                {category.subCategories.map(function (subcategory, index) {
                                    return ((category.type === Type) || (Search !== "")) && (
                                        <div key={index}>
                                            <li
                                                className="d-flex justify-content-between cursor-pointer"
                                                onClick={() => {
                                                    setActions(true)
                                                    //set the show actions property = true for the clicked subcategory and false for others
                                                    Categories.forEach((Category) => {
                                                        if (category.type === Category.type) {
                                                            //  in the selected category , make the selected subcategory showAction true
                                                            Category.subCategories.forEach((Subcategory) => {
                                                                Subcategory.showActions = (subcategory.name === Subcategory.name)
                                                            })
                                                        } else {
                                                            //in the other categories , set all the subcategory showActions to false
                                                            Category.subCategories.forEach((Subcategory) => {
                                                                Subcategory.showActions = false
                                                            })
                                                        }

                                                    })

                                                }}
                                            >
                                                <div className="d-flex">
                                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                                    <span className="theme-text ml-2">
                                                      {subcategory.name}
                                                    </span>
                                                </div>
                                                <img src={DropdownIcon} alt="DropdownIcon"/>
                                            </li>


                                            {Actions && subcategory.showActions && (
                                                <div className="p-3 pt-4 ActionStyle position-relative">
                                                    <img
                                                        src={CloseIcon}
                                                        className="cursor-pointer"
                                                        alt="CloseIcon"
                                                        onClick={() => setActions(false)}
                                                    />
                                                    <h6>
                                                        <span>ACTIONS</span>
                                                    </h6>
                                                    <input
                                                        type="text"
                                                        className="SearchBar w-100 mb-3 theme-text pt-2 pb-2"
                                                        placeholder="Search"
                                                        style={{backgroundImage: `url(${SearchIcon})`}}
                                                    />
                                                    <ul className="pl-0 list-unstyled">
                                                        {subcategory.actions.map((action, index) => {
                                                            return <li key={index} onClick={() => {
                                                                console.log("Action clicked")
                                                                //pass the selected category , subcategory and action data in props
                                                                let passData = {
                                                                    category: category.name,
                                                                    component: subcategory.name,
                                                                    action: action.name,
                                                                    description: "Add decription to the array first"
                                                                }
                                                                //  console.log(passData)
                                                                props.sendAddedComponentData(passData);
                                                            }
                                                            }>{action.name}</li>;
                                                        })}
                                                    </ul>
                                                </div>
                                            )}

                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
            <BotSidebarStyle/>
        </div>
    );
}

export default BotSidebar;