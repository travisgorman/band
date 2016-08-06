import React from 'react';
import Navigation from './Navigation';
//app.js

export default React.createClass({
    render: function() {
        return (
            <section>
                <Navigation />
                {this.props.children}
            </section>
        );
    }
});
