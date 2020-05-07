import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Container from "../Container";
import "./Layout.css"

export default ({ children, title }) => (
    <div>
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