import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onClick }) => {
  return <button onClick= {onClick } type="button" className={css.loadBtn}>
  Load more
</button>;
}

export default LoadMoreBtn
