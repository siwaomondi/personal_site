import os
import date

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship


app = Flask(__name__,subdomain_matching=True)
app.config['SERVER_NAME'] = "localhost:5000" #TODO:modify for build and deployment

#ADMIN ROUTE
admin_subdomain = os.getenv['REACT_APP_CUCYVIBVNKFD']
print(admin_subdomain)

##CONNECT TO DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flask_app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class ArticlePost(db.Model):
    __tablename__ = "article_posts"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    subtitle = db.Column(db.String(250), nullable=False)
    date = db.Column(db.String(250), nullable=False)
    body = db.Column(db.Text, nullable=False)


@app.route("/")
def getHome():
    return {
        "home":"page hello"
    }


@app.route("/flask/new_article", methods=['POST', 'GET'], subdomain=admin_subdomain,strict_slashes=False)
def add_new_post():
    # if form.validate_on_submit():
    #     new_post = BlogPost(
    #         title=form.title.data,
    #         subtitle=form.subtitle.data,
    #         body=form.body.data,
    #         img_url=form.img_url.data,
    #         author=current_user,
    #         date=date.today().strftime("%B %d, %Y")
    #     )

    #     db.session.add(new_post)
    #     db.session.commit()
    #     return redirect(url_for("get_all_posts"))
    # return render_template("make-post.html", form=form)
    return {"making new article"}


@app.route("/flask/articles")
def get_all_articles():
    posts = ArticlePost.query.all()
    return posts

@app.route("/flask/articles/<string:article_url>")
def getArticle(article_url):
    x = 1 if article_url == 'siwa' else "Not 1"
    print("Article opened")
    return {
        "article":x,
        "members":["member1","member3","member3"]
    }


if __name__ == "__main__":
    #TODO: remove debug during deployment
    app.run(port=5000, debug=True)