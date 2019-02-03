(function () {
  // var carouselArr = [
  //   {image: 'car.jpg', alt: 'Car'}, 
  //   {image: 'apple.jpg', alt: 'Apple'}
  // ];
  // var carouselIndex = 0;
  // var newSlider = [
  //   {image: 'peach.jpg', alt: 'peach'}, 
  //   {image: 'pineapple.jpg', alt: 'pineapple'},
  //   {image: 'tomato.jpg', alt: 'tomato'}
  // ];

  var slider = document.getElementById('slider');
  var slide = slider.getElementsByClassName('slider__img');

  console.log(slider)

  function getSliderInfo(a) {
    if (a < carouselArr.length) {
      console.log(carouselArr[a]);
    } else {
      console.log('Error');
    }
  }

  function nextSlide() {
    if (carouselIndex === (carouselArr.length - 1)) {
      carouselIndex = 0;
      return carouselArr[carouselIndex];
    }
    ++carouselIndex;
    return carouselArr[carouselIndex];
  }

  function prevSlide() {
    if(carouselIndex > 0) {
      --carouselIndex;
      return carouselArr[carouselIndex];
    }
    carouselIndex = carouselArr.length - 1;
    return carouselArr[carouselIndex];
  }

  function switchSlide(n) {
    if(n < carouselArr.length) {
      carouselIndex = n;
      return carouselArr[carouselIndex];
    }
    carouselIndex = carouselArr.length - 1;
    return carouselArr[carouselIndex];
  }

  function addItems(obj, index) {
    var arrIndex = index;
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        addItems(obj[i], arrIndex);
        ++arrIndex;
      }
    } else {
      if (index <= carouselIndex) {
        carouselArr.splice(arrIndex, 0, obj);
        carouselIndex++;
      } else if (index < array.length) {
        carouselArr.splice(arrIndex, 0, obj);
      } else {
        carouselArr.push(obj);
      }
    }
    return carouselArr;
  }

  function removeItem(index) {
    if (index <= carouselIndex) {
      carouselArr.splice(index, 1);
      carouselIndex--;
    } else if (index < carouselArr.length) {
      carouselArr.splice(index, 1);
    } else {
      console.log('Error');
    }
    return carouselArr;
  }
})();

