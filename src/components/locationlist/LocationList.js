import React, { Component } from 'react'
import NashvilleNorth from './locationinfo/NashvilleNorth';
import NashvilleSouth from './locationinfo/NashvilleSouth';

export default class LocationList extends Component {


    render() {
        return (
            <div>
                <section>
                    <NashvilleNorth />
                    <NashvilleSouth />
                </section>
            </div>
        )
    }

}