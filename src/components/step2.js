import {useAddRecipe} from "../context/AddRecipeProvider";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {BsTrashFill} from "react-icons/bs";

export default function Step2() {
    const { register } = useAddRecipe();
    const {handleSubmit, formState: { errors } } = useForm();
    const [indexes, setIndexes] = useState([0]);
    const [counter, setCounter] = useState(1);

    const onSubmit = (data) => {
        console.log(data);
    };

    const addIngredient = () => {
        setIndexes((prevIndexes) => [...prevIndexes, counter]);
        setCounter((prevCounter) => prevCounter + 1);
    };

    const removeIngredient = (index) => () => {
        setIndexes((prevIndexes) => [
            ...prevIndexes.filter((item) => item !== index)
        ]);
        setCounter((prevCounter) => prevCounter - 1);
    };

    const clearIngredients = () => {
        setIndexes([]);
    };
    console.log(indexes);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="add-ingredient-form">
                {indexes.map((index) => {
                    const fieldName = `ingredient_${index}`;
                    return (
                        <div key={fieldName}>
                            <div className="ingredient-input-holder">
                                <label htmlFor={`${fieldName}Id`}>
                                    <input
                                        name={`${fieldName}`}
                                        id={`${fieldName}Id`}
                                        placeholder="Add an ingredient"
                                        type="text"
                                        {...register(`${fieldName}`)}
                                    />
                                </label>
                                <label htmlFor="">
                                    <button
                                        type="button"
                                        className="btn remove"
                                        onClick={removeIngredient(index)}
                                    >
                                        <BsTrashFill className="eraserIcon"/>
                                    </button>
                                </label>
                            </div>

                        </div>
                    )
                })}
                <div className="list-control-wrapper">
                    <button
                        type="button"
                        onClick={addIngredient}
                        className="btn"
                    >
                        Add ingredient
                    </button>
                    <button
                        type="button"
                        onClick={clearIngredients}
                        className="btn clear"
                    >
                        Clear ingredient list
                    </button>
                </div>
            </form>
        </>
    );
}