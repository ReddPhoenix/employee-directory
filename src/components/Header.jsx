import React from 'react';

function Header() {
    return (
        <container>
            <section className='hero is-small is-info is-bold'>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='title'>Employee Directory</h1>
                        <h2 className='subtitle'>Search or sort through the employee directory</h2>
                    </div>
                </div>
            </section>
        </container>
    );
}

export default Header;