import React, {useState} from "react";

// --image--
import SearchIcon from "../../Assets/images/search-icon.svg";
import DatabaseIcon from "../../Assets/images/database-icon.svg";
import DropdownIcon from "../../Assets/images/dropdown-icon.svg";
import BackGreyIcon from "../../Assets/images/backgrey-icon.svg";
import CloseIcon from "../../Assets/images/close-icon.svg";

// --style--
import BotSidebarStyle from "./style";

let categoryArr = [
    {
        name: "Database",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "MySQL",
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
        name: "Feeds",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "RSS",
                actions: [
                    {
                        name: "Watch",
                    }
                ],
            },
        ],
    },
    {
        name: "Custom GUI",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "News Action Intel",
                actions: []
            }
        ],
    },
    {
        name: "Script",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "Python",
                actions: [
                    {
                        name: "Execute",
                    }
                ],
            }
        ],
    },
    {
        name: "Communicate",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "Email",
                actions: [
                    {
                        name: "Send",
                    }
                ],
            }
        ],
    },
    {
        name: "Decision",
        icon: DatabaseIcon,
        subCategories: [
            {
                name: "Match",
                actions: [
                    {
                        name: "Text",
                    }
                ],
            }
        ],
    },
]

function BotSidebar() {
    const [Type, setType] = useState('');
    const [Search, setSearch] = useState("");
    const [Actions, setActions] = useState(false);
    const [Categories, setCategories] = useState(categoryArr);


    const handleBack = () => {
        if (Type !== "") {
            setType("");
            setSearch("");
            setActions(false);
            setCategories(categoryArr)
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="BotSidebar position-fixed">
            {(Type === "") && <div>
                <h6 className="mb-0 pl-3 pr-3">All Components</h6>
                <input
                    type="text"
                    className="SearchBar mt-3 theme-text ml-3 mr-3"
                    placeholder="Search"
                    style={{backgroundImage: `url(${SearchIcon})`}}
                    value={Search}
                    onChange={handleSearch}
                />
                <hr/>
            </div>}
            {Categories.map(function (category, index) {
                return (
                    <div key={index}>
                        <div className="pl-3 pr-3">
                            <div className="mb-0 d-flex cursor-pointer" onClick={handleBack}>
                                {(Type !== "") && <img src={BackGreyIcon} alt="BackGreyIcon"/>}
                                <div
                                    onClick={() => {
                                        setType(category.name);
                                        setSearch("");
                                        setCategories(categoryArr.filter((Category) => {
                                                return (category.name === Category.name)
                                            }
                                        ))
                                    }}
                                    className={Type === "" ? "d-flex w-100 mb-4" : "d-flex w-100"}
                                >
                                    {(Type === "") && <img src={DatabaseIcon} alt="DatabaseIcon"/>}
                                    <span className="ml-3">
                                      {category.name}
                                    </span>
                                    {(Type === "") && <img className="ml-auto" src={DropdownIcon} alt="DropdownIcon"/>}
                                </div>
                            </div>
                            {(Type !== "") && <input
                                type="text"
                                className="SearchBar mt-3 w-100 theme-text"
                                placeholder="Search"
                                style={{backgroundImage: `url(${SearchIcon})`}}
                                value={Search}
                                onChange={handleSearch}
                            />}
                                {category.subCategories.map(function (subcategory, index) {
                                    return (category.name === Type) && (
                                        <ul key={index} className="pl-0 mb-0 mt-4 position-relative">
                                            <li
                                                className="d-flex justify-content-between cursor-pointer"
                                                onClick={() => setActions(true)}
                                            >
                                                <div className="d-flex">
                                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                                    <span className="theme-text ml-2">
                                                      {subcategory.name}
                                                    </span>
                                                </div>
                                                {subcategory.actions.length > 0 &&
                                                    <img src={DropdownIcon} alt="DropdownIcon"/>
                                                }
                                            </li>
                                            { Actions && category.name !== "Custom GUI" && (
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
                                                        style={{ backgroundImage: `url(${SearchIcon})` }}
                                                    />
                                                    <ul className="pl-0 list-unstyled">
                                                        {subcategory.actions.map((action, index) => {
                                                            return <li key={index}>{action.name}</li>;
                                                        })}
                                                    </ul>
                                                </div>
                                            )}
                                        </ul>
                                    )
                                })}
                        </div>
                    </div>
                );
            })}
            <BotSidebarStyle/>
        </div>
    );
}

export default BotSidebar;