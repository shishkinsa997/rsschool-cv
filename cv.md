![userpic](https://github.com/shishkinsa997/rsschool-cv/blob/gh-pages/assets/userpic.jpg?raw=true)
# **Sergey Shishkin**

## <u>Contacts</u>
- shishkinsa1997@gmail.com
- [github.com/shishkinsa997](https://github.com/shishkinsa997)
- [Sergio Rossi (@shishkinsa997)](https://discord.com/users/373909855058001920)
- [@batmanpooop](https://t.me/batmanpooop)

---
## <u>Summary</u>
**Aimed** to start a career in web development as a front-end developer, gain experience and skills in creating user interfaces.

**Plan** to develop in the direction of full-stack development in order to become a more versatile specialist who is able to work with both sides — client and server.

**Strong** in the rapid learning and academic performance of new technologies with their application in practice. I am open to any tasks and requirements in projects. I am constantly striving to write clean and maintainable code.

## <u>Skills</u>
- **HTML/CSS** Knowledge of the basics of creating pages.
- **JavaScript** Basic programming skills, working with DOM, Vite assembler.
- **React** Understanding and ability to work with components and states.
- **Python** Basic skills. Working with objects.
- **Git system** Fundamentals of the version control system.

## <u>Sample code</u>
```js
function areObjectsEqual(obj1, obj2) {

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in obj1) {

    const value1 = obj1[key];
    const value2 = obj2[key];

    const areValuesObjects =
      typeof value1 === 'object' &&
      typeof value2 === 'object';

    if (areValuesObjects) {
      return areObjectsEqual(value1, value2)
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}
```
## <u>Learning experience</u>
**React-app**
[my-react-app](https://shishkinsa997.github.io/esoft)
Developed react-app. Worked with components and Vite bundler

[Museum Louvre](https://rolling-scopes-school.github.io/shishkinsa997-JSFEPRESCHOOL2025Q2/museum/)
One-page layout project developed on stage #0 RS school

[Mini Sandbox](https://sandbox-mini.vercel.app/)
Test project online sandbox for code compiled in Vite bundler

[Happy House](https://shishkinsa997.github.io/not-fight-club/)
SPA built as part of the not-fight-club task on stage #0 RS school

## <u>Education</u>
Hexlet. Python Basics (2023)
Esoft. Programming School (2024)
RS School. Front-end stage #0 (2025)
HTML Academy. Immersion in JavaScript (2025)

## <u>Languages</u>
English - B1, Russian - native