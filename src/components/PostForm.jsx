import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const postForm = () => {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    })


    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crea un nuovo post</h2>
            <form action="">

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        autore
                    </label>
                    <input
                        name='author'
                        type="text"
                        className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Titolo
                    </label>
                    <input
                        name='title'
                        type="text"
                        className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Testo del post
                    </label>
                    <textarea
                        name="body"
                        id=""
                        className="form-control"></textarea>
                </div>

                <div className="mb-3 form-check">
                    <input
                        name='pubblico'
                        type="checkbox"
                        className="form-check-input" />
                    <label htmlFor="" className="form-check-label">Pubblico</label>
                </div>

                <button className='btn btn-primary'>Invia Post</button>
            </form>
        </div>
    )
}

export default postForm