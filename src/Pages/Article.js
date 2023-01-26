import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import IdNotFound from "../components/NotFound/IdNotFound";
import ArticleLayout from "../layouts/ArticleLayout";

const Article = () => {
    const { articleId } = useParams();
    const articleList = [
        "Nowadays, everybody wanna talk like they got somethin' to say",
        "But nothin' comes out when they move their lips,",
        "Just a bunch of gibberish",
    ];
    var articleText = articleList.map((e) => <span>{e}</span>);
    return (
        <ArticleLayout>
            <p>
                {articleId == "siwa" ? (
                    articleText
                ) : (
                    <IdNotFound
                        errorId={articleId}
                        title="articles"
                        link={"articles"}
                    ></IdNotFound>
                )}
            </p>
        </ArticleLayout>
    );
};

export default Article;
