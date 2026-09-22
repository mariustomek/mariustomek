import Head from 'next/head'
import { FieldGroup, ProjectField, LinkedProjectField } from '/components/fields'
import { navbar } from '/components/navbar'
import { name, subtitle, title } from '/components/text'

export default function Home() {
    return (
        <div className="top-0 left-0 right-0 min-h-screen py-20 bg-gray-900 max-w-screen absolute"> {/* scale height */}
            <Head>
                <title>Marius Tomek - ETHZ</title>
                <link rel="icon" href="ETH_head.png" />
            </Head>
            <body className="h-full max-w-screen-lg mx-auto static">
                {navbar}
                {name("Welcome")}
                {title("This is the personal webpage of Marius Tomek")}
                <br/>
                {subtitle("Teaching")}
                {FieldGroup(
                    LinkedProjectField("TI HS 2026", "TI", "Material for my excercises sesstions of the Theoretical Computer Science course in Autumn 2026 at ETHZ"),
                    LinkedProjectField("AnD HS 2022", "AnD", "Material for my excercises sesstions of the Algorithms and Data Structures course I taught in Autumn 2022 at ETHZ"),
                )}
                {subtitle("Training")}
                {FieldGroup(
                    LinkedProjectField("ASVZ - Swimming", "https://asvz.ch/426-sportfahrplan?f[0]=sport:45705&f[1]=instructor:6858", "Swimming lessons I am currently teaching at ASVZ")
                )}
                {subtitle("Upcomming Concerts")}
                {FieldGroup(
                    LinkedProjectField("ZJSO", "https://n.ethz.ch/~vdoerig/dashboard/#/", "ETHZ Dashboard for tracking tasks and lectures made by Vincent Dörig")
                )}
                {subtitle("Music")}
                {FieldGroup(
                    LinkedProjectField("ETHZ Dashboard", "https://n.ethz.ch/~vdoerig/dashboard/#/", "ETHZ Dashboard for tracking tasks and lectures made by Vincent Dörig")
                )}

                {/*{subtitle("Projects")}
                {FieldGroup(
                    ProjectField("MyProject 1", "row1", "row2", "row3"),
                    ProjectField("hello", "hi alsdfjg dslkgjsldhg dsglkfhdgslakgdsf jglfkhglf jsdfgl ghlhsldfh lg hlghflghsgh f"),
                    ProjectField("hello", "hi"),
                    ProjectField("hello", "hi"),
                    ProjectField("Noice", "Bla bla bla", "text 2", "text 3"),
                    ProjectField("Project", "No bla bla"),
                    ProjectField("Column 1", "text 1", "text 2", "text 3"),
                    ProjectField("Column 2", "text 1", "text 2", "text 3"),
                    ProjectField("Column 3", "text 1", "text 2", "text 3")
                )}
                {subtitle("Active")}
                {subtitle("In Development")}
                {subtitle("Inactive")}*/}
                <br/>
            </body>
        </div>
    )
}