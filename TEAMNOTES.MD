# Team Notes:
This is for maintaining communication about your team's working meetings to "ship" the project.

## Meeting Notes:
These are notes to be maintained PER date that you meet. What you did and what the next steps are.
### Meeting Date
In Class **11-4-2021**: Discuss choices for project 3- flash card as well as designs for the check- in 1.

#### What we did:


#### What we'll do next:


## Status check ins
These are dedicated status check-ins as this is a multi-week project.

### Check-in 1
- What project / issue your picking (link to it)?
  * A **flash card**
  * https://github.com/elmsln/issues/issues/881
  * https://h5p.org/flashcards#example=733
 
- A hand drawn / computer sketch / XD / some annotation visually of what needs to be done or what pieces get broken out. This could be drawn on over top of a screen shot of the item or a photo of whiteboard sketches. Whatever make the most sense to you.

  * Image:
 ![Whiteboard drawing of the sketch](https://user-images.githubusercontent.com/54961655/140581038-10c788ee-e080-4ac7-bebd-bab248d2a23a.jpg)


- Initial questions / unknowns
  * How should the try again button be implemented?
  * Animations/ potenital flips?
  * Reset of all the components?
 
- What elements do you expect are needed for this design?
  * Image/Icon
  * Question
  * Space for Answer 
  * Check Button-- Correct/Incorrect
  * Retry button
  
- What properties do you expect these to have?

- Slots?
  * Image
  * Question
  * Correct Answer
  * Button
  
- What CSS / styling unknowns are there presently?
  * The composition

- What states does it have? can you click / hover to engage with it?
  * Click to check the correct answer
  * Hover property can be considered

- What properties need mapped to HAX / the storybook? What can the user interact with?
  * The user should be able to change the answer and select the check button.
  
### Check-in 2
- What did we accomplish?
  * We renames files, tags- naming conventions.
  * Added files for the future and gathered information to make a baseline.
  
- Next steps:
  * Taylor: Support for an image with slotted content, images connected to the questions
    --Should work with or without an image; this could also be slotted material so that it can be anything
    --Support for an image / slotted area of flexible content, question being asked, right answer, ability to change color
  * Hannah: Image to work with or without an image
  * Colton: Try again and click/retry button
   --This comp does not have a button for "try again" but needs one for accessibility
   --Must visualize state for correct and incorrect
  * Evan:
    --Demo must have multiple flash cards listed on it and load data in from a JSON blob using .map function to print out multiples
    --i18n support so that labels in element are translatable

  - Progress: 
  * Corrected issues with excess files and unneeded code. Created a proper and logical file structure. 
  * Imported our previous button and updated the button's functionality. 
  * Added some I18 functionality and support for multiple different languages. 
  * Updated visual and stylistic elements to make it more accesible and appealing visually.
  
     

### Check-in 3
- What your group got done since last check in (so last week + whenever else you work)
   *
-What insights you gained from the class activity to implement
   * From the in class activity, we gained some insight on a better way to structure out the content of the card for the flashcard. We also have some import suggestions to add as an addition to our flashcard. Correct or incorrect logic also needs to be implemented in order to manage user input. There is still a lot to be done and desired.
   * Need to render the card body and the answer content seperately. Modify the card into seperate divs with slotted content to improve design. 
   * Added more language support for i18 such as French and German. 
   * Modified card style to be more appealing and for the flash card to have a dark mode. 
-What your next steps are?
- Next steps:
  * Taylor: Support for an image with slotted content, images connected to the questions
    --Should work with or without an image; this could also be slotted material so that it can be anything
    --Support for an image / slotted area of flexible content, question being asked, right answer, ability to change color
  * Hannah: Image to work with or without an image
  * Colton: Try again and click/retry button
   --This comp does not have a button for "try again" but needs one for accessibility
   --Must visualize state for correct and incorrect
  * Evan: Add additional functionality to buttons for changing language, checking user answer, and flipping the card. Need to fix an issue where toggling language doesn't chnage to all languages in locales, need a button to flip the card to only show the correct answer, need to change the check answer button to show different icons when the response is right or wrong. 
  

**Your design should be taking shape** 
**Your logic layer should be starting to come together**
**You should at least take a stab at modifying the haxProperties HAXSchema to map to your element and understand that relationship.**
**TEAMNOTES.md updated to reflect the above + code to actually back up that your not writing things like "we talked a bunch" as I read these and am not dumb.**


### Check-in 4
- 


