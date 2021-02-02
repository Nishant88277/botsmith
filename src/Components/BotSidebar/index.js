import React, {useState, useEffect} from 'react';

// --image--
import SearchIcon from "../../Assets/images/search-icon.svg"
import DatabaseIcon from "../../Assets/images/database-icon.svg"
import DropdownIcon from "../../Assets/images/dropdown-icon.svg"
import BackGreyIcon from "../../Assets/images/backgrey-icon.svg"
import CloseIcon from "../../Assets/images/close-icon.svg"

// --style--
import BotSidebarStyle from "./style";

function BotSidebar() {
    const [Type, setType] = useState('');
    const [Search, setSearch] = useState('');
    const [Actions, setActions] = useState(false);

    const handleList = (Type) => {
        setType(Type)
    }

    const handleBack = () => {
        setType('')
        setActions(false)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        let filter, ul, li, a, i, txtValue;
        filter = Search && Search.toUpperCase();
        ul = document.getElementById("CategoriesUL");
        if(ul !== null){
            li = ul.getElementsByTagName('li');
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    });

    var MenuOptions = [
        {
            name: 'Database',
            icon: DatabaseIcon
        },
        {
            name: 'Feeds',
            icon: DatabaseIcon
        },
        {
            name: 'Custom GUI',
            icon: DatabaseIcon
        },
        {
            name: 'Script',
            icon: DatabaseIcon
        },
        {
            name: 'Communicate',
            icon: DatabaseIcon
        },
        {
            name: 'Decision',
            icon: DatabaseIcon
        }
    ];

    return (
        <div className="BotSidebar position-fixed">
            { Type === '' &&
                <div>
                    <div className="pl-3 pr-3">
                        <h6 className="mb-0">All Components</h6>
                        <input
                            type="text"
                            className="SearchBar w-100 mt-3 theme-text"
                            placeholder="Search"
                            style={{backgroundImage: `url(${SearchIcon})`}}
                            value={Search}
                            onChange={handleSearch}
                        />
                    </div>
                    <hr style={{background: '#CCD7E8'}}/>
                    <div className="pl-3 pr-3">
                        <h6 className="mb-0">Categories</h6>
                        <ul id="CategoriesUL" className="pl-0 mb-0 mt-4 list-unstyled">
                            {MenuOptions.map((Option, i) => {
                                return <li key={i} onClick={() => handleList(Option.name)}>
                                            <a className="d-flex justify-content-between cursor-pointer mt-4">
                                                <div className="d-flex">
                                                    <img src={Option.icon} alt="DatabaseIcon"/>
                                                    <span className="theme-text ml-2">{Option.name}</span>
                                                </div>
                                                <img src={DropdownIcon} alt="DropdownIcon"/>
                                            </a>
                                        </li>
                            })}
                        </ul>
                    </div>
                </div>
            }
            { Type === 'Database' &&
                <div>
                    <div className="pl-3 pr-3">
                        <h6
                            className="mb-0 d-flex cursor-pointer"
                            onClick={handleBack}

                        >
                            <img src={BackGreyIcon} alt="BackGreyIcon" />
                            <span className="ml-3">Database</span>
                        </h6>
                        <input
                            type="text"
                            className="SearchBar w-100 mt-3 theme-text"
                            placeholder="Search"
                            style={{backgroundImage: `url(${SearchIcon})`}}
                        />
                        <ul className="pl-0 mb-0 mt-4 position-relative">
                            <li
                                className="d-flex justify-content-between cursor-pointer"
                                onClick={() => setActions(true)}
                            >
                                <div className="d-flex">
                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                    <span className="theme-text ml-2">MySQL</span>
                                </div>
                                <img src={DropdownIcon} alt="DropdownIcon"/>
                            </li>
                            { Actions && <div className="p-3 pt-4 ActionStyle position-relative">
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
                                    <li>Select</li>
                                    <li>Save</li>
                                </ul>
                            </div> }
                        </ul>
                    </div>
                </div>
            }
            { Type === 'Feeds' &&
                <div>
                    <div className="pl-3 pr-3">
                        <h6
                            className="mb-0 d-flex cursor-pointer"
                            onClick={handleBack}

                        >
                            <img src={BackGreyIcon} alt="BackGreyIcon" />
                            <span className="ml-3">Feeds</span>
                        </h6>
                        <input
                            type="text"
                            className="SearchBar w-100 mt-3 theme-text"
                            placeholder="Search"
                            style={{backgroundImage: `url(${SearchIcon})`}}
                        />
                        <ul className="pl-0 mb-0 mt-4 position-relative">
                            <li
                                className="d-flex justify-content-between cursor-pointer"
                                onClick={() => setActions(true)}
                            >
                                <div className="d-flex">
                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                    <span className="theme-text ml-2">RSS</span>
                                </div>
                                <img src={DropdownIcon} alt="DropdownIcon"/>
                            </li>
                            { Actions && <div className="p-3 pt-4 ActionStyle position-relative">
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
                                    <li>Watch</li>
                                </ul>
                            </div> }
                        </ul>
                    </div>
                </div>
            }
            { Type === 'Custom GUI' &&
                <div>
                    <div className="pl-3 pr-3">
                        <h6
                            className="mb-0 d-flex cursor-pointer"
                            onClick={handleBack}

                        >
                            <img src={BackGreyIcon} alt="BackGreyIcon" />
                            <span className="ml-3">Custom GUI</span>
                        </h6>
                        <input
                            type="text"
                            className="SearchBar w-100 mt-3 theme-text"
                            placeholder="Search"
                            style={{backgroundImage: `url(${SearchIcon})`}}
                        />
                        <ul className="pl-0 mb-0 mt-4">
                            <li className="d-flex justify-content-between cursor-pointer">
                                <div className="d-flex">
                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                    <span className="theme-text ml-2">News Action Intel</span>
                                </div>
                                <img src={DropdownIcon} alt="DropdownIcon"/>
                            </li>
                        </ul>
                    </div>
                </div>
            }
            { Type === 'Script' &&
                <div>
                    <div className="pl-3 pr-3">
                        <h6
                            className="mb-0 d-flex cursor-pointer"
                            onClick={handleBack}

                        >
                            <img src={BackGreyIcon} alt="BackGreyIcon" />
                            <span className="ml-3">Script</span>
                        </h6>
                        <input
                            type="text"
                            className="SearchBar w-100 mt-3 theme-text"
                            placeholder="Search"
                            style={{backgroundImage: `url(${SearchIcon})`}}
                        />
                        <ul className="pl-0 mb-0 mt-4 position-relative">
                            <li
                                className="d-flex justify-content-between cursor-pointer"
                                onClick={() => setActions(true)}
                            >
                                <div className="d-flex">
                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                    <span className="theme-text ml-2">Python</span>
                                </div>
                                <img src={DropdownIcon} alt="DropdownIcon"/>
                            </li>
                            { Actions && <div className="p-3 pt-4 ActionStyle position-relative">
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
                                    <li>Execute</li>
                                </ul>
                            </div> }
                        </ul>
                    </div>
                </div>
            }
            { Type === 'Communicate' &&
                <div>
                    <div className="pl-3 pr-3">
                        <h6
                            className="mb-0 d-flex cursor-pointer"
                            onClick={handleBack}

                        >
                            <img src={BackGreyIcon} alt="BackGreyIcon" />
                            <span className="ml-3">Communicate</span>
                        </h6>
                        <input
                            type="text"
                            className="SearchBar w-100 mt-3 theme-text"
                            placeholder="Search"
                            style={{backgroundImage: `url(${SearchIcon})`}}
                        />
                        <ul className="pl-0 mb-0 mt-4 position-relative">
                            <li
                                className="d-flex justify-content-between cursor-pointer"
                                onClick={() => setActions(true)}
                            >
                                <div className="d-flex">
                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                    <span className="theme-text ml-2">Email</span>
                                </div>
                                <img src={DropdownIcon} alt="DropdownIcon"/>
                            </li>
                            { Actions && <div className="p-3 pt-4 ActionStyle position-relative">
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
                                    <li>Send</li>
                                </ul>
                            </div> }
                        </ul>
                    </div>
                </div>
            }
            { Type === 'Decision' &&
                <div>
                    <div className="pl-3 pr-3">
                        <h6
                            className="mb-0 d-flex cursor-pointer"
                            onClick={handleBack}

                        >
                            <img src={BackGreyIcon} alt="BackGreyIcon" />
                            <span className="ml-3">Decision</span>
                        </h6>
                        <input
                            type="text"
                            className="SearchBar w-100 mt-3 theme-text"
                            placeholder="Search"
                            style={{backgroundImage: `url(${SearchIcon})`}}
                        />
                        <ul className="pl-0 mb-0 mt-4">
                            <li
                                className="d-flex justify-content-between cursor-pointer"
                                onClick={() => setActions(true)}
                            >
                                <div className="d-flex">
                                    <img src={DatabaseIcon} alt="DatabaseIcon"/>
                                    <span className="theme-text ml-2">Match</span>
                                </div>
                                <img src={DropdownIcon} alt="DropdownIcon"/>
                            </li>
                            { Actions && <div className="p-3 pt-4 ActionStyle position-relative">
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
                                    <li>Text</li>
                                </ul>
                            </div> }
                        </ul>
                    </div>
                </div>
            }
            <BotSidebarStyle/>
        </div>
    );
}

export default BotSidebar;