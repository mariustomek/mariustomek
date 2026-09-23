import Head from 'next/head'
import { FieldGroup, ProjectField } from '/components/fields'
import { navbar } from '/components/navbar'
import { name, subtitle, title, plaintext, listDecimal, listBullet, explistDecimal } from '/components/text'
import { file, page, pagetext } from '/components/links'

export default function Home() {
    return (
        <div className="top-0 left-0 right-0 min-h-screen py-24 bg-gray-900 max-w-screen absolute">
            <Head>
                <title>Marius Tomek - AnD HS 2022</title>
                <link rel="icon" href="ETH_head.png" />
            </Head>
            <body className="h-full max-w-screen-lg mx-auto static">
                {navbar}
                {name("AnD - Übungsstunde 2022")}
                <br/>
                <div className="max-w-screen-lg relative">
                <div className="w-3/4 top-0 left-0">
                    {subtitle("Generelle Informationen")}
                    {listBullet("white",
                        "Gruppe: G-11 ETZ K 91",
                        "Vorlesung: Donnerstag 10:15 - 12:00 (HG F 7) / 14:15 - 15:00 (ETA F 5)",
                        "Übungsstunde: Montag um 09:15 - 12:00",
                        page("https://cadmo.ethz.ch/education/lectures/HS22/DA/index.html",  "Vorlesungswebsite", "cyan-300")
                    )}
                    <br/>
                    <br/>
                    {subtitle("Bonusaufgaben")}
                    {listBullet("white",
                        "Upload Exercise Sheet: Montags",
                        "Abgabe Bonusaufgaben: Montag 09:15 im geteilten Polyboxordner",
                        "File Name: Sheet_XX_<kürzel1>_<kürzel2>",
                        "Abgabe Peergrading: Montag bis 23:59 im geteilten Polyboxordner",
                        "File Name: Sheet_XX_<kürzel1_original>_<kürzel2_original>_PG",
                        "Aufgaben werden mit blauem oder schwarzem Stift gelöst,",
                        "Korrekturen werden mit grünem Stift durchgeführt.",
                        "WICHTIG: Namen oder Kürzel der Peergrader auf dem zu bewertenden Blatt vermerken.",
                        page("https://polybox.ethz.ch/index.php/login", "polybox", "cyan-300")
                    )}
                    <br/>
                    <br/>
                    {subtitle("Kontakt")}
                    {plaintext("white",
                        "Mein Name ist Marius Tomek",
                    )}
                    <p className="text-white inline">Mail: </p>
                    {page("mailto:marius.tomek@asvz.ch", "marius.tomek@asvz.ch", "cyan-300")}
                    <br/>
                    <br/>
                    <br/>
                    {subtitle("Folien")}
                    {listBullet("white",
                        file("/files/AND_HS_22/SlidesWeek1.pdf", "Folien Woche 1", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek2.pdf", "Folien Woche 2", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek3.pdf", "Folien Woche 3", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek4.pdf", "Folien Woche 4", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek5.pdf", "Folien Woche 5", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek6.pdf", "Folien Woche 6", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek7.pdf", "Folien Woche 7", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek8.pdf", "Folien Woche 8", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek9.pdf", "Folien Woche 9", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek10.pdf", "Folien Woche 10", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek11.pdf", "Folien Woche 11", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek12.pdf", "Folien Woche 12", "cyan-300"),
                        file("/files/AND_HS_22/SlidesWeek13.pdf", "Folien Woche 13", "cyan-300")
                    )}
                    <br/>
                    <br/>
                    {subtitle("Zusatzmaterial")}
                    {listBullet("white",
                        file("/files/AND_HS_22/Zusammenfassung_Sortieralgorithmen.pdf", "Zusammenfassung zu Sortieralgorithmen", "cyan-300"),
                        file("/files/AND_HS_22/Graphen_Terminologie.pdf", "Terminologie von Graphen", "cyan-300"),
                        file("/files/AND_HS_22/Vorlesung_ADT.pdf", "Vorlesungsnotizen zu Abstract Datatypes", "cyan-300"),
                        file("/files/AND_HS_22/Formelsammlung_Algorithmen_2022-11-21.pdf", "Formelsammlung (full version)", "cyan-300"),
                        page("https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",  "Grafische Simulation von Algorithmen", "cyan-300"),
                        page("https://www.cs.usfca.edu/~galles/visualization/AVLtree.html",  "Grafische Simulation eines AVL Trees", "cyan-300")
                    )}
                    <br/>
                </div>
                <div className="w-1/4 top-0 right-0 absolute">
                    {subtitle("TA-Team")}
                    {plaintext("white", "Die Folien auf dieser Webpage werden in folgenden Übungsstunden verwendet:")}
                    {listBullet("white",
                        pagetext("mailto:nwehrl@student.ethz.ch", "Nicolas Wehrli", "cyan-300", "IFW C 31", "white"),
                        pagetext("mailto:timrieder@student.ethz.ch", "Tim Rieder", "cyan-300", "HG D 3.3", "white"),
                        pagetext("mailto:marius.tomek@asvz.ch", "Marius Tomek", "cyan-300", "ETZ K 91", "white")
                    )}
                </div>
                </div>
            </body>
        </div>
    )
}