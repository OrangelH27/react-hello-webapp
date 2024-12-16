import React, { useContext } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const Home = () => {
	const {store, actions} = useContext(Context);
	
	return (
		<div className="text-center mt-1">
			
			<Link onClick={()=>actions.selectContact(null)} to={'/contacto/new'}>
			Crear
			</Link>
			{
				store.contacts?.map(el=>
					<ContactCard key={el.id} contact={el} />
				)
			}
			
		</div>
	);
}