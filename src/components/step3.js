import {BsTrashFill} from "react-icons/bs";
import React, {useState} from "react";
import {useAddRecipe} from "../context/AddRecipeProvider";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

function Step3() {
    const { register } = useAddRecipe();
    const {handleSubmit, formState: { errors } } = useForm();
    const [indexes, setIndexes] = useState([0]);
    const [counter, setCounter] = useState(1);

    const onSubmit = (data) => {
        console.log(data);
    };

    const addDirection = () => {
        setIndexes((prevIndexes) => [...prevIndexes, counter]);
        setCounter((prevCounter) => prevCounter + 1);
    };

    const removeDirection = (index) => () => {
        setIndexes((prevIndexes) => [
            ...prevIndexes.filter((item) => item !== index)
        ]);
        setCounter((prevCounter) => prevCounter - 1);
    };

    const clearDirections = () => {
        setIndexes([]);
    };
    console.log(indexes);

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="add-directions-form">
                {indexes.map((index) => {
                    const fieldName = `direction_${index}`;
                    return (
                        <div key={fieldName}>
                            <div className="direction-input-holder">
                                <label htmlFor={`${fieldName}Id`}>
                                    <input
                                        name={`${fieldName}`}
                                        id={`${fieldName}Id`}
                                        placeholder="Add an direction"
                                        type="text"
                                        {...register(`${fieldName}`)}
                                    />
                                </label>
                                <button
                                    type="button"
                                    className="btn remove"
                                    onClick={removeDirection(index)}
                                >
                                    <BsTrashFill className="eraserIcon"/>
                                </button>
                            </div>

                        </div>
                    )
                })}
                <div className="list-control-wrapper">
                    <button
                        type="button"
                        onClick={addDirection}
                        className="btn"
                    >
                        Add direction
                    </button>
                    <button
                        type="button"
                        onClick={clearDirections}
                        className="btn clear"
                    >
                        Clear directions list
                    </button>
                </div>
            </form>
        </>
    )
}

export default Step3;