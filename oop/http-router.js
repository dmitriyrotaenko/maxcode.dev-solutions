/*
Реализуйте класс HttpRouter, который умеет обрабатывать http-запросы. 
Класс должен поддерживать всего два метода: addHandler и runRequest. 
С помощью addHandler можно добавить функцию, которая должна вызываться для определенного эндпоинта и http-метода. 
С помощью runRequest можно «сделать запрос».
Если соответствующего эндпоинта или метода нет, runRequest возвращает строку "Error 404: Not Found".
*/ 

class HttpRouter {
  constructor() {
    this.requests = {};
  }
  
  addHandler(path, verb, cb) {
    this.requests[path] ??= {};
		this.requests[path][verb] = cb;
  }

  runRequest(path, verb) {
    return this.requests?.[path]?.[verb]?.() ?? 'Error 404: Not Found';
  }
}

const router = new HttpRouter();

router.addHandler("/api/users", "GET", () => {
  return ["user1", "user2"];
});

router.addHandler("/api/users", "POST", () => {
  return "User added";
});

router.addHandler("/api/login", "POST", () => {
  return "OK";
});

console.log(router.runRequest("/api/users", "GET"));
// ["user1", "user2"]

console.log(router.runRequest("/api/login", "POST"));
// "OK"

console.log(router.runRequest("/api/login", "PUT"));
// "Error 404: Not Found"

console.log(router.runRequest("/api/send", "POST"));
// "Error 404: Not Found"

