import React from 'react'
import './lesson_4';

const Lesson4 = () => {
    // Task 05
    // Создайте литерал объекта handlePromise со следующими свойствами:
    // promise, resolve, reject, onSuccess, onError
    // Проинициализируйте первые три свойства null,
    // а последние два функциями, которые принимают один параметр и выводят
    // в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
    // вторая - `Promise is rejected with error: ${paramName}`
    // Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".

    // Первый обработчик, создает промис, заполняет первые три свойства,
    // описаного выше объекта: свойство promise получает новый созданный промис,
    // свойства resolve и reject получают ссылки на соответствующие функции
    // resolve и reject. Следующие два обработчика запускают методы resolve и reject.

    type handlePromiseType = {
        promise: any
        resolve: any
        reject: any
        onSuccess: (paramName: string) => void
        onError: (paramName: string) => void
    }

    const handlePromise: handlePromiseType = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess: (paramName: string) => console.log(`Promise is resolved with data: ${paramName}`),
        onError: (paramName: string) => console.log(`Promise is rejected with error: ${paramName}`)
    }

    const createPromiseHandler = () => {
        handlePromise.promise = new Promise((resolve, reject) => {
            handlePromise.resolve = resolve
            handlePromise.reject = reject
        })
    }
    const resolvePromiseHandler = () => {
        handlePromise.resolve()
        console.log(handlePromise)
    }

    const rejectPromiseHandler = () => {
        handlePromise.reject()
        console.log(handlePromise)
    }

    return (
        <div>
            <button onClick={createPromiseHandler} id='btn-create-promise'>Create Promise</button>
            <button onClick={resolvePromiseHandler} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={rejectPromiseHandler} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;