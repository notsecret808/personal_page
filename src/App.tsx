import React, {useState} from 'react';
import './css/AppStyle.css';

type LinkInfo = {
    ServiceName: string,
    Link?: string,
    BackgroundStyle: string,
    setBackgroundStyle: (style:string) => void,
}

function Link(props: LinkInfo) {
    return (
        <div onClick={() => props.setBackgroundStyle(props.BackgroundStyle)} className={'link-wrapper'}>
            <div className={'link-container'}>
                <p>{props.ServiceName}</p>
            </div>
        </div>
    )
}


function App() {
    const [background, setBackground] = useState('main-wrapper');
    return (
        <div id={background} className = {'main'}>
            <div id={'layout-opacity'}>
                <div id={'menu-wrapper'}>
                    <div id={'menu'}>
                        <Link setBackgroundStyle={setBackground} BackgroundStyle={'vk-wrapper'} ServiceName={'VK'}/>
                        <Link setBackgroundStyle={setBackground} BackgroundStyle={'tg-wrapper'} ServiceName={'TG'}/>
                        <Link setBackgroundStyle={setBackground} BackgroundStyle={'github-wrapper'} ServiceName={'GITHUB'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
