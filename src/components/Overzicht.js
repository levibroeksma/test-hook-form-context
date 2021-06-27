import React from "react";
import {useAddRecipe} from "../context/AddRecipeProvider";

export default function Overzicht() {
    const { handleSubmit, watch } = useAddRecipe();

    const { title, description } = watch();

    function onSubmit(data) {
        console.log("ALLE DATA?", data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{title}</h2>
                <p>{description}</p>
                <input type="submit" />
            </form>
        </div>
    );
}