const cssStyle = {
    page:{
        normal:"inline text-gray-500 text-lg font-bold p-6 w-full h-20 transition duration-500 ease-in-out",
        hover:"inline text-gray-500 text-lg font-bold p-6 w-full h-20 transition duration-500 ease-in-out hover:text-white"
    },
}

function navbarCreate (pagelist) {
    return (
        <div>
            <div className="h-20 bg-gray-800 fixed top-0 left-0 w-full"></div>
            <nav className={"grid grid-cols-5 z-20 " + (pagelist.length) + " h-20 bg-gray-800 text-center fixed top-0 mx-auto navbar-width"}>  {/* fix pagelist length */}
                {/*<div className={cssStyle.page.normal}>
                    Marius Tomek
                </div> */}
                {pagelist}
            </nav>
        </div>
    )
};

function page (page)  {
    return (
        <a href={page.location} className={cssStyle.page.hover}>
            {page.name}
        </a>
    )
};

function pagefiller ()  {
    return (
        <div/>
    )
};

function pagetab (name, subpages) {
    return(
        <div className="w-full inline grid grid-cols-1 dropdown">
            <a href="#" className={cssStyle.page.hover}>
                {name}
            </a>
            <div className="dropdown-content grid grid-cols-1 divide-y-2 divide-gray-200 font-bold bg-white border-2 border-gray-200">
                {subpages.map((page, index) => {
                    return <a key={index.toString()} href={page.location} className="h-10 text-gray-500 hover:text-blue-700 text-xl p-1.5">{page.name}</a>
                })}
            </div>
        </div>
    )
};

//function pageimage (imgSrc, )

const games = [{name: "game1", location: "#"}, {name: "game2", location: "#"}, {name: "game3", location: "#"}];
const developments = [{name: "login", location: "#"}, {name: "dev1", location: "#"}, {name: "dev2", location: "#"}];
const pagelist = [page({name: "Marius Tomek", location: "/"}), pagefiller(), pagefiller(), pagefiller(), page({name: "TI HS 2026", location: "/TI"})];
//const pagelist = [page({name: "projects", location: "#"}), page({name: "chat", location: "#"}), page({name: "ASVZ AE", location: "#"}), page({name: "stat", location: "#"})];

export const navbar = navbarCreate(pagelist);