import React from 'react';
import {Card} from "./Card";
import {SmallTable} from "./SmallTable";

export function Grid() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-8"><SmallTable></SmallTable></div>
                <div className="col-xl-4">

                    <div className="input-group">
                     <div className="h">
                        <span className="input-group-text">Comment</span>
                        <textarea className="form-control" aria-label="Comment"></textarea>
</div>
                    </div>


                </div>
            </div>
            <div className="row">
                <div className="col-xl"><Card></Card></div>
                <div className="col-xxl"><Card /></div>
                <div className="col-xxl"><Card /></div>
            </div>
        </div>
    )
}