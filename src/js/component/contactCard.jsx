import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {

    const { store, actions } = useContext(Context);
    const { id, name, address, email, phone } = props.contact
    return (
        <article className="card">
            <div className="d-flex">
                <figure>
                    <img
                        className="rounded img-fluid"
                        src="https://imgs.search.brave.com/JAHeWxUYEwHB7KV6V1IbI9oL7wxJwIQ4Sbp8dHQL09A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0"
                        alt={name}
                        width={'200px'}
                        height={'200px'}
                    />
                </figure>
                <div className="container">
                    <p className="fs-4">
                        {name}
                    </p>
                    <p>
                        {address}
                    </p>
                    <p>
                        {email}
                    </p>
                    <p>
                        {phone}
                    </p>
                    <div>
                        <Link onClick={() => actions.selectContact(props.contact)} to={'/contacto/' + id}>
                            editar
                        </Link>
                        <button onClick={()=>actions.deleteContact(id)}>
                            eliminar
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}