import React from 'react';
import './style.css';

class Layout extends React.Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', height:'100vh'}}>
                <header className='box'>
                    Header
                </header>
                <nav className='box'>
                    Nav
                </nav>
                <div style={{display: 'flex', flex:1}}>
                    <aside className='box' style={{flex:1}}>
                        Aside
                    </aside>
                    <section className='box' style={{flex:3}}>
                        Section
                    </section>
                </div>
                <footer className='box'>Footer</footer>
            </div>
        )
    }
}

export default Layout;