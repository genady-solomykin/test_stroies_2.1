"use strict";

try {
  document.addEventListener('DOMContentLoaded', function () {
    console.log(window.StoriesSlider);
    new StoriesSlider(document.getElementById("app"), {
      stories: [{
        name: "Первая",
        photo: "https://goldapple.ru/media//stories/preview_path/story_cover_24.05.22_new_1.jpg",
        items: [{
          url: "https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg",
          type: "image"
        }, {
          url: "https://simg.marwin.kz/media/stories/1-napitok-drpepper-23-polsha.mp4",
          type: "video"
        }, {
          url: "https://simg.marwin.kz/media/stories/4-shahmaty-harry-potter.mp4",
          type: "video"
        }]
      }, {
        name: "Вторая",
        photo: "https://goldapple.ru/web_scripts/webp/stories/preview_path/story_cover_01.08_Sale50_2_.jpg",
        items: [{
          url: "https://proprikol.ru/wp-content/uploads/2020/02/skachat-krasivye-kartinki-na-telefon-besplatno-4.jpg",
          type: "image"
        }, {
          url: "https://simg.marwin.kz/media/stories/5-napitok-jenergeticheskij-monster-energy.mp4",
          type: "video"
        }]
      }]
    });
  });
} catch (e) {
  console.error(e);
}