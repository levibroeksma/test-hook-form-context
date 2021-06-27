import {useAddRecipe} from "../context/AddRecipeProvider";

function Step1(props) {

    const { register } = useAddRecipe();

    return (
        <div className="step-wrapper">
            <h3>Add a title and description</h3>

            <label id="titleLabel" htmlFor="title">
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title..."
                    {...register("title")}
                    required
                />
            </label>
            <label htmlFor="description">
                <textarea
                    name="description"
                    id="description"
                    placeholder="Please write a short description..."
                    {...register("description")}
                    required
                />
            </label>
        </div>
    );
}

export default Step1;