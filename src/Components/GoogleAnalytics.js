import ReactGA from 'react-ga';

export const pageAnalytics = (data) =>{
    ReactGA.initialize('UA-141199707-1');
    ReactGA.pageview(data);
}

