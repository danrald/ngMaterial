const injector = new Injector(); 
class HttpClient {
get(url: string) {
return fetch(url);
}
}
const httpToken = injector.provide(new HttpClient()); 
class UserService {
http = injector.inject(httpToken) 
getUsers() {
return this.http.get('https://example.com/api/users');
}
}
const userServiceToken = injector.provide(new UserService());
const userService = injector.inject(userServiceToken);
userService.getUsers(); 