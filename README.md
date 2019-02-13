# jQuery.skill.percent
Простой настраиваемый jQuery plugin

![Image alt](https://pp.userapi.com/c851416/v851416584/b6a89/eMHDAmK8Hys.jpg)

## Демо
* [jQuery.skill.percent](https://krs999.github.io/jQuery.skill.percent/)

## Аттрибуты

```html
<div class="skill demo-skill" data-percent="95" data-percent-color="#E44D26" data-percent-mount-color="rgba(255,255,255,.1)">
  <p class="skill__title">HTML</p>
  <span class="skill__percent">0%</span>
</div>

<div class="skill demo-skill" data-percent="85" data-percent-color="#0170BA" data-percent-mount-color="rgba(255,255,255,.1)">
  <p class="skill__title">CSS</p>
  <span class="skill__percent">0%</span>
</div>
```

```javascript
$('.demo-skill').skillPercent({
  'speed': 40 //Скорость
});
```
## Настройки

```html
<div class="skill react">
  <p class="skill__title">React</p>
  <span class="skill__percent">0%</span>
</div>

<div class="skill angular">
  <p class="skill__title">Angular</p>
  <span class="skill__percent">0%</span>
</div>
```

```javascript
$('.react').skillPercent({
  'settings': true, //Настройки
  'speed': 50, //Скорость
  'color': '#61DAFB', //Верхний цвет
  'mount-color': 'rgba(255,255,255,.1)', //Цвет подложки
  'percent': 55, //Проценты
});
```
## Подключения

```html
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/jQuery.skill.percent.min.js"></script>
```

## Разработчик
* [KRS999](https://vk.com/krs999)
