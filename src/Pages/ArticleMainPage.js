import ArticleLayout from "../layouts/ArticleLayout";
import { useEffect, useState } from "react";

const ArticlesMainPage = () => {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        const fetchData = () => {
            fetch("flask/articles")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log(data);
                });
        };
        fetchData();
    }, []);

    return (
        <ArticleLayout>
            <h3 style={{ fontWeight: "200" }}>
                Told you i was a charlatan...😂😂😂
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>I will update this section soon
            </h3>
        </ArticleLayout>
    );
};

export default ArticlesMainPage;
