import React from "react";
import './SideBar.css';

const SideBar = () => {
    return (
        <div class="SideBar">

            <div className="menu">
                <div class="logo">
                    Q
                </div>

                <div class="search">
                    <button>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div class="messageIcon">
                    <button>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,2H4C2.897,2,2,2.897,2,4v12c0,1.103,0.897,2,2,2h3v3.767L13.277,18H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16h-7.277L9,18.233V16H4V4h16V16z"></path></svg>
                    </button>
                </div>

                <div class="menuIcon">
                    <button>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
                    </button>
                </div>

                <div class="settingIcon">
                    <button>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </button>
                </div>

            </div>

            <div className="createGroup">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M0 18v-1.575q0-1.1 1.113-1.763Q2.225 14 4 14q.325 0 .625.012q.3.013.575.063q-.35.5-.525 1.075q-.175.575-.175 1.225V18Zm6 0v-1.625q0-1.625 1.663-2.625q1.662-1 4.337-1q2.7 0 4.35 1q1.65 1 1.65 2.625V18Zm13.5 0v-1.625q0-.65-.163-1.225q-.162-.575-.487-1.075q.275-.05.563-.063Q19.7 14 20 14q1.8 0 2.9.662q1.1.663 1.1 1.763V18ZM4 13q-.825 0-1.412-.588Q2 11.825 2 11q0-.85.588-1.425Q3.175 9 4 9q.85 0 1.425.575Q6 10.15 6 11q0 .825-.575 1.412Q4.85 13 4 13Zm16 0q-.825 0-1.413-.588Q18 11.825 18 11q0-.85.587-1.425Q19.175 9 20 9q.85 0 1.425.575Q22 10.15 22 11q0 .825-.575 1.412Q20.85 13 20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.138Q10.75 6 12 6q1.275 0 2.137.862Q15 7.725 15 9q0 1.25-.863 2.125Q13.275 12 12 12Z" /></svg>
                </button>
            </div>
        </div>

    );
}

export default SideBar;