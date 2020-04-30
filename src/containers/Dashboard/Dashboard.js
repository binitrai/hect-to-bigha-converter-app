import React, {useState} from "react";
import classes from "./Dasboard.module.css";
import Input from "../../components/UI/Input/Input";
import {
    hectToBighaMandaDhur
} from "hect-to-bigha-converter";


function Dashboard(props) {
    const [bighaMandaDhur, setBighaMandaDhur] = useState("");
    const setOutput = (v) => {
        const value = v.target.value;
        let val = Number(value);
        if (isNaN(val)) {
            return false;
        }
        let [bigha, manda, dhur]  =  hectToBighaMandaDhur(val);
        let str = bigha + " Bigha " +  manda + " manda " + dhur + " dhur ";
        setBighaMandaDhur(str);
    }
    return (
            <section className={classes.Dashboard}>
               <h1>Converter</h1>
               <div className={classes.inputWrapper}>
                    <Input 
                        placeholder="Enter in hectare"
                        onChangeHandeler={setOutput}
                    />
                </div>
                <div className={classes.outputWrapper}>
                   {bighaMandaDhur}
                </div>
               

            </section>
        )
}

export default Dashboard;
