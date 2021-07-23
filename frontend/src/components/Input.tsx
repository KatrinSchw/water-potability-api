import React from 'react'
import {Form} from 'react-bootstrap'

export function Input() {
    return(
        <div className="InputKasten">
        <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Day" aria-label="Day"/>
                    <span className="input-group-text">.</span>
                  <input type="text" className="form-control" placeholder="Month" aria-label="Month"/>
                <span className="input-group-text">.</span>
                    <input type="text" className="form-control" placeholder="Year" aria-label="Year"/>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="ph" aria-label="ph"/>
                    <span className="input-group-text">mol/l?</span>
            </div>
             <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Hardness" aria-label="Hardness"/>
                    <span className="input-group-text">mg/l</span>
            </div>
               <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Solids" aria-label="Solids"/>
                    <span className="input-group-text">ppm</span>
            </div>
            <div className="input-group">
                <span className="input-group-text">Comment</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
              <br />
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Predict Potability</label>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        </div>
    )
}