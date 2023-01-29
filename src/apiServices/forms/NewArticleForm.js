function NewArticleForm() {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input ></input>
            </label>
            <label>
                Subtitle:
                <input></input>
            </label>
            <label>
                Body:
                <textarea></textarea>
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default NewArticleForm;