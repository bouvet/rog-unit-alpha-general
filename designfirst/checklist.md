Is the design understandable?

<table><tbody><tr><td><ul><li>Is the design organized in a way that team members can easily find the information that they're looking for?</li><li>Is the design as simple as it can be, while still fulfilling the objectives of the design and giving sufficient direction to implementers?</li><li>Is the design neither too simple nor too advanced? The design sophistication should be appropriate to the experience level of other team members and technical stakeholders. This applies to both the concept and the representation of the design.</li><li>Does the design express what the designer intends to express?</li></ul></td></tr></tbody></table>

Is the design consistent?

<table><tbody><tr><td><ul><li>Does the design follow any design standards?</li><li>Doesthe designapply other idioms consistently?</li><li>Are the names of the design elements consistent and easy to interpret?</li><li>Does any part of the design contradict another part of it in such a way that puts the project at risk?</li><li>If the design is rendered visually, is the notation used todescribe the design used consistently so that it can be understood and is not ambiguous?</li></ul></td></tr></tbody></table>

Is the design maintainable?

<table><tbody><tr><td><ul><li>Is the design structured well enough to be maintained?</li><li>Is the design set up to appropriately accommodate expected changes? The design should not be overdone to handle <em>any</em> possible change, just reasonably expected changes.</li><li>Have redundant areas of the design been removed so that the implementation does not contain redundant code?</li></ul></td></tr></tbody></table>

Is the design traceable?

<table><tbody><tr><td><ul><li>Is it clear how the design elements relate to the requirements? This does not need to involve a heavyweight traceability strategy, but is there some way to figure out what part of the design supports a particular requirement?</li><li>It what portions of the implementation support each design element clear?</li></ul></td></tr></tbody></table>

Does the design reflect the architectural objectives of the system?

<table><tbody><tr><td><ul><li>Does the design conform to the architecture as specified?</li><li>Does it apply the architectural patterns appropriately?</li><li>Are Architectural Mechanisms used appropriately? Are they applied in all applicable circumstances?</li></ul></td></tr></tbody></table>

Are the design elements modular?

<table><tbody><tr><td><ul><li>Do the design elements have high internal cohesion? Does the degree of interaction within the unit demonstrate that all of the internal parts belong together?</li><li>Do the design elements have low coupling? Is there minimal interdependence between design elements? When design elements depend upon one another, is this done as simply as possible and in such a way that the client element will not be affected by changes to the internal parts of the supplier element?</li><li>Are the design elements defined withabstract interfaces in ways that changes can be made to the internal implementation without affecting client design elements?</li><li>Does each design element represent a clearly defined abstraction?</li></ul></td></tr></tbody></table>

Can the system be implemented from the information in the design?

<table><tbody><tr><td><ul><li>Has sufficient detail been included to direct the implementation?</li><li>Does the design constrain the implementation only as much as necessary? Does the design allow freedom for the implementer to implement it appropriately?</li><li>Is the design feasible? Is it a design that can be reasonably implemented by the team by using the technologies selected within the timeframe of the project?</li></ul></td></tr></tbody></table>

Does the design provide enough information for developer testing?

<table><tbody><tr><td><ul><li>Does the design provide enough information for developer test design? Are the expected behavior and constraints on the methods clear?</li><li>Are the collaborations between design elements clear enough to create integration tests?</li></ul></td></tr></tbody></table>

Does the design describe the system at the appropriate level of abstraction?

<table><tbody><tr><td>Does the design describe the system at the appropriate level of abstraction given the objectives? This usually means that the system is described at several different levels of abstraction and from different perspectives.</td></tr></tbody></table>

Does the design support a coarse-grained perspective of the system?

<table><tbody><tr><td><ul><li>Can the design be understood as a set of higher-order subsystems?</li><li>Are the subsystem dependencies documented?</li><li>Are interfaces clearly defined for each subsystem? Is each subsystem designed so that its services can be accessed through the interface without a need to access internal parts?</li><li>Is each subsystem designed so that someone can work within one part without having to understand the internal parts of the other elements?</li></ul></td></tr></tbody></table>

Packages and Organization

<table><tbody><tr><td><ul><li>Is the package partitioning logical and consistent? Does it make sense to team members and stakeholders?</li><li>Do package names accurately describe the contents of the package and the role that they play in the architecture? Do they follow naming conventions?</li><li>Do public packages and interfaces provide a logically cohesive set of services?</li><li>Are all the contents of a package listed? Are the classes within a package cohesive?</li><li>Do package dependencies correspond to the dependencies of the contained classes?</li><li>Are there packages or classes within a package that can be separated into an independent or sub-package?<br></li></ul></td></tr></tbody></table>

Views

<table><tbody><tr><td><ul><li>Does each diagram help the designer reason about the design or communicate key design decisions to the team?</li><li>Are the relationships between diagrams clear when several diagrams are used to describe behavior?</li><li>Is it easy to navigate between related diagrams?</li><li>Does each diagram focus on a relevant perspective? For instance, does a set of diagrams show a single class and its direct relationships, rather than usingone or two diagrams to show all classes?</li><li>Is each diagram complete, yet minimal? Does it show everything relevant to that view and nothing more?</li><li>Are the diagrams tidy and easy to interpret, with a minimum of clutter?</li></ul></td></tr></tbody></table>

UML

<table><tbody><tr><td><ul><li>Does the visual model conform to UML standards so that all stakeholders can understand the model over time? (See the<a href="http://www.uml.org/" target="_blank">OMG UML Resource Page</a>for more information.)</li><li>Does the visual model conform to project- or organization-specific modeling standards?</li><li>Is the visual model internally consistent? For instance, if an object diagram shows a relationship between objects, does a corresponding relationship exist between the appropriate classes?</li><li>Does the name of each class clearly reflect the role that it plays?</li><li>Does each class offer the required behavior?</li><li>Is there at least onerealization association defined for each interface? The realization may represent a third-party implementation of the subsystem.</li><li>Arethere dependency associations from each subsystem to the interfaces that it uses?</li><li>Is each operation in a subsystem interface described in a sequence diagram or at least mapped directly to an operation in a class?</li><li>Does each class represent a single, well-defined abstraction?</li><li>Are generalization relationships used only to inherit definitions, not behavior (implementation)? In other words, is behavior shared through the use of association, aggregation, and containment relationships rather than generalization?</li><li>Are parent classes in generalization relationships abstract? Are the "leaf" classes in a generalization hierarchy the only concrete classes?</li><li>Are stereotypes used consistently and meaningfully?</li><li>Dostate charts exist for classes with complex or restrictive state changes?</li><li>Do relationships have descriptive role or association names (one or the other, but not both) andcorrect multiplicities?</li><li>Are relationships between classes unidirectional whenever possible?<br></li></ul></td></tr></tbody></table>

Non-UML Visual Modeling
