import React, {useState} from 'react';
import '../css/AppStyle.css';
import '../css/animation.scss';

type LinkInfo = {
    ServiceName: string,
    ServiceLink?: string,
    BackgroundStyle: string,
    setBackgroundStyle: (style: string) => void,
}

function Link(props: LinkInfo) {
    const name = props.ServiceName.toLowerCase();
    return (
        <div onClick={() => props.setBackgroundStyle(props.BackgroundStyle)} className={'link-wrapper'}>
            <div className={'logo-wrapper'}>
                <a href={"https://" + props.ServiceLink}><img src={"/img/" + name + '.png'} alt={name + "-logo"}
                                                              className={'logo'}/></a>
            </div>
            <div className={'link-container'}>
                <p>{props.ServiceName}</p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <h1>By Levandro</h1>
            </div>
        </div>
    )
}


function App() {
    const [background, setBackground] = useState('main-wrapper');
    return (
        <div id={background} className={'main'}>
            <div id={'layout-opacity'}>
                <div id={'menu-wrapper'}>
                    <div id={'menu'}>
                        <Link setBackgroundStyle={setBackground} BackgroundStyle={'vk-wrapper'} ServiceName={'VK'}
                              ServiceLink={'vk.com/glodboyshawty'}/>
                        <Link setBackgroundStyle={setBackground} BackgroundStyle={'tg-wrapper'} ServiceName={'TG'}
                              ServiceLink={'t.me/Levandro'}/>
                        <Link setBackgroundStyle={setBackground} BackgroundStyle={'github-wrapper'}
                              ServiceLink={'github.com/notsecret808'}
                              ServiceName={'GH'}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
