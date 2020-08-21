import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as articlesActions from '../actions/articles.actions';

let Home = ({ articles, loadAllArticles }) => {
  useEffect(() => {
    fetch('http://localhost:3001/articles')
      .then((res) => res.json())
      .then(
        (result) => {
          loadAllArticles(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [loadAllArticles]);

  return (
    <>
      <Link to="/myAccount">Pour aller sur my account.</Link>
      {articles.map((article) => (
        // check if getting mongo id front side is OK or not
        <div key={article._id}>Nom de l'article : {article.name}</div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
  loadAllArticles: (articles) =>
    dispatch(articlesActions.loadAllArticles(articles)),
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
