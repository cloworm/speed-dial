<div align="center">
  <h1>Speed Dial Lightning Web Component</h1>
</div>

<div align="center">
  <h3>Speed Dial UI component inspired by <a href="https://material.io/components/buttons-floating-action-button#types-of-transitions" target="_blank" rel="noopener noreferrer">Material Design</a></h3>

  <img src="https://user-images.githubusercontent.com/5566310/113195156-ee0ed600-922f-11eb-9a69-0a9590da882a.gif">
</div>

## Overview

This themeable speed dial component is ideal for giving your users quick access to the 3-6 actions they perform most frequently

## Usage

See the example component in `./force-app/main/default/lwc/example` for a sample implementation.

### Component API

| Name                                      | Type   | Description                                                     |
| ----------------------------------------- | ------ | --------------------------------------------------------------- |
| options: { name: string, icon: string }[] | Input  | Array of 3 - 6 objects representing the actions you can perform |
| buttonclick: { detail }                   | Output | Emits the `name` of the button clicked                          |

### Theming

I used [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to define the styling of the component so that you can customize the theme of the component just like you would use the new [LDS Styling Hooks](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_components_css_custom_properties)

| Property                 | Default                              |
| ------------------------ | ------------------------------------ |
| --speed-dial-primary     | #ec7a25                              |
| --speed-dial-secondary   | #333333                              |
| --speed-dial-icon        | #fff                                 |
| ---speed-dial-text       | #e5e5e5                              |
| --speed-dial-font-family | "Salesforce Sans", Arial, sans-serif |
