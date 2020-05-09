import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Container from "../Container";
import { Helmet } from "react-helmet";
import favicon from "../../../static/favicon.png";
import config from "../../../data/config";
import "./Layout.css"

export default ({ children, title }) => (
    <div>
        <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="icon" href={favicon} />
        </Helmet>
        <Header title={title} />
        <main role="main">
            <Container>
                {children}
                <aside className="aside">
                    <Sidebar 
                        title="about me"
                        description="random person"
                    />
                    <Sidebar
                        title="about blog"
                        description="random blog"
                    />
                </aside>
            </Container>
        </main>
    </div>
);