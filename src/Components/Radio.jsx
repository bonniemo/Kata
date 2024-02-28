import { useState } from "react";

const Radio = () => {
    const [drone, setDrone] = useState('');

    const handleChange = (e) => {
        setDrone(e.target.value);
    }

    return (
        <>
            <fieldset>
                <legend>Select a maintenance drone:</legend>

                <div>
                    <input
                        onChange={handleChange}
                        type="radio" id="huey" name="drone" value="huey"  />
                    <label htmlFor="huey">Huey</label>
                </div>

                <div>
                    <input
                    onChange={handleChange} 
                    type="radio" id="dewey" name="drone" value="dewey" />
                    <label htmlFor="dewey">Dewey</label>
                </div>

                <div>
                    <input
                    onChange={handleChange}
                    type="radio" id="louie" name="drone" value="louie" />
                    <label htmlFor="louie">Louie</label>
                </div>
            </fieldset>

            <p>{drone}</p>
        </>
    )
}

export default Radio;