import axios from 'axios';

function ajaxHeart(e) {
  e.preventDefault();
  axios.post(this.action)
  .then(res => {
    const isHearted = this.heart.classList.toggle('heart__button--hearted');
  })
  .catch(console.error)
}
export default ajaxHeart