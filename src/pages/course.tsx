import Flutter from "../assets/icons/icon-4.png";
import Web from "../assets/web.png";

const Course = () => {
  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Minus icon
    const minusSVG = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
          </svg>
        `;

    // SVG for Plus icon
    const plusSVG = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        `;

    // Toggle the content's max-height for smooth opening and closing
    if (content?.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
      if (icon) {
        icon!.innerHTML = plusSVG;
      }
    } else {
      content!.style.maxHeight = content!.scrollHeight + "px";
      icon!.innerHTML = minusSVG;
    }
  }
  return (
    <>
      <div id="course" className=" md:h-[600px] bg-gradient-to-b from-transparent via-indigo-200 to-stone-400 flex justify-center  flex-col">
        <div className=" px-6 sm:px-12 md:px-16 pt-32 pb-12 md:pb-0 lg:px-24 flex flex-col-reverse md:grid grid-cols-6 lg:gap-8 md:pt-8">
          <div className=" flex justify-between flex-col gap-4 items-start col-span-4">
            <p className=" bg-[var(--primary-color)] text-white text-xs  md:text-sm py-1 px-4 rounded-xl">
              Course 001
            </p>
            <h2 className=" text-[var(--text-primary)] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
              Flutter Application Development
            </h2>
            <p className="text-[var(--text-tertiary)] text-xs sm:text-sm md:text-base ">
              Master Android Application Development by building data-driven
              responsive apps from scratch with our exclusive course
            </p>
            <div className=" flex justify-start items-center gap-6 *:text-sm">
              <button className=" font-semibold text-lg backdrop-blur-md backdrop-opacity-60 bg-[var(--primary-color)] w-20 h-8 md:w-32 md:h-12  rounded-md">
                Apply
              </button>
              <p className="text-[var(--text-tertiary)] *:text-2xl font-semibold text-white">N <span className=" line-through">290,000</span> N <span>230,000</span></p>
              <img
                src={Flutter}
                alt=""
                height={60}
                width={60}
                className=" backdrop-blur-xl rounded-full"
              />
            </div>
          </div>
          <div className=" col-span-2">
            <img src={Web} alt="" />
          </div>
        </div>
      </div>
      <div className=" min-h-[650px] h-full md:h-[600px] px-6 md:px-16  xl:px-24 py-12">
        <div className="h-full rounded-3xl bg-[var(--surface)] p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="border-b-2 border-b-slate-600 py-2">
            <h3 className="text-[var(--text-primary)] font-semibold text-xl sm:text-xl md:text-xl lg:text-3xl">
              What You`ll Learn{" "}
            </h3>
          </div>
          <div className=" py-4">
            <p className=" text-[var(--text-tertiary)] text-xs sm:text-sm   md:text-lg tracking-wide leading-5" >
              In this Flutter Development Course, you will embark on a journey
              to master Flutter, Google’s revolutionary open-source framework
              that allows you to build highly efficient, natively compiled
              applications for mobile (Android & iOS), web, and desktop
              platforms using a single codebase. Whether you're aiming to create
              an app that delivers a seamless experience on smartphones or a
              responsive web interface, Flutter provides the tools and
              flexibility to achieve it—all while maintaining high performance,
              beautiful designs, and fast development cycles. Throughout this
              course, you will gain a comprehensive understanding of how Flutter
              leverages the Dart programming language to create applications
              that are not only visually stunning but also perform at the
              highest level across all devices. You will dive into the core
              concepts of Flutter, from the basics of setting up your
              environment to advanced techniques in state management,
              navigation, and backend integration.
            </p>
          </div>
          <div style={{scrollbarWidth:"none"}} className=" py-4 *:py-1 *:px-4 *:bg-[var(--background)] *:rounded-2xl flex justify-start gap-3 overflow-scroll *:whitespace-nowrap scroll-smooth  *:text-[var(--text-tertiary)]">
            <div>Dart Programing</div>
            <div>Flutter Development</div>
            <div>Firebase Integration</div>
            <div>State Management</div>
          </div>
        </div>
      </div>
      <div className=" min-h-screen  md:px-16  lg:px-24 py-12">
        <div className="h-full sm:rounded-3xl bg-[var(--surface)] p-8 lg:p-12">
          <div className="border-b-2 border-b-stone-600 py-2">
            <h3 className="text-[var(--text-primary)] font-semibold text-xl sm:text-xl md:text-xl lg:text-3xl">
              Course Content{" "}
            </h3>
          </div>
          <div className=" py-4">
            <p className=" text-[var(--text-tertiary)] text-sm sm:text-base  md:text-lg">
              Here is the course content and sylabus
            </p>
          </div>

          <div className=" py-6">
            <ul className=" list-disc">
              {flutter.course_outline.map((e, i) => {
                return (
                  <li key={i}>
                    <div className="border-b border-b-stone-800 bg-transparent">
                      <button
                        onClick={() => toggleAccordion(i)}
                        className=" w-full flex bg-transparent py-4 justify-between *:text-[var(--text-tertiary)]"
                      >
                        <span>{e.module}</span>
                        <span id={`icon-${i}`} className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                          </svg>
                        </span>
                      </button>
                      <div
                        id={`content-${i}`}
                        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                      >
                        <ol className=" pb-4 space-y-1 list-disc">
                          {e.topics.map((data, index) => {
                            return (
                              <>
                                <li key={`list-${index}`} className="  ms-4 list-item">
                                  <h4 className=" text-sm font-medium text-[var(--text-tertiary)]">
                                    {data.title}
                                  </h4>
                                  <p className=" text-sm text-[var(--text-tertiary)] opacity-60">
                                    {data.description}
                                  </p>
                                </li>
                              </>
                            );
                          })}
                        </ol>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
              
        </div>
      </div>
    </>
  );
};

export default Course;

const flutter = {
  course_outline: [
    {
      module: "Introduction to Flutter & Dart",
      topics: [
        {
          title: "Understanding Flutter's architecture and framework",
          description:
            "Learn how Flutter’s unique framework allows developers to build cross-platform applications using a single codebase. Understand the key components like widgets, the rendering engine, and the Dart runtime that make Flutter highly performant and flexible.",
        },
        {
          title: "Setting up the Flutter development environment",
          description:
            "Set up your development environment with Flutter, Dart, and an integrated development environment (IDE) to start building apps.",
        },
        {
          title: "Overview of Dart language basics and syntax",
          description:
            "Learn the fundamentals of Dart, Flutter’s programming language. This includes understanding variables, data types, functions, classes, and object-oriented programming principles.",
        },
      ],
    },
    {
      module: "Building User Interfaces (UI)",
      topics: [
        {
          title: "Creating visually appealing layouts with Flutter widgets",
          description:
            "Explore Flutter's widget tree structure and learn to create layouts using basic and advanced widgets.",
        },
        {
          title:
            "Working with Material Design and Cupertino (iOS-style) widgets",
          description:
            "Understand the differences between Material Design for Android and Cupertino widgets for iOS, and how to implement them.",
        },
        {
          title:
            "Designing responsive UIs for different screen sizes and platforms",
          description:
            "Learn to build apps that respond to screen size and orientation, ensuring a consistent experience across mobile, web, and desktop platforms.",
        },
        {
          title: "Customizing themes and styles to create a unique app design",
          description:
            "Explore theming in Flutter and how to customize the look and feel of your app, from colors and typography to button styles.",
        },
      ],
    },
    {
      module: "State Management",
      topics: [
        {
          title: "Understanding state in Flutter apps",
          description:
            "Learn the concept of state, how it affects the UI, and why managing it is important in building dynamic apps.",
        },
        {
          title: "Implementing stateful and stateless widgets",
          description:
            "Understand the difference between stateful and stateless widgets and when to use each type in your app.",
        },
        {
          title:
            "Managing state using common approaches like Provider, Riverpod, or Bloc",
          description:
            "Learn the most popular state management techniques in Flutter, such as Provider, Riverpod, and Bloc, and when to use them.",
        },
      ],
    },
    {
      module: "Navigation and Routing",
      topics: [
        {
          title: "Implementing basic and advanced navigation techniques",
          description:
            "Learn how to navigate between screens in Flutter, using both basic and advanced navigation techniques.",
        },
        {
          title: "Understanding and managing routes and screens",
          description:
            "Explore routing concepts and how to manage navigation flows in complex apps with multiple screens.",
        },
        {
          title:
            "Using navigation libraries like go_router for smooth transitions",
          description:
            "Leverage libraries like go_router to handle more complex navigation and transitions in your Flutter app.",
        },
      ],
    },
    {
      module: "Working with APIs and Backend Integration",
      topics: [
        {
          title: "Making HTTP requests and consuming REST APIs",
          description:
            "Learn how to make HTTP requests, connect your app to external APIs, and handle network responses.",
        },
        {
          title: "Parsing JSON data",
          description:
            "Understand how to parse JSON data into Dart objects and work with dynamic data in your Flutter app.",
        },
        {
          title:
            "Integrating Firebase services (authentication, Firestore, etc.)",
          description:
            "Explore the use of Firebase for authentication, real-time databases (Firestore), and other cloud services in your app.",
        },
      ],
    },
    {
      module: "Handling Forms and User Input",
      topics: [
        {
          title: "Creating and managing forms",
          description:
            "Learn how to build and manage user forms in Flutter, including handling form validation.",
        },
        {
          title: "Handling user input validation and error handling",
          description:
            "Implement input validation and show error messages to ensure data integrity in your app.",
        },
        {
          title: "Understanding form fields and controllers",
          description:
            "Work with controllers to manage form fields and input state effectively.",
        },
      ],
    },
    {
      module: "Local Data Storage",
      topics: [
        {
          title:
            "Implementing persistent storage with SQLite and SharedPreferences",
          description:
            "Learn how to store data locally using SQLite databases and SharedPreferences for smaller datasets.",
        },
        {
          title: "Managing data using Hive or other local database solutions",
          description:
            "Understand how to manage local data with lightweight, noSQL databases like Hive.",
        },
      ],
    },
    {
      module: "Animations and Motion",
      topics: [
        {
          title:
            "Adding simple and complex animations to enhance user experience",
          description:
            "Explore how to add motion to your app with simple and complex animations to improve user engagement.",
        },
        {
          title:
            "Working with built-in animation libraries and custom animations",
          description:
            "Leverage Flutter’s animation libraries to add smooth transitions and custom animations to your app.",
        },
        {
          title:
            "Understanding Hero animations and implicit/explicit animations",
          description:
            "Learn to create Hero animations and differentiate between implicit and explicit animations for enhanced user experiences.",
        },
      ],
    },
    {
      module: "Testing and Debugging",
      topics: [
        {
          title: "Writing unit, widget, and integration tests for Flutter apps",
          description:
            "Learn the best practices for writing unit, widget, and integration tests to ensure the quality and reliability of your app.",
        },
        {
          title: "Debugging common issues and optimizing app performance",
          description:
            "Identify and troubleshoot common performance issues, and learn how to optimize your app's speed and efficiency.",
        },
        {
          title: "Using Flutter DevTools for profiling and troubleshooting",
          description:
            "Understand how to use Flutter’s DevTools for profiling and troubleshooting issues in your app’s performance and behavior.",
        },
      ],
    },
    {
      module: "Deploying Flutter Apps",
      topics: [
        {
          title: "Building and packaging your app for Android, iOS, and web",
          description:
            "Learn how to compile, build, and package your app for various platforms including Android, iOS, and web.",
        },
        {
          title:
            "Configuring apps for the Google Play Store, Apple App Store, and web hosting",
          description:
            "Understand the processes and requirements for publishing your app to the Google Play Store, Apple App Store, or web hosting services.",
        },
        {
          title: "Understanding the app submission process",
          description:
            "Get a detailed understanding of how to submit your apps for review, manage app store listings, and handle app updates.",
        },
      ],
    },
  ],
};
