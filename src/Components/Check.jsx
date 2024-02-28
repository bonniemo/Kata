import { useState } from "react";

const Check = () => {

    const [cat, setCat] = useState(false);

    const handleChangeCat = () => {
        setCat(!cat);       
    }

    const [dog, setDog] = useState(false);

    const handleChangeDog = () => {
        setDog(!dog);       
    }

    return (
        <>
            <input onChange={handleChangeDog} type="checkbox" />
            <label htmlFor="dog">Dog</label>

            <input onChange={handleChangeCat} type="checkbox" />
            <label htmlFor="cat">Cat</label>

            <p>{cat && dog ? 'Katt och Hund' : (cat ? 'Katt' : (dog ? 'Hund' : ''))}</p>
           

        </>
    )
}
export default Check;