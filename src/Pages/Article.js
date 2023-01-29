import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IdNotFound from "../components/NotFound/IdNotFound";
import ArticleLayout from "../layouts/ArticleLayout";

const Article = () => {
    const { id } = useParams();
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const fetchData = () => {
            fetch(`flask/articles/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                });
        };
        fetchData();
    }, []);

    return (
        <ArticleLayout>
            <p>
                {id === "siwa" ? (
                    "Siwa welcome"
                ) : (
                    <IdNotFound
                        errorId={id}
                        title="articles"
                        link={"articles"}
                    ></IdNotFound>
                )}
            </p>
        </ArticleLayout>
    );
};

export default Article;
