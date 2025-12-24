import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    // This hook provides the current location object (which includes the path)
    const { pathname } = useLocation();

    // useEffect runs a function every time one of the dependencies changes.
    // Here, the dependency is 'pathname'.
    useEffect(() => {
        // This function forces the browser window to scroll to the top-left corner.
        window.scrollTo(0, 0);
    }, [pathname]);

    // This component doesn't render anything, it just manages the side effect (scrolling).
    return null;
}

export default ScrollToTop;