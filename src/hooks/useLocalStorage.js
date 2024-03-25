import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);



    React.useEffect(() => {
        setTimeout(() =>{
            try{
                const localStorageItem = localStorage.getItem(itemName);
      
                let parsedItem;
        
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                  } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                  }
        
                  setLoading(false);
    
            } catch(error){
                setLoading(false)
                setError(true)
            }

        }, 2000)
    }, []);

  
  
  
    const saveItem = (newItem) => {
      localStorage.setItem('TODOSAPP_V1', JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
        item,
        saveItem,
        loading,
        error}
  };

  export {useLocalStorage}


  // const defaultTodos = [
//   {text:'Cortar cebolla', completed: true },
//   {text:'Estudiar Tanstack Query', completed: false },
//   {text:'Conseguir empleo como desarrolladora frontend', completed: true },
//   {text:'Cenar', completed: false },
// ]

// localStorage.setItem('TODOSAPP_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOSAPP_V1');