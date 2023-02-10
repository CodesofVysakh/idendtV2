import React, { lazy, Suspense, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../../general/Layout";

const lazyDelayed = (importPromise) => {
    return React.lazy(() =>
    Promise.all([
        importPromise,
        new Promise((resolve) => setTimeout(resolve, 300)), // ensures minimal delay
    ]).then(([module]) => module)
    );
};

const Loader = () => {
    return <div className="loading-box container">Loading ...</div>;
};

const StoryPage = lazyDelayed(import('../../screens/pages/StoryPage'));
const HomePage = lazyDelayed(import('../../screens/HomePage'));

function MainRouter() {
    const [scroll, setScroll] = useState("")
    const scrollRef = useRef()
    const serviceRef = useRef()
    const teamRef = useRef()
    const contactRef = useRef()

    return (
        <Router>
            <Layout setScroll={setScroll} >
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<HomePage 
                                                    setScroll={setScroll} 
                                                    scroll={scroll} 
                                                    scrollRef={scrollRef}
                                                    serviceRef={serviceRef}
                                                    teamRef={teamRef}
                                                    contactRef={contactRef}
                                                />} />
                        <Route path="/our-stories" element={<StoryPage />} />
                    </Routes>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default MainRouter;
