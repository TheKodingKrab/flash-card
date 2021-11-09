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

### Check-in 3
- 


### Check-in 4
- 


