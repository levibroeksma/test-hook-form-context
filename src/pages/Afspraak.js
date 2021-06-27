import React, { useState } from "react";
import Overzicht from "../components/Overzicht";
import Step1 from "../components/step1";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import Step4 from "../components/step4";

export default function Afspraak() {
    const [step, setStep] = useState(1);

    return (
        <div className="page-wrapper">
            <div className="button-wrapper">
                <button onClick={() => setStep(step - 1)} disabled={step === 1}>
                    Previous step
                </button>
                <button onClick={() => setStep(step + 1)} disabled={step === 5}>
                    Next step
                </button>
            </div>
            <h1>Add your recipe</h1>
            {step === 1 && (
                <div>
                    <Step1 />
                </div>
            )}
            {step === 2 && (
                <div>
                    <Step2 />
                </div>
            )}
            {step === 3 && (
                <div>
                    <Step3/>
                </div>
            )}
            {step === 4 && (
                <div>
                    <Step4/>
                </div>
            )}
            {step === 5 && (
                <div>
                    <Overzicht />
                </div>
            )}

        </div>
    );
}