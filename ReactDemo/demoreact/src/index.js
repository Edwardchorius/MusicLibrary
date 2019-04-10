import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import lowerCaseAndSort from './utils/string-utils';



function Nav(props)
{
    const {className} = props;

    return (
        <nav className={className}>
             <ul>
                <li>
                     <a href='#'>Home</a>
                 </li>
            </ul>
        </nav>
    );
}

function Footer(props) {
    const footerClass = 'footer';
    const footerNavClass = `${footerClass}-navigation`;

    return(
        <footer>
            <Nav className={footerNavClass}/>
        </footer>
    );
}



function Header(props) {
    const headerClass = 'header';
    const headerNavClass = `${headerClass}-navigation`;

    return (
        <header>
            <Nav className={headerNavClass}/>
        </header>
    );
}

function HeaderAndFooter() {
    return (
        <Fragment>
            <Header />
            <Footer />
        </Fragment>
    );
}

ReactDOM.render(<HeaderAndFooter />, document.getElementById('root'));

serviceWorker.unregister();
