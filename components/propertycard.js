"use client"
import React, { use, useState } from 'react'
import properties from '@/data/propsdata';

function Propertycard() {
    const [selectedProp, setselectedProp] = useState(null);
    return (

        <>
            <div className='container my-5'>
                <div className='row g-3'>
                    {properties.map((p) => (
                        <div className="col-md-4 mb-1" key={p.id} style={{ cursor: "pointer" }}>
                            <div className="card rounded-3">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex justify-content-center gap-3 align-items-center">
                                        <img
                                            src={p.img}
                                            alt={p.name}
                                            width={100}
                                            className="img-fluid"
                                        />
                                        <div>
                                            <h5 className="card-title mb-1 fw-semibold">{p.name}</h5>
                                            <p className="card-text text-muted mb-0">
                                                <strong>Location: </strong> {p.place}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Propertycard
