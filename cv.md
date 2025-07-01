![userpic](https://github.com/shishkinsa997/rsschool-cv/blob/gh-pages/assets/userpic.jpg?raw=true)
# **Sergey Shishkin**

## <u>Contacts</u>
- shishkinsa1997@gmail.com
- [github.com/shishkinsa997](https://github.com/shishkinsa997)
- [Sergio Rossi (@shishkinsa997)](https://discord.com/users/373909855058001920)

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
function deepCopy(obj, copies = new WeakMap()) {
    // Проверка на примитив
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    // Проверка на циклические ссылки
    if (copies.has(obj)) {
        return copies.get(obj);
    }
    // Проверка и обработка на Date, Map, Set
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof Map) {
        return new Map(Array.from(obj, ([key, val]) => [deepCopy(key, copies), deepCopy(val, copies)]));
    }
    if (obj instanceof Set) {
        return new Set(Array.from(obj, val => deepCopy(val, copies)));
    }
    // Создаем новый объект или массив для глубокого копирования
    const copy = Array.isArray(obj) ? [] : {};

    // Запоминаем оригинал чтобы избежать цикл ссылок
    copies.set(obj, copy);

    // Рекурсивное копирование свойств
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key], copies);
        }
    }
    // Сохраняем свойства оригинала
    Object.setPrototypeOf(copy, Object.getPrototypeOf(obj));

    return copy;
}
```
## <u>Learning experience</u>
**React-app**
[my-react-app](https://shishkinsa997.github.io/esoft)
Developed react-app. Worked with components and Vite bundler

## <u>Education</u>
Esoft. Programming School (2024)
Hexlet. Python Basics (2023)

## <u>Languages</u>
English - B1, Russian - native