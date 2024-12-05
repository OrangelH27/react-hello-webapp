import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const ContactoForm = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams()
    
    const [formData, setFormData] = useState({
        name: store.selected?.name || '',
        email: store.selected?.email || '',
        address: store.selected?.address || '',
        phone: store.selected?.phone || ''
    })




    const handleChange = e => {
		const {name, value} = e.target
		setFormData({...formData, [name]: value})
	}


    const handleSubmit = e => {
        e.preventDefault();
        store.selected ?
            actions.UpdContact(id, formData)
            :
            actions.createContact(formData)
    }


    return (
        <>

            <form className="form-control" onSubmit={handleSubmit}>
            <div className="mb-3">
            <label>Full name</label>
                <input name="name" value={formData.name} onChange={handleChange} required className="form-control" type="text" placeholder="name" />
            </div>
            <div className="mb-3">
            <label>Full name</label>
                <input name='email' value={formData.email} onChange={handleChange} required className="form-control" type="email" placeholder='email' />
            </div>
            <div className="mb-3">
            <label>Full name</label>
                <input name="address" value={formData.address} onChange={handleChange} required className="form-control" type="text" placeholder='address' />
            </div>
            <div className="mb-3">
            <label>Full name</label>
                <input name='phone' value={formData.phone} onChange={handleChange} required className="form-control" type="number" placeholder='phone' />
            </div>
                {store.selected ? <input type="submit" value={'Editar'} /> : <input type="submit" value={'Crear'} />}
            </form>
            <Link className="btn btn-danger" to={'/'}>
                Volver a home
            </Link>
        </>
    )

}