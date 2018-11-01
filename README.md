# sendit
SendIT is a courier service that helps users deliver parcels to different destination


## How to use UI Framework?
To get started, you must call your css file in your html page

<link rel="stylesheet" href="css/style.0.1.css">

## 1. helpers

Wrap element with max width of 1280px
`.container`

Hide element

`.hide`

Hide element on large screen
`.hide-on-large`

Hide element on medium screen
`.hide-on-medium`

Hide element on small screen
`.hide-on-small`

### Border

initiate border
`.border`

border color
white
`.b-lite`

grey
`.b-grey`

red
`.b-red`

black
`.b-red`

indigo
`.b-indigo`

Clearfix
`.clear`

#### Aligment

center
`.center-align`

left
`.left-align`

right
`.right-align`


## 2. Playing with Padding

small padding

`.s-padding`
`.s-h-padding`
`.s-v-padding`

medium padding
`.m-padding`
`.m-h-padding`
`.m-v-padding`

large padding
`.l-padding`
`.l-h-padding`
`.l-v-padding`

extra large padding
`.xl-padding`
`.xl-h-padding`
`.xl-v-padding`

extra large padding
`.xxl-padding`
`.xxl-h-padding`
`.xxl-v-padding`

## 3. Playing with Margin

small margin

`.s-margin`
`.s-h-margin`
`.s-v-margin`

medium margin
`.m-margin`
`.m-h-margin`
`.m-v-margin`

large padding
`.l-margin`
`.l-h-margin`
`.l-v-margin`

extra large padding
`.xl-margin`
`.xl-h-margin`
`.xl-v-margin`

extra large padding
`.xxl-margin`
`.xxl-h-margin`
`.xxl-v-margin`

## 4. Typography

### font family

Paragraphs: exo

Heading: Krub

Small text
`.s-text`

Medium text
`.m-text`

Large text
`.l-text`

Extra large text
`.xl-text`

Extra-extra large text
`.xxl-text`




## 5. grid

Grid must be wrap in row
`.row`

|  | Small  |  Medium | Large |
| ------- | --- | --- | --- |
| Prefix | `.s` | `.m` | `.l` |

## 6. Color palette

white
`.white`

black
`.black`

grey
`.grey`

indigo
`.indigo`


## 7. form

input, textarea, radio, checkbox and button must be in `.input-field`

#### example
```
    <div class="input-field">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="your email">
    </div>
```

## 8. Button

initiate button
`.btn`


## 9. Managing Image

If your wrap to wrap image to fix the width of a container, you must add `.image` in the parent container of a image
