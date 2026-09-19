import Head from 'next/head'
import { FieldGroup, ProjectField, LinkedProjectField } from '/components/fields'
import { navbar } from '/components/navbar'
import { name, subtitle, title, plaintext, explistDecimal, listBullet, listDecimal } from '/components/text'
import { page, file, pagetext } from '/components/links'

export default function Home() {
    return (
        <div className="top-0 left-0 right-0 min-h-screen py-20 bg-gray-900 max-w-screen absolute"> {/* scale height */}
            <Head>
                <title>Marius Tomek - ETHZ</title>
                <link rel="icon" href="ETH_head.png" />
            </Head>
            <body className="h-full max-w-screen-lg mx-auto static">
                {navbar}
                {name("Tims Test Page")}
                {title("Will er en dick isch")}
                <br/>
                {subtitle("Teaching")}
                {listDecimal("white",
                    "hi",
                    page("https://www.admin.ch", "admin rights", "cyan-300")
                )}
                {FieldGroup(
                    LinkedProjectField("AnD HS 2022", "AnD", "Material regarding the exercise session in AnD"),
                    LinkedProjectField("EProg HS 2022", "https://n.ethz.ch/~maxihuber/", "Webpage for the exercise session in EProg held by Josua Bürki und Maxim Huber"),
                    LinkedProjectField("DM HS 2022", "https://n.ethz.ch/~aellison/", "Webpage for the exercise session in discrete mathematics held by Andreas Ellison")
                )}
                {subtitle("Training")}
                {FieldGroup(
                    LinkedProjectField("ASVZ - Swimming", "https://asvz.ch/426-sportfahrplan?f[0]=sport:45705&f[1]=instructor:6858", "Swimming lessons I am currently teaching at ASVZ")
                )}
                {subtitle("Miscellaneous")}
                {FieldGroup(
                    LinkedProjectField("ETHZ Dashboard", "https://n.ethz.ch/~vdoerig/dashboard/#/", "ETHZ Dashboard for tracking tasks and lectures made by Vincent Dörig")
                )}
                <br/>
            </body>
        </div>
    )
}