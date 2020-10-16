import React, {useState} from 'react';
import '../css/AppStyle.css';
import '../css/animation.scss';

type LinkInfo = {
    ServiceName: string,
    ServiceLink?: string,
    BackgroundStyle: string,
    setBackgroundStyle: (style: string) => void,
}

type Footer = {
    setBackgroundStyle: (style: string) => void,
}

function Link(props: LinkInfo) {
    const [style, setStyle] = useState('logo');
    const name = props.ServiceName.toLowerCase();
    return (
        <div className={'link-wrapper'} onMouseEnter={() => {
            props.setBackgroundStyle(props.BackgroundStyle)
        }}>
            <div className={'logo-wrapper'}>
                <a href={"https://" + props.ServiceLink}><img src={"/personal_page/img/" + name + '.png'}
                                                              alt={name + "-logo"}
                                                              className={style}/></a>
            </div>
            <div onClick={() => props.setBackgroundStyle(props.BackgroundStyle)} onMouseEnter={() => {
                props.setBackgroundStyle(props.BackgroundStyle)
            }} className={'link-container '}>
                <p className={'glitch'} data-text={props.ServiceName}>{props.ServiceName}</p>
            </div>
        </div>
    )
}

function Footer(props:Footer) {
    return (
        <div className={"footer-wrapper-wrapper"}>
            <div className="footer-wrapper">
                <div onMouseEnter={() => {props.setBackgroundStyle('main-wrapper')}} className="footer-container ">
                    <h1 data-text={'By Levandro'} className={'glitch'}>By Levandro</h1>
                </div>
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
                <Footer setBackgroundStyle={setBackground}/>
            </div>
        </div>
    );
}

export default App;
