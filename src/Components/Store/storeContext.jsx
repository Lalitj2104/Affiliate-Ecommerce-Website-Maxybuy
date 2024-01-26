import { createContext, useReducer, useState } from "react";
import all_product from "../../assets/all_product";

export const StoreContext = createContext(
    {
        items: [],
        addToCart: () => { },
        deleteItemFromCart: () => { },
        setMenuState: () => { },
        menu:'',
        all_product:[]
    }
);

const reducer_Func = (currState, action) => {
    let items=currState;
    if (action.type === 'DELETE') {
        items = currState.filter((item) => {
            if (item !=action.payload.id ) {
                return item;
            }
        })

    }else if(action.type==='ADD'){
        items=[...currState, action.payload.id]

    }




    return items;

}




const StoreContextProvider = ({ children }) => {

    

    const [items, dispatchItems] = useReducer(reducer_Func, []);
    const [menu, setMenu] = useState('shop');
    const deleteItemFromCart = (id) => {



        const delteedItem = {
            type: 'DELETE',
            payload: {
                id: id
            }
        }


        dispatchItems(delteedItem);
    }

  

    const addToCart = (id) => {
        console.log("A")

        const newItem = {
            type:'ADD',
            payload:{
                id:id
            }
        }

        dispatchItems(newItem)
        

    }

    function setMenuState(newMenu){
        console.log("Set menued")
        setMenu(newMenu);

    }


    return <StoreContext.Provider value={
        {
            items: items,
            addToCart: addToCart,
            deleteItemFromCart: deleteItemFromCart,
            setMenuState:setMenuState,
            menu:menu,
            all_product:all_product,
        }
    }>
        {children}

    </StoreContext.Provider>
}

export default StoreContextProvider;