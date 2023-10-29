# One Page Site
## Programming for Design (11055), Semester 2 2023
## Long Nguyen (u3225009)

### Page Structure

The website is divided into sections using <div> elements. Each section takes up the whole screen, and users can scroll down to explore more content.

### Navigation

When users land on the site, a scroll button guides them. Clicking this button smoothly scrolls down the page, ensuring users understand how to navigate the site easily. The button uses 'href' to scroll down so no JS is used here.

### Sections

In the second section, clicking on the text triggers the text to change. This is done by storing phrases in a list and assigning them a numberical index number. As users click, the index number increases and changes the phrase. It can also loop back to the beginning when the last number is clicked.

The third section has a button that, when clicked, shows an animation of numbers increasing. This is done by setting initial number and target number (when it will stop), then setting an number increasing interval. Another function checks if the target number is reached yet. If not, it adds the increment number until it does. Making the numbers go up gradually adds a level of anticipation and immersion to the number.

The fourth section displays a image gallery. It cycles through four images, each accompanied by interesting facts. This also uses code similar to the second section where it stores the images in the set list instead of text. I also added buttons to the sides of the images for the user to manually change it in whichever direction they like.