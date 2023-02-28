#Heron-Centric: Ruminations of a Language Designer  
##The Principles of Good Programming  
####by Christopher Diggins  
#####July 24, 2011

### SOLID

[SOILD-Principle](./principle.md)
In software engineering, SOLID is a mnemonic acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable. The principles are a subset of many principles promoted by American software engineer and instructor Robert C. Martin,
[1][2][3] first introduced in his 2000 paper Design Principles and Design Patterns discussing software rot.

<table><tbody><tr><td><div>Advertisement</div><a href="https://www.artima.com/zcr/adclick.php?n=a74ab060" target="_blank"></a></td></tr></tbody></table>

Today's post is a lightly edited repost from [my blog at The Area](http://area.autodesk.com/blogs/chris/the_principle_of_good_programming), a web-site dedicated to users of Autodesk media and entertainment products. I came up with this list of principles to help with a recent C# training I gave, and I thought that members of the Artima.com community could appreciate these principles and have some interesting insights to share.

# Principles of Good Programming

The principles of good programming are closely related to principles of good design and engineering. The following programming principles have helped me over the years become a better programmer, and I believe can help any developer become more efficient and to produce code which is easier to maintain and that has fewer defects.

**DRY - Don’t repeat yourself** - This is probably the single most fundamental tenet in programming is to avoid repetition. Many programming constructs exist solely for that purpose (e.g. loops, functions, classes, and more). As soon as you start repeating yourself (e.g. a long expression, a series of statements, same concept) create a new abstraction. [http://en.wikipedia.org/wiki/Don%27t_repeat_yourself](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

**Abstraction Principle** - Related to DRY is the abstraction principle “Each significant piece of functionality in a program should be implemented in just one place in the source code.” [http://en.wikipedia.org/wiki/Abstraction_principle\_(programming](<http://en.wikipedia.org/wiki/Abstraction_principle_(programming)>)

**KISS (Keep it simple, stupid!)** - Simplicity (and avoiding complexity) should always be a key goal. Simple code takes less time to write, has fewer bugs, and is easier to modify. [http://en.wikipedia.org/wiki/KISS_principle](http://en.wikipedia.org/wiki/KISS_principle)

**Avoid Creating a YAGNI (You aren’t going to need it)** - You should try not to add functionality until you need it. [http://en.wikipedia.org/wiki/YAGNI](http://en.wikipedia.org/wiki/YAGNI)

**Do the simplest thing that could possibly work** - A good question to ask one’s self when programming is “What is the simplest thing that could possibly work?” This helps keep us on the path towards simplicity in the design. [http://c2.com/xp/DoTheSimplestThingThatCouldPossiblyWork.html](http://c2.com/xp/DoTheSimplestThingThatCouldPossiblyWork.html)

**Don’t make me think** - This is actually the title of a book by Steve Krug on web usability that is also relevant in programming. The point is that code should be easily read and understood with a minimum of effort required. If code requires too much thinking from an observer to understand, then it can probably stand to be simplified [http://www.sensible.com/dmmt.html](http://www.sensible.com/dmmt.html)

**Open/Closed Principle** - Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. In other words, don't write classes that people can modify, write classes that people can extend. [http://en.wikipedia.org/wiki/Open_Closed_Principle](http://en.wikipedia.org/wiki/Open_Closed_Principle)

**Write Code for the Maintainer** - Almost any code that is worth writing is worth maintaining in the future, either by you or by someone else. The future you who has to maintain code often remembers as much of the code, as a complete stranger, so you might as well always write for someone else. A memorable way to remember this is “Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.” [http://c2.com/cgi/wiki?CodeForTheMaintainer](http://c2.com/cgi/wiki?CodeForTheMaintainer)

**Principle of least astonishment** - The principle of least astonishment is usually referenced in regards to the user interface, but the same principle applies to written code. Code should surprise the reader as little as possible. The means following standard conventions, code should do what the comments and name suggest, and potentially surprising side effects should be avoided as much as possible. [http://en.wikipedia.org/wiki/Principle_of_least_astonishment](http://en.wikipedia.org/wiki/Principle_of_least_astonishment)

**Single Responsibility Principle** - A component of code (e.g. class or function) should perform a single well defined task. [http://en.wikipedia.org/wiki/Single_responsibility_principle](http://en.wikipedia.org/wiki/Single_responsibility_principle)

**Minimize Coupling** - Any section of code (code block, function, class, etc) should minimize the dependencies on other areas of code. This is achieved by using shared variables as little as possible. “Low coupling is often a sign of a well-structured computer system and a good design, and when combined with high cohesion, supports the general goals of high readability and maintainability” [http://en.wikipedia.org/wiki/Coupling\_(computer_programming](<http://en.wikipedia.org/wiki/Coupling_(computer_programming)>)

**Maximize Cohesion** - Code that has similar functionality should be found within the same component. [http://en.wikipedia.org/wiki/Cohesion\_(computer_science](<http://en.wikipedia.org/wiki/Cohesion_(computer_science)>)

**Hide Implementation Details** - Hiding implementation details allows change to the implementation of a code component while minimally affecting any other modules that use that component. [http://en.wikipedia.org/wiki/Information_Hiding](http://en.wikipedia.org/wiki/Information_Hiding)

**Law of Demeter** - Code components should only communicate with their direct relations (e.g. classes that they inherit from, objects that they contain, objects passed by argument, etc.) [http://en.wikipedia.org/wiki/Law_of_Demeter](http://en.wikipedia.org/wiki/Law_of_Demeter)

**Avoid Premature Optimization** - Don’t even think about optimization unless your code is working, but slower than you want. Only then should you start thinking about optimizing, and then only with the aid of empirical data. "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil" - Donald Knuth. [http://en.wikipedia.org/wiki/Program_optimization](http://en.wikipedia.org/wiki/Program_optimization)

**Code Reuse is Good** - Not very pithy, but as good a principle as any other. Reusing code improves code reliability and decrease development time. [http://en.wikipedia.org/wiki/Code_reuse](http://en.wikipedia.org/wiki/Code_reuse)

**Separation of Concerns** - Different areas of functionality should be managed by distinct and minimally overlapping modules of code. [http://en.wikipedia.org/wiki/Separation_of_concerns](http://en.wikipedia.org/wiki/Separation_of_concerns)

**Embrace Change** - This is the subtitle of a book by Kent Beck, and is also considered a tenet of extreme programming and the agile methodology in general. Many other principles are based on the concept that you should expect and welcome change. In fact very old software engineering principles like minimizing coupling are related directly to the requirement of making code easier to change. Whether or not you are an extreme programming practitioner, this approach to writing code just makes sense. [http://www.amazon.com/gp/product/0321278658](http://www.amazon.com/gp/product/0321278658)
