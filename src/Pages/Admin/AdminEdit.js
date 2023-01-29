import { useParams } from "react-router-dom";
import React, { useState,useEffect } from "react";
const AdminEdit = () => {
    const params = useParams();
    const { sub } = params;

    const [data, setData] = useState([{}]);
    useEffect(() => {
        const fetchData = () => {
            fetch("flask/new-article")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                });
        };
        fetchData();
    }, []);
    return <></>;
};



export default AdminEdit;
