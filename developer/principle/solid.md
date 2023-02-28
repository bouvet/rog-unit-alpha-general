# SOLID Principle in Programming: Understand With Real Life Examples

[Ref](https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/)

In software development, **Object-Oriented Design** plays a crucial role when it comes to writing flexible, scalable, maintainable, and reusable code. There are so many benefits of using OOD but every developer should also have the knowledge of the SOLID principle for good object-oriented design in programming. The SOLID principle was introduced by _**Robert C. Martin**_, also known as _Uncle Bob_ and it is a coding standard in programming. This principle is an acronym of the five principles which is given below…

1.  Single Responsibility Principle (SRP)
2.  Open/Closed Principle
3.  Liskov’s Substitution Principle (LSP)
4.  Interface Segregation Principle (ISP)
5.  Dependency Inversion Principle (DIP)

The SOLID principle helps in reducing tight coupling. Tight coupling means a group of classes are highly dependent on one another which you should avoid in your code. Opposite of tight coupling is loose coupling and your code is considered as a good code when it has loosely-coupled classes. Loosely coupled classes minimize changes in your code, helps in making code more reusable, maintainable, flexible and stable. Now let’s discuss one by one these principles…

**1\. Single Responsibility Principle:** This principle states that “_a class should have only one reason to change_” which means every class should have a single responsibility or single job or single purpose. Take the example of developing software. The task is divided into different members doing different things as front-end designers do design, the tester does testing and backend developer takes care of backend development part then we can say that everyone has a single job or responsibility.  
Most of the time it happens that when programmers have to add features or new behavior they implement everything into the existing class which is completely wrong. It makes their code lengthy, complex and consumes time when later something needs to be modified. Use _layers_ in your application and break God classes into smaller classes or modules.

**2\. Open/Closed Principle:** This principle states that “_software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification_” which means you should be able to extend a class behavior, without modifying it.  
Suppose developer A needs to release an update for a library or framework and developer B wants some modification or add some feature on that then developer B is allowed to extend the existing class created by developer A but developer B is not supposed to modify the class directly. Using this principle separates the existing code from the modified code so it provides better stability, maintainability and minimizes changes as in your code.

**3\. Liskov’s Substitution Principle:** The principle was introduced by Barbara Liskov in 1987 and according to this principle “_Derived or child classes must be substitutable for their base or parent classes_“. This principle ensures that any class that is the child of a parent class should be usable in place of its parent without any unexpected behavior.  
You can understand it in a way that a farmer’s son should inherit farming skills from his father and should be able to replace his father if needed. If the son wants to become a farmer then he can replace his father but if he wants to become a cricketer then definitely the son can’t replace his father even though they both belong to the same family hierarchy.  
One of the classic examples of this principle is a rectangle having four sides. A rectangle’s height can be any value and width can be any value. A square is a rectangle with equal width and height. So we can say that we can extend the properties of the rectangle class into square class. In order to do that you need to swap the child (square) class with parent (rectangle) class to fit the definition of a square having four equal sides but a derived class does not affect the behavior of the parent class so if you will do that it will violate the Liskov Substitution Principle. Check the link [Liskov Substitution Principle](https://www.youtube.com/watch?v=Jecou7B3nhc) for better understanding.

**4\. Interface Segregation Principle:** This principle is the first principle that applies to Interfaces instead of classes in SOLID and it is similar to the single responsibility principle. It states that “_do not force any client to implement an interface which is irrelevant to them_“. Here your main goal is to focus on avoiding fat interface and give preference to many small client-specific interfaces. You should prefer many client interfaces rather than one general interface and each interface should have a specific responsibility.  
Suppose if you enter a restaurant and you are pure vegetarian. The waiter in that restaurant gave you the menu card which includes vegetarian items, non-vegetarian items, drinks, and sweets. In this case, as a customer, you should have a menu card which includes only vegetarian items, not everything which you don’t eat in your food. Here the menu should be different for different types of customers. The common or general menu card for everyone can be divided into multiple cards instead of just one. Using this principle helps in reducing the side effects and frequency of required changes.

**5\. Dependency Inversion Principle:** Before we discuss this topic keep in mind that Dependency Inversion and [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection) both are different concepts. Most of the people get confused about it and consider both are the same. Now two key points are here to keep in mind about this principle

- High-level modules/classes should not depend on low-level modules/classes. Both should depend upon abstractions.
- Abstractions should not depend upon details. Details should depend upon abstractions.

The above lines simply state that if a high module or class will be dependent more on low-level modules or class then your code would have tight coupling and if you will try to make a change in one class it can break another class which is risky at the production level. So always try to make classes loosely coupled as much as you can and you can achieve this through _abstraction_. The main motive of this principle is decoupling the dependencies so if class A changes the class B doesn’t need to care or know about the changes.  
You can consider the real-life example of a TV remote battery. Your remote needs a battery but it’s not dependent on the battery brand. You can use any XYZ brand that you want and it will work. So we can say that the TV remote is loosely coupled with the brand name. Dependency Inversion makes your code more reusable.