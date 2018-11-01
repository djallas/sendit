# sendit
SendIT is a courier service that helps users deliver parcels to different destination


## How to use UI Framework?
To get started, you must call your css file in your html page

<link rel="stylesheet" href="css/style.0.1.css">

### Font family used: 

Paragraphs: exo
Heading: Krub

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

Initiate border
`.border`

Border color
White
`.b-lite`

Grey
`.b-grey`

Red
`.b-red`

Black
`.b-red`

Indigo
`.b-indigo`

Clearfix
`.clear`

#### Aligment

Center
`.center-align`

Left
`.left-align`

Right
`.right-align`


## 2. Playing with Padding

**-h-** indicate that the property is applied horizontally on a given selector
**-v-** indicate that the property is applied veritically on a given selector

Small padding

`.s-padding`
`.s-h-padding`
`.s-v-padding`

Medium padding

`.m-padding`
`.m-h-padding`
`.m-v-padding`

Large padding

`.l-padding`
`.l-h-padding`
`.l-v-padding`

Extra large padding

`.xl-padding`
`.xl-h-padding`
`.xl-v-padding`

Extra large padding

`.xxl-padding`
`.xxl-h-padding`
`.xxl-v-padding`

## 3. Playing with Margin

**-h-** indicate that the property is applied horizontally on a given selector
**-v-** indicate that the property is applied veritically on a given selector

Small margin

`.s-margin`
`.s-h-margin`
`.s-v-margin`

Medium margin
`.m-margin`
`.m-h-margin`
`.m-v-margin`

Large padding
`.l-margin`
`.l-h-margin`
`.l-v-margin`

Extra large padding
`.xl-margin`
`.xl-h-margin`
`.xl-v-margin`

Extra large padding
`.xxl-margin`
`.xxl-h-margin`
`.xxl-v-margin`

## 4. Typography

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

White
`.white`

Black
`.black`

Grey
`.grey`

Indigo
`.indigo`


## 7. form

Input, textarea, radio, checkbox and button must be in `.input-field` `div` or `p`

#### example
```
    <div class="input-field">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="your email">
    </div>
```

## 8. Button

Initiate button
`.btn`


## 9. Managing Image

If your wrap to wrap image to fix the width of a container, you must add `.image` in the parent container of a image
