"use client"
import React, { use, useState } from 'react'
import properties from '@/data/propsdata';

function Propertycard() {
    const [selectedProp, setselectedProp] = useState(null);
    return (

        <>
            <div className='container my-5'>
                <div className='row g-3'>
                    {properties.map((p) => {
                        <div
                            className="col-md-4 mb-1"
                            key={v.id}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="card rounded-4" onClick={() => { openPage(p) }}>
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex justify-content-center gap-3">
                                        <img
                                            src={p.src}
                                            alt={p.name}
                                            width={50}
                                            className="rounded-circle"
                                        />
                                        <div>
                                            <h5 className="card-title mb-1 fw-semibold">{p.name}</h5>
                                            <p className="card-text text-muted mb-0">
                                                <strong>Type: </strong> {p.price}
                                            </p>
                                        </div>
                                    </div>
                                    <i className="ri-bookmark-3-fill fs-5 text-warning"></i>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}

export default Propertycard
