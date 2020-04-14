import React, { Component } from 'react';


class Details extends Component {
    render() {
        let {params} = this.props.match
        return (
            <div>
                <h1>课程详情</h1>
                <span>{params.id}</span>
            </div>
        );
    }
}

export default Details;