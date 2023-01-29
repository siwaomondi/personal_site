import { Switch, FormGroup, FormControlLabel } from "@mui/material";
import React, {useState, useEffect } from "react";

const Age = (props) => {
    const [age, setAge] = useState();
    const [counterOn, setCounter] = useState(true);

    const ageCounter = () => {
        const ageData = props.ageData;
        const divisor = 1000 * 60 * 60 * 24 * 365; // ms in an year
        const birthTime = new Date(
            ageData.year,
            ageData.month,
            ageData.date,
            ageData.hour,
            ageData.minute
        );
        const today = new Date();
        const months = today.getMonth() - birthTime.getMonth();
        const days = today.getDate() - birthTime.getDate();
        const hours = today.getHours() - birthTime.getHours();
        const minutes = today.getMinutes() - birthTime.getMinutes();
        const conditions = [
            months < 0,
            months === 0 && days < 0,
            months === 0 && days === 0 && hours < 0,
            months === 0 && days === 0 && hours === 0 && minutes < 0,
        ];
        let refYear = today.getFullYear(); // reference year to calculate age in decimals (could be current or previous)
        let ageInYears = refYear - birthTime.getFullYear();
        /*********Run multiple checks to get the basepoint of reference year and age in Years*********/
        if (conditions[0] || conditions[1] || conditions[2] || conditions[3]) {
            ageInYears--;
            refYear--;
        }
        if (counterOn) {
            const latestBirthday = new Date(
                refYear,
                ageData.month,
                ageData.date,
                ageData.hour,
                ageData.minute
            );
            const msCount = ((Date.now() - latestBirthday) / divisor).toFixed(
                12
            );
            const ageString = `${ageInYears}.${msCount.split(".")[1]}`; //formatted concatenated age
            setAge(ageString);
        } else setAge(ageInYears);
    };

    const counterChange = (event) => {
        setCounter(event.target.checked);
        console.log(counterOn);
    };

    useEffect(() => {
        let timer = ageCounter();
        if (counterOn) {
            timer = setInterval(() => {
                ageCounter();
            }, 25);
        }
        return () => {
            clearInterval(timer);
        };
    }, [counterOn]);

    return (
        <>
            {age}
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            onChange={counterChange}
                            defaultChecked
                            size="small"
                        />
                    }
                    label={counterOn ? "Counter On" : "Counter Off"}
                />
            </FormGroup>
        </>
    );
};

Age.defaultProps = {
    ageData: {
        year: 1990,
        month: 0, //birthmonth range is [0-11]
        date: 1,
        hour: 0,
        minute: 0,
        second: 0,
    },
};

export default Age;
