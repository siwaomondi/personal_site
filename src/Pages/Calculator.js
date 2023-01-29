import { Input } from "@mui/material";
import MiscallenousLayout from "../layouts/MiscallenousLayout";

const Calculator = () => {
    return (
        <MiscallenousLayout
            title="Calculator"
            description="calc for personal stuff"
        >
            <section id="calculator">
                <form>
                    <label>Enter coop number:</label>
                    <input type="text" id="result" readOnly />
                    <input type="text" id="num" placeholder="enter a number" />
                    <button>Add</button>
                    <button>Clear</button>
                </form>
            </section>
        </MiscallenousLayout>
    );
};

export default Calculator;
