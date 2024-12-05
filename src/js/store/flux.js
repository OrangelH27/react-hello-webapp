const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
			url: 'https://playground.4geeks.com/contact',
			selected: null,
            contacts: null 
		},
        actions: {
            selectContact: (contact)=>setStore({selected: contact}),

            createAgenda: async() => {
                try {
                    const resp = await fetch(getStore().url+'/agendas/oran', {
                        method: 'POST'
                    });
                    if(!resp.ok) throw new Error('error while agenda')
                    getActions().getUserAgenda()
                    return true
                } catch (error) {
                    console.error(error)
                }
            },

            createContact: async(contacto) => {
                try {
                    const resp = await fetch(getStore().url+'/agendas/oran/contacts', {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contacto)
                    });
                    if(!resp.ok) throw new Error('error while creating contact')
                    
                    return getActions().getUserAgenda()
                } catch (error) {
                    console.error(error)
                }	
            },

            getUserAgenda: async() => {
                try {
                    const resp = await fetch(getStore().url+'/agendas/oran')
                    if(resp.status==404) return getActions().createAgenda()
                    if(!resp.ok) throw new Error('error while retrieving new user')
                    const data = await resp.json()
                    console.log('respuesta de la API', data)
                    setStore({contacts: data.contacts})
                } catch (error) {
                    console.error(error)
                }
            },

            updateContact: async(id, contact) => {
                try {
                    const resp = await fetch(getStore().url +'/agendas/oran/contacts/'+id, {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    })
                    if(!resp.ok) throw new Error('error while updating user')
                    return getActions().getUserAgenda()
                } catch (error) {
                    console.error(error)
                }
            },

            deleteContact: async(id) => {
                try {
                    const resp = await fetch(getStore().url +'/agendas/oran/contacts/'+id,{
                        method: 'DELETE'
                    })
                    if(!resp.ok) throw new Error('error while deleting user')
                    return getActions().getUserAgenda()
                } catch (error) {
                    console.error(error)
                }
            }
        },
    };
};

export default getState;
