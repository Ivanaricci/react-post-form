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

    // definizione della funzione che gestisce il cambiamento dei cambi input
    const handleChange = (e) => {
        // destratturazione del target per recuperare le proprietà del campo input modificato
        const { name, value, type, checked } = e.target;

        // imposto la variabile di stato richiamando setFormData
        setFormData({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        })
    }




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
                        className="form-control"
                        value={formData.author}
                        onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Titolo
                    </label>
                    <input
                        name='title'
                        type="text"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Testo del post
                    </label>
                    <textarea
                        name="body"
                        id=""
                        className="form-control"
                        value={formData.body}
                        onChange={handleChange}></textarea>
                </div>

                <div className="mb-3 form-check">
                    <input
                        name='public'
                        type="checkbox"
                        className="form-check-input"
                        checked={formData.public}
                        onChange={handleChange} />
                    <label htmlFor="" className="form-check-label">Pubblico</label>
                </div>

                <button className='btn btn-primary'>Invia Post</button>
            </form>
        </div>
    )
}

export default postForm