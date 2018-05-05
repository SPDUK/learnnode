import axios from 'axios';

function ajaxHeart(e) {
  e.preventDefault();
  axios
    .post(this.action)
    .then(res => {
      const isHearted = this.heart.classList.toggle('heart__button--hearted');
      document.querySelector('.heart-count').textContent = res.data.hearts.length;
      if (isHearted) {
        this.heart.classList.add('heart__button--float');
        setTimeout(() => this.heart.classList.remove('heart-button--float'), 2500);
      }
    })
    .catch(console.error);
}
export default ajaxHeart;
