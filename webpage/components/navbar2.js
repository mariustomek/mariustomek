const cssStyle = {
    page:{
        normal:"inline text-white text-2xl font-bold p-1.5 w-full h-12 transition duration-500 ease-in-out",
        hover:"inline text-white text-2xl font-bold p-1.5 w-full h-12 transition duration-500 ease-in-out hover:bg-gray-500"
    },
}

function navbarCreate (pagelist) {
    return (
        <div>
            <div className="h-12 bg-gray-400 text-center fixed top-0 left-0 w-full"></div>
            <nav className={"flex grid grid-cols-" + (pagelist.length + 1) + " block h-12 bg-gray-400 text-center fixed top-0 mx-auto navbar-width"}>
                <div className={cssStyle.page.normal}>
                    Navigation bar
                </div>
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
const pagelist = [page({name: "projects", location: "#"}), page({name: "chat", location: "#"}), pagetab("games", games), pagetab("dev", developments)];
//const pagelist = [page({name: "projects", location: "#"}), page({name: "chat", location: "#"}), page({name: "ASVZ AE", location: "#"}), page({name: "stat", location: "#"})];

export const navbar = navbarCreate(pagelist);