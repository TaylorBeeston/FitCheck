import React, { useState, useEffect, useRef } from "react";
import fitty, { FittyInstance } from "fitty";

const FitCheck: React.FC<{ className?: string }> = ({ className = "" }) => {
    const [state, setState] = useState("");
    const outputText = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let fit: FittyInstance;
        if (outputText.current) fit = fitty(outputText.current);

        return () => fit?.unsubscribe();
    }, [outputText.current]);

    return (
        <section className={className}>
            {/* Fitty _container_ MUST have a "set" width! (I.e. not implicit from flexbox) */}
            <output style={{ width: "100%" }}>
                <span ref={outputText}>{`${state || 0} USD`}</span>
            </output>
            <input
                type="number"
                step=".0001"
                value={state || "0"}
                onChange={(e) => setState(e.target.value)}
            />
        </section>
    );
};

export default FitCheck;
