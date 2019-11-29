import React from 'react'
import Post from './Post'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 class="heading">Simple Post Comments</h1>
                <h2 class="heading"><b>Posts bellow:</b></h2>
                <Post title="Aprendendo ReacjJS" />
                <hr/>
                <Post title="Componentes com ReacjJS" />
                <hr/>
                <Post title="Por enquanto ta massa..." />
            </div>
        );
    }
}