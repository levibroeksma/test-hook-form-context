import {useForm} from "react-hook-form";
import FlagSelector from "./FlagSelector";
import {useAddRecipe} from "../context/AddRecipeProvider";

function Step4() {
    const {handleSubmit, formState: { errors }} = useForm();
    const { register } = useAddRecipe();
    const onSubmit = (data) => {
        console.log(data)
    }


    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} id="recipe-detail-form">
                <label htmlFor="country-flags">
                    <input
                        list="country-flags"
                        placeholder="Country of origin"
                        className="textInput"
                        name="country-flags"
                        {...register("country-flags")}
                    />
                </label>
                <FlagSelector
                    id="country-flags"
                />
                <label htmlFor="cooking-time">
                    <input
                        type="number"
                        placeholder="Cooking time"
                        name="cooking-time"
                        {...register("cooking-time")}
                        required
                    />
                </label>
                <label htmlFor="calories">
                    <input
                        type="number"
                        placeholder="Calories"
                        name="calories"
                        {...register("calories")}
                    />
                </label>

                <div className="checkbox-wrapper">
                    <div className="checkbox-wrapper-inner">
                        <label htmlFor="vegetarian">
                            <input
                                type="checkbox"
                                name="vegetarian"
                                {...register("vegetarian")}
                            /> Vegetarian
                        </label>
                        <label htmlFor="vegan">
                            <input
                                type="checkbox"
                                name="vegan"
                                {...register("vegan")}
                            /> Vegetarian
                        </label>
                        <label htmlFor="beef">
                            <input
                                type="checkbox"
                                name="beef"
                                {...register("beef")}
                            /> Beef
                        </label>
                        <label htmlFor="fish">
                            <input
                                type="checkbox"
                                name="fish"
                                {...register("fish")}
                            /> Fish
                        </label>
                        <label htmlFor="pork">
                            <input
                                type="checkbox"
                                name="pork"
                                {...register("pork")}
                            /> Fish
                        </label>
                        <label htmlFor="lamb">
                            <input
                                type="checkbox"
                                name="lamb"
                                {...register("lamb")}
                            /> Fish
                        </label>
                        <label htmlFor="spicy">
                            <input
                                type="checkbox"
                                name="spicy"
                                {...register("spicy")}
                            /> Fish
                        </label>
                        {/*<Checkbox*/}
                        {/*    labelTitle="Vegetarian"*/}
                        {/*    name="vegetarian"*/}
                        {/*    labelId="vegetarianId"*/}
                        {/*    required={false}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}
                        {/*<Checkbox*/}
                        {/*    labelTitle="Vegan"*/}
                        {/*    name="vegan"*/}
                        {/*    labelId="veganId"*/}
                        {/*    required={false}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}
                        {/*<Checkbox*/}
                        {/*    labelTitle="Fish"*/}
                        {/*    name="fish"*/}
                        {/*    labelId="fishId"*/}
                        {/*    required={false}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}
                        {/*<Checkbox*/}
                        {/*    labelTitle="Beef"*/}
                        {/*    name="beef"*/}
                        {/*    labelId="beefId"*/}
                        {/*    required={false}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}
                        {/*<Checkbox*/}
                        {/*    labelTitle="Pork"*/}
                        {/*    name="pork"*/}
                        {/*    labelId="porkId"*/}
                        {/*    required={false}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}
                        {/*<Checkbox*/}
                        {/*    labelTitle="Lamb"*/}
                        {/*    name="lamb"*/}
                        {/*    labelId="lambId"*/}
                        {/*    required={false}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}
                        {/*<Checkbox*/}
                        {/*    labelTitle="Spicy"*/}
                        {/*    name="spicy"*/}
                        {/*    labelId="spicyId"*/}
                        {/*    required={false}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}
                    </div>
                </div>
            </form>
        </>
    )
}

export default Step4;